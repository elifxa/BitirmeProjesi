import { Image } from 'primereact/image';
import { useRef, useState, useEffect } from 'react';
import { Toast } from 'primereact/toast';
import { FileUpload } from 'primereact/fileupload';
import { Button } from 'primereact/button';

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

  const onUpload = (event) => {
    const files = event.files;
    console.log('Files to upload:', files);

    setUploading(true);

    Promise.all(
      files.map((file) => {
        const formData = new FormData(); // Create a new FormData object for each file
        formData.append('image', file);

        return fetch('http://13.53.214.255/detect', {
          method: 'POST',
          body: formData,
        }).then((response) => response.json());
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
          detail: 'Failed to Upload Files',
        });
      });
  };

  const deleteResult = (index) => {
    const updatedResults = [...results];
    updatedResults.splice(index, 1);
    setResults(updatedResults);
    localStorage.setItem('dropbox_results', JSON.stringify(updatedResults));
  };

  return (
    <div>
      <div className="grid grid-cols-1 justify-items-center">
        <h2
          className="text-4xl text-center pb-10"
          style={{ textShadow: '2px 3px 5px gray' }}
        >
          SEE RESULTS
        </h2>
        <Toast ref={toast}></Toast>
        <div className="dropbox-container">
          <FileUpload
            key={resetKey}
            name="image"
            url="http://13.53.214.255/detect"
            multiple
            accept="image/*"
            maxFileSize={10000000}
            emptyTemplate={
              <p className="m-0">Drag and drop files to here to upload.</p>
            }
            onUpload={onUpload}
          />
        </div>

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
                  <Image
                    src={`data:image/png;base64,${result.image}`}
                    alt={`Result ${index}`}
                    className="w-full h-auto mb-4"
                    preview
                  />
                </div>
                <div className="w-full  grid grid-col justify-between relative">
                  <div>
                    <h3 className="text-xl font-bold">Result {index + 1}</h3>
                    <p>{result.report}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
