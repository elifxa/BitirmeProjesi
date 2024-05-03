import { Link } from 'react-router-dom';

function ToContactPageButton() {
  return (
    <div className="m-16 pb-8">
      <div className="gap-3 py-2 px-4">
        <Link
          to="/contact"
          className="bg-[#082f49] hover:bg-[#164e63] text-white text-2xl font-bold py-8 px-16 rounded-2xl"
        >
          Go to Contact Page
        </Link>
      </div>
    </div>
  );
}

export default ToContactPageButton;
