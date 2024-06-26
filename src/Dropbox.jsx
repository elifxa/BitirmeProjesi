import { useRef, useState, useEffect } from 'react';
import { Toast } from 'primereact/toast';
import { FileUpload } from 'primereact/fileupload';
import { Button } from 'primereact/button';
import { ProgressSpinner } from 'primereact/progressspinner';
import jsPDF from 'jspdf';
import heic2any from 'heic2any';

import './Dropbox.css';

export default function Dropbox() {
  const toast = useRef(null);
  const [results, setResults] = useState(() => {
    const storedResults = localStorage.getItem('dropbox_results');
    return storedResults ? JSON.parse(storedResults) : [];
  });
  const [uploading, setUploading] = useState(false);
  const [resetKey, setResetKey] = useState(0); // Key to reset FileUpload component

  useEffect(() => {
    localStorage.setItem('dropbox_results', JSON.stringify(results));
  }, [results]);

  const supportedFormats = [
    'image/jpeg',
    'image/png',
    'image/heic',
    'image/heif',
  ];

  const convertImage = (file) => {
    return new Promise((resolve, reject) => {
      if (file.type === 'image/heic' || file.type === 'image/heif') {
        heic2any({ blob: file, toType: 'image/jpeg' })
          .then((conversionResult) => {
            resolve(conversionResult);
          })
          .catch((error) => {
            reject(error);
          });
      } else {
        const reader = new FileReader();
        reader.onload = (e) => {
          const img = new Image();
          img.onload = () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            canvas.toBlob((blob) => {
              resolve(blob);
            }, 'image/jpeg'); // Always convert to JPEG
          };
          img.src = e.target.result;
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
      }
    });
  };

  const handleFiles = (files) => {
    setUploading(true);

    Promise.all(
      files.map((file) => {
        return convertImage(file).then((blob) => {
          const formData = new FormData();
          formData.append('image', blob, file.name);

          return fetch('https://www.beha-tech.com/detect', {
            method: 'POST',
            body: formData,
          }).then((response) => response.json());
        });
      })
    )
      .then((data) => {
        console.log('Response from server:', data);
        setResults(data.flat()); // Flatten the array of arrays to a single array
        setUploading(false);
        toast.current.show({
          severity: 'info',
          summary: 'Success',
          detail: 'Files Uploaded and Processed Successfully',
        });

        // Clear uploaded files by resetting FileUpload component
        setResetKey((prevKey) => prevKey + 1);
      })
      .catch((error) => {
        console.error('Error:', error);
        setUploading(false);
        toast.current.show({
          severity: 'error',
          summary: 'Error',
          detail:
            error.message === 'Unsupported file type'
              ? 'Unsupported file type. Please upload JPEG or PNG images.'
              : 'Failed to Upload Files',
        });
      });
  };

  const onUpload = (event) => {
    const files = event.files;
    console.log('Files to upload:', files);
    handleFiles(files);
  };

  const deleteResult = (index) => {
    const updatedResults = [...results];
    updatedResults.splice(index, 1);
    setResults(updatedResults);
    localStorage.setItem('dropbox_results', JSON.stringify(updatedResults));
  };

  const downloadPDF = (index) => {
    const doc = new jsPDF();

    const result = results[index];
    const img = document.createElement('img');
    img.src = `data:image/png;base64,${result.image}`;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      const imgData = canvas.toDataURL('image/png');
      doc.addImage(imgData, 'PNG', 10, 20, 90, 90);
      doc.text(10, 120, result.report);

      // Add date and time to the top right of the page
      const now = new Date();
      const dateString = `${now.getFullYear()}-${
        now.getMonth() + 1
      }-${now.getDate()}`;
      const timeString = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
      const dateTimeString = `${dateString} ${timeString}`;
      const { lineHeight } = doc.getFont().metadata;
      const textWidth =
        (doc.getStringUnitWidth(dateTimeString) * doc.internal.getFontSize()) /
        doc.internal.scaleFactor;
      const pageWidth = doc.internal.pageSize.getWidth();
      doc.text(pageWidth - textWidth - 10, 15, dateTimeString);

      // Trigger download
      const pdfBlob = doc.output('blob');
      const link = document.createElement('a');
      link.href = URL.createObjectURL(pdfBlob);
      link.download = `result_${index}_${Date.now()}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(link.href); // Clean up
    };
  };

  return (
    <div>
      <div className="grid grid-cols-1 justify-items-center">
        <Toast ref={toast}></Toast>
        <div className="dropbox-container">
          <FileUpload
            key={resetKey}
            name="image"
            url="https://www.beha-tech.com/detect"
            multiple
            accept="image/*"
            maxFileSize={10000000}
            emptyTemplate={
              <p className="m-0">Drag and drop files to here to upload.</p>
            }
            onUpload={onUpload}
            chooseLabel="Choose"
            uploadLabel="Upload"
          />
        </div>
        {uploading && (
          <div className="spinner-overlay">
            <ProgressSpinner />
          </div>
        )}
        {!uploading && results.length > 0 && (
          <div className="flex flex-wrap gap-4 mt-10">
            {results.map((result, index) => (
              <div
                key={index}
                className="relative p-4 w-full lg:w-auto lg:flex"
              >
                <Button
                  onClick={() => deleteResult(index)}
                  icon="pi pi-times"
                  className="p-button-rounded p-button-lg p-1 absolute top-0 left-0 -m-2"
                  style={{ color: 'red' }}
                />
                <div className="relative w-full md:w-1/3 pr-4">
                  <img
                    src={`data:image/jpeg;base64,${result.image}`}
                    alt={`Result ${index}`}
                    className="w-full h-auto mb-4"
                    style={{ width: '100%', maxHeight: '300px' }}
                  />
                </div>
                <div>
                  <div className="w-full grid grid-col justify-between relative">
                    <h3 className="text-xl font-bold">Result {index + 1}</h3>
                    <p style={{ fontSize: '16px', whiteSpace: 'pre-wrap' }}>
                      {result.report}
                    </p>
                  </div>
                  <Button
                    onClick={() => downloadPDF(index)}
                    label="Download PDF"
                    icon="pi pi-download"
                    className="p-button-lg"
                    style={{
                      color: 'green',
                      border: '1px solid green',
                      padding: '0.5rem',
                      marginTop: '1rem',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
