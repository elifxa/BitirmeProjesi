import AboutPage from './aboutPage';

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
            className="mt-2 px-6 py-2 border-4 border-[#fafafa] text-xl text-[#fafafa] rounded-md hover:bg-gray-400  hover:bg-opacity-50 transition duration-300 ease-in-out"
            onClick={scrollToPage}
          >
            Learn More!
          </button>
        </div>
      </div>

      <div id="page" className="grid grid-cols-6 gap-4">
        <div className="col-start-2 col-span-4 ...">
          <AboutPage />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
