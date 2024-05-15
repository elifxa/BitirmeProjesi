import { useNavigate } from 'react-router-dom';

function ToContactPageButton() {
  const navigate = useNavigate(); // Hook for navigation

  const navigateToUseProject = () => {
    navigate('/contact'); // Navigate to the specified path
  };

  return (
    <div className="m-16 pb-8">
      <div className="gap-3 py-2 px-2 max-w-max">
        <button
          className="bg-[#082f49] hover:bg-[#164e63] text-white lg:text-2xl font-bold py-3 px-6 lg:py-6 lg:px-12 rounded-full outline outline-offset-2 outline-[#164e63] whitespace-nowrap "
          onClick={navigateToUseProject}
        >
          Go to Contact Page
        </button>
      </div>
    </div>
  );
}

export default ToContactPageButton;
