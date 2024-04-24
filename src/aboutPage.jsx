import AboutProjectDetails from './aboutProjectDetails';

function AboutPage() {
  return (
    <div className=" mt-8 pt-6">
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-3 md:col-span-2">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="52"
              height="52"
              fill="#000000"
              viewBox="0 0 256 256"
            >
              <path d="M221.87,83.16A104.1,104.1,0,1,1,195.67,49l22.67-22.68a8,8,0,0,1,11.32,11.32l-96,96a8,8,0,0,1-11.32-11.32l27.72-27.72a40,40,0,1,0,17.87,31.09,8,8,0,1,1,16-.9,56,56,0,1,1-22.38-41.65L184.3,60.39a87.88,87.88,0,1,0,23.13,29.67,8,8,0,0,1,14.44-6.9Z"></path>
            </svg>
            <h3 className="ml-2 text-3xl font-medium">Mission</h3>
          </div>
          <hr className="border-2 border-gray-400 w-full my-6" />
          <p className="pt-6 text-lg">
            Our mission is to spearhead a transformative shift in the solar
            energy landscape by meticulously identifying and resolving hotspot
            problems within solar panels. Through our rigorous research,
            innovative technologies, and unwavering dedication, we strive to
            optimize the performance and longevity of solar panel installations.
            By addressing these critical issues head-on, we aim to propel the
            widespread adoption of solar energy as a clean, reliable, and
            sustainable power source, empowering individuals and communities to
            embrace a greener, more resilient future.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div></div>
        <div className="col-span-3 md:col-span-2 grid place-items-end">
          <div className="flex items-center justify-end relative mt-8 pt-4">
            <h3 className="pr-2 text-3xl font-medium">Vision</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="52"
              height="52"
              fill="#000000"
              viewBox="0 0 256 256"
            >
              <path d="M238.73,43.67A8,8,0,0,0,232,40H152a8,8,0,0,0-7.28,4.69L135.94,64H28a8,8,0,0,0-5.92,13.38L57.19,116,22.08,154.62A8,8,0,0,0,28,168h73.09a8,8,0,0,0,7.28-4.69L117.15,144h62.43l-34.86,76.69a8,8,0,1,0,14.56,6.62l80-176A8,8,0,0,0,238.73,43.67ZM95.94,152H46.08l27.84-30.62a8,8,0,0,0,0-10.76L46.08,80h82.59Zm90.91-24H124.42l32.73-72h62.43Z"></path>
            </svg>
          </div>
          <hr className="border-2 border-gray-400 w-full my-6" />
          <p className="pt-6 text-lg">
            At the heart of our vision lies a profound commitment to driving
            unprecedented advancements in solar energy efficiency and
            sustainability. We envision a world where every solar panel operates
            at its peak potential, free from the constraints of hotspot-related
            challenges. By harnessing cutting-edge technologies and fostering
            collaborative partnerships, we aspire to lead the global movement
            towards a cleaner, brighter future powered by solar energy. Our
            vision extends beyond mere innovation; it encompasses a steadfast
            dedication to environmental stewardship, energy independence, and
            social responsibility, paving the way for a more equitable and
            sustainable world for generations to come.
          </p>
        </div>
      </div>
      <AboutProjectDetails />
    </div>
  );
}

export default AboutPage;
