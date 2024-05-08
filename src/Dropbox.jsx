import 'primereact/resources/themes/bootstrap4-dark-blue/theme.css';
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
        <h2 className="text-4xl text-center pt-5">
          Upload Your Solar Panel Thermal Images
        </h2>
        <h2 className="text-4xl text-center pb-10">SEE RESULTS</h2>
        <Toast ref={toast}></Toast>
        <div>
          <FileUpload
            key={resetKey} // Reset FileUpload component when key changes
            name="demo[]"
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

        {uploading && (
          <div className="text-center">
            <i className="pi pi-spin pi-spinner text-5xl p-8"></i> Uploading and
            Processing...
          </div>
        )}
        {!uploading && results.length > 0 && (
          <div className="grid lg:grid-cols-3 gap-4">
            {results.map((result, index) => (
              <div key={index} className="bg-[#fffff3] relative">
                <Button
                  onClick={() => deleteResult(index)}
                  icon="pi pi-times"
                  className="p-button-rounded p-button-sm p-8"
                  style={{
                    position: 'absolute',
                    top: '-5px',
                    left: '-20px',
                    color: 'red',
                    fontSize: '30px',
                  }}
                />
                <div className="grid justify-center p-12">
                  {result.image && (
                    <img
                      src={`data:image/png;base64,${result.image}`}
                      alt={`Result ${index}`}
                    />
                  )}
                  <p className="p-12">{result.report}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
