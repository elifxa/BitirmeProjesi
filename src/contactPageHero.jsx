import FaqPage from './faqPage';
import ContactEmail from './contactEmail';
import ContactPage from './contactPage';

function ContactPageHero() {
  return (
    <div className="h-screen">
      <div className="relative h-1/2 rounded-b-2xl">
        <img
          src="https://www.tokiomarine.com/content/dam/tokiomarine/my/non-life/get-in-touch/Contact-Us-Header-Desktop.jpg"
          alt="Contact"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.60] shadow-lg rounded-b-2xl"
        />
        <div className="absolute left-0 right-0 bottom-0 top-auto md:mt-20 md:left-12 md:ml-6 md:p-20 text-[#fff]">
          <div>
            <h1 className="text-6xl font-medium">Contact Us</h1>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 pt-12">
        <div>
          <ContactPage />
        </div>

        <div>
          <h2
            className="text-6xl font-medium pl-6 pb-8 text-[#042f2e]"
            style={{ fontFamily: 'Kalam, sans-serif' }}
          >
            Leave a Note
          </h2>
          <ContactEmail />
        </div>
      </div>

      {/*  */}

      <div>
        <h2 className="text-center text-3xl text-[#042f2e]">
          Frequently Asked Questions
        </h2>
        <FaqPage />
      </div>
      <div className="m-20">
        <hr />
      </div>
    </div>
  );
}

export default ContactPageHero;
