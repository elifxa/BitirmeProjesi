import FaqPage from './faqPage';
import ContactEmail from './contactEmail';

function ContactPage() {
  return (
    <div className="h-screen">
      <div className="relative h-1/2 bg-gray-500 rounded-b-2xl">
        <img
          src="https://www.tokiomarine.com/content/dam/tokiomarine/my/non-life/get-in-touch/Contact-Us-Header-Desktop.jpg"
          alt="Contact"
          className="absolute inset-0 w-full h-full object-cover object-left-bottom brightness-[0.60] shadow-lg rounded-b-2xl"
        />
        <div className="absolute left-0 right-0 bottom-0 top-auto md:mt-20 md:left-12 md:ml-6 md:p-20 text-[#fff]">
          <div>
            <h1 className="text-6xl font-medium">Contact Us</h1>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-4 m-20">
        <div>
          <div className="flex flex-row p-6">
            <div className="w-6 h-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
              </svg>
            </div>
            <h3 className="text-lg pl-6 font-medium">Address</h3>
            <p className="text-lg pl-28">
              Çıplaklı, Akdeniz Blv. No:290/A, 07190 Döşemealtı/Antalya
            </p>
          </div>
          <hr className="border-1 border-gray-500 w-full my-2" />
          <div className="flex flex-row p-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                clipRule="evenodd"
              />
            </svg>
            <h3 className="text-lg pl-6 font-medium">Get in Touch</h3>
            <p className="text-lg pl-20">+90 (544) 204 12 52</p>
          </div>
          <hr className="border-1 border-gray-500 w-full my-2" />
          <div className="flex flex-row p-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M5.478 5.559A1.5 1.5 0 0 1 6.912 4.5H9A.75.75 0 0 0 9 3H6.912a3 3 0 0 0-2.868 2.118l-2.411 7.838a3 3 0 0 0-.133.882V18a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-4.162c0-.299-.045-.596-.133-.882l-2.412-7.838A3 3 0 0 0 17.088 3H15a.75.75 0 0 0 0 1.5h2.088a1.5 1.5 0 0 1 1.434 1.059l2.213 7.191H17.89a3 3 0 0 0-2.684 1.658l-.256.513a1.5 1.5 0 0 1-1.342.829h-3.218a1.5 1.5 0 0 1-1.342-.83l-.256-.512a3 3 0 0 0-2.684-1.658H3.265l2.213-7.191Z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M12 2.25a.75.75 0 0 1 .75.75v6.44l1.72-1.72a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 0 1 1.06-1.06l1.72 1.72V3a.75.75 0 0 1 .75-.75Z"
                clipRule="evenodd"
              />
            </svg>
            <h3 className="text-lg pl-6 font-medium">Email</h3>
            <div className="grid grid-rows-4 grid-flow-col gap-4">
              <p className="text-lg pl-32">elif.akcay@std.antalya.edu.tr</p>
              <p className="text-lg pl-32">anil.albayrak@std.antalya.edu.tr</p>
              <p className="text-lg pl-32">harun.sahinol@std.antalya.edu.tr</p>
              <p className="text-lg pl-32">
                senan.cobanoglu@std.antalya.edu.tr
              </p>
            </div>
          </div>
          <hr className="border-1 border-gray-500 w-full my-2" />
          <div className="flex flex-row p-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
              <path
                fillRule="evenodd"
                d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z"
                clipRule="evenodd"
              />
            </svg>
            <h3 className="text-lg pl-4 font-medium">Working Hours</h3>
            <div className="grid grid-rows-4 grid-flow-col gap-4">
              <p className="text-lg pl-14">
                Mon to Fri:<span className="pr-6"></span> 8:00 am - 5:00 pm
              </p>
              <p className="text-lg pl-14">
                Sat:<span className="pr-24"></span> 8:00 am - 11:00 am
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2
            className="text-6xl font-medium pl-6 pb-8 text-[#042f2e]"
            style={{ fontFamily: 'Kalam, sans-serif' }}
          >
            Leave a Reply
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

export default ContactPage;
