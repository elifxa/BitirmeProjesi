import FaqPage from './faqPage';

function ContactPage() {
  return (
    <div className="h-screen">
      <div className="relative h-1/2 bg-gray-500 rounded-b-2xl">
        <img
          src="https://www.tokiomarine.com/content/dam/tokiomarine/my/non-life/get-in-touch/Contact-Us-Header-Desktop.jpg"
          alt="Contact"
          className="absolute inset-0 w-full h-full object-cover object-left-bottom brightness-[0.60] shadow-lg rounded-b-2xl"
        />
        <div className="absolute mt-36 left-12 ml-8 p-20 text-[#fff] ">
          <div className="flex ">
            <h1 className="text-6xl font-medium">Contact Us</h1>
          </div>
        </div>
      </div>
      <div>
        <FaqPage />
      </div>
    </div>
  );
}

export default ContactPage;
