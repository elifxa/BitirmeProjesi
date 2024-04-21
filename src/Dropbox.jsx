import 'primereact/resources/themes/bootstrap4-dark-blue/theme.css';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { FileUpload } from 'primereact/fileupload';

export default function Dropbox({ onUploadSuccess }) {
  const [uploadedImages, setUploadedImages] = useState([]);
  const handleFileUpload = (event) => {
    const files = event.files;
    const newUploadedImages = [...uploadedImages];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();
      reader.onload = (e) => {
        const uploadedImageUrl = e.target.result;
        newUploadedImages.push(uploadedImageUrl);
        setUploadedImages(newUploadedImages);
        onUploadSuccess(newUploadedImages);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="grid grid-cols-6 gap-4">
      <div className="col-start-2 col-span-4 ...">
        <div className="card">
          <FileUpload
            name="demo[]"
            multiple
            accept=".jpg,.jpeg,.png"
            maxFileSize={100000000}
            emptyTemplate={
              <p className="m-0">Drag and drop files to here to upload.</p>
            }
            onSelect={handleFileUpload}
          />
        </div>
      </div>
    </div>
  );
}

// PropTypes validation
Dropbox.propTypes = {
  onUploadSuccess: PropTypes.func.isRequired,
};
