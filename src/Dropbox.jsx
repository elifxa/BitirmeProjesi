import 'primereact/resources/themes/bootstrap4-dark-blue/theme.css';
import { useRef, useState } from 'react';
import { Toast } from 'primereact/toast';
import { FileUpload } from 'primereact/fileupload';

import './Dropbox.css';

export default function Dropbox() {
  const toast = useRef(null);
  const [resultImage, setResultImage] = useState(null);
  const [report, setReport] = useState('');
  const [uploading, setUploading] = useState(false); // State to track uploading status

  const onUpload = (event) => {
    const formData = new FormData();
    formData.append('image', event.files[0]);

    setUploading(true); // Set uploading state to true when upload begins

    fetch('http://13.53.214.255/detect', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Response from server:', data);
        setResultImage(data.image);
        setReport(data.report);
        setUploading(false); // Set uploading state to false when result is received
        toast.current.show({
          severity: 'info',
          summary: 'Success',
          detail: 'File Uploaded and Processed Successfully',
        });
      })
      .catch((error) => {
        console.error('Error:', error);
        setUploading(false); // Set uploading state to false in case of error
        toast.current.show({
          severity: 'error',
          summary: 'Error',
          detail: 'Failed to Upload File',
        });
      });
  };

  return (
    <div>
      <div className="grid grid-cols-1 justify-items-center ">
        <Toast ref={toast}></Toast>
        <FileUpload
          mode="basic"
          name="demo[]"
          url="http://13.53.214.255/detect"
          accept="image/*"
          maxFileSize={10000000}
          onUpload={onUpload}
        />{' '}
        <h2 className="text-5xl pt-20">SEE RESULTS HERE</h2>
        {uploading && ( // Display loading spinner if uploading is true
          <div className="text-center py-4">
            <i className="pi pi-spin pi-spinner text-5xl p-8"></i> Uploading and
            Processing...
          </div>
        )}
        {!uploading &&
          resultImage && ( // Display result if not uploading and resultImage is available
            <div className="bg-[#e0d1b7]">
              <div className="grid justify-items-center p-12">
                <img
                  src={`data:image/png;base64,${resultImage}`}
                  alt="Result"
                />
                <p className="p-12">{report}</p>
              </div>
            </div>
          )}
      </div>
    </div>
  );
}
