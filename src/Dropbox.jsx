import 'primereact/resources/themes/bootstrap4-dark-blue/theme.css';
import { useRef, useState } from 'react';
import { Toast } from 'primereact/toast';
import { FileUpload } from 'primereact/fileupload';

import './Dropbox.css';

export default function Dropbox() {
  const toast = useRef(null);
  const [results, setResults] = useState([]);
  const [uploading, setUploading] = useState(false);
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

  return (
    <div>
      <div className="grid grid-cols-1 justify-items-center">
        <h2 className="text-4xl ">UPLOAD YOUR IMAGES AND</h2>
        <h2 className="text-4xl pb-20">SEE RESULTS HERE</h2>
        <Toast ref={toast}></Toast>
        <FileUpload
          mode="basic"
          name="demo[]"
          url="http://13.53.214.255/detect"
          accept="image/*"
          maxFileSize={10000000}
          multiple={true}
          onUpload={onUpload}
        />

        {uploading && (
          <div className="text-center py-4">
            <i className="pi pi-spin pi-spinner text-5xl p-8"></i> Uploading and
            Processing...
          </div>
        )}
        {!uploading && results.length > 0 && (
          <div className="grid grid-cols-3 gap-4">
            {results.map((result, index) => (
              <div key={index} className="bg-[#e0d1b7]">
                <div className="grid justify-items-center p-12">
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
