import { Link } from 'react-router-dom';

function ToContactPageButton() {
  return (
    <div className="m-16 pb-8">
      <div className="gap-3 py-2 px-2">
        <Link
          to="/contact"
          className="bg-[#082f49] hover:bg-[#164e63] text-white text-2xl font-bold py-6 px-12 rounded-full outline outline-offset-2 outline-[#164e63]"
        >
          Go to Contact Page
        </Link>
      </div>
    </div>
  );
}

export default ToContactPageButton;
