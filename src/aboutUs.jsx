import AboutPage from './aboutPage';
import AboutProjectDetails from './aboutProjectDetails';
import ToContactPageButton from './toContactPageButton';

function AboutUs() {
  const scrollToPage = () => {
    const pageElement = document.getElementById('page');
    if (pageElement) {
      pageElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="h-screen">
      <div className="relative h-3/4">
        <img
          src="https://images.unsplash.com/photo-1617269778723-73a40cf299bd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Solar Panels in rooftop"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.40] shadow-lg"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-[#fafafa]">
          <h1 className="text-4xl font-semibold">Meet With Us!</h1>
          <h1 className="text-4xl font-semibold">
            Driving Solar Innovation and Sustainability
          </h1>
          <h2 className="text-lg mt-8 pt-8">What is our mission and vision!</h2>

          <button
            className="mt-2 px-6 py-2 border-4 border-[#fafafa] text-xl text-[#fafafa] rounded-full hover:bg-gray-400  hover:bg-opacity-50 transition duration-300 ease-in-out"
            onClick={scrollToPage}
          >
            Learn More!
          </button>
        </div>
      </div>
      <div id="page" className="grid grid-cols-6 gap-4">
        <div className="col-start-2 col-span-4">
          <AboutPage />
        </div>
      </div>
      <AboutProjectDetails />

      <div className="grid grid-cols-4 gap-4 bg-[#f0f9ff] pt-16">
        <div className="col-start-2 col-span-2  flex flex-col items-center">
          <h2 className="text-5xl font-medium">Empower your curiosity!</h2>
          <h2 className="text-2xl pt-8">
            Reach out to us for anything you want to learn.
          </h2>
          <ToContactPageButton />
        </div>
      </div>
      <div style={{ borderBottom: '8px solid #164e63' }}></div>
    </div>
  );
}

export default AboutUs;
