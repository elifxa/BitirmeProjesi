import './aboutProjectDetails.css';

function aboutProjectDetails() {
  return (
    <div className="mt-6 pt-4">
      <div className="grid place-items-center p-6">
        <div
          style={{
            backgroundColor: '#082f49',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5)',
            padding: '20px 0 0 20px',
            borderRadius: '2px',
            maxHeight: '100px',
            marginBottom: '30px',
          }}
        >
          <h1
            className="md:text-4xl font-medium italic text-[#082f49]"
            style={{
              backgroundColor: '#f8f5e6',
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.5)',
              padding: '30px',
              borderRadius: '2px',
            }}
          >
            What does our team do?
          </h1>
        </div>
      </div>

      {/*  */}
      {/*  */}

      <div className="grid md:grid-cols-6 gap-4 ">
        <div className="col-start-2 col-span-4">
          <div className="grid md:grid-cols-3 gap-4 mt-11 pt-11">
            <div className="md:col-span-2">
              <p className="step-number">01</p>
              <h2 className="heading">Machine Learning</h2>
              <p className="text-lg">
                At the core of our platform are advanced machine learning
                algorithms trained to detect hot spots in panels with precision
                and speed. Leveraging cutting-edge techniques and extensive
                datasets, our algorithms continuously learn and improve to
                deliver the most accurate results possible.
              </p>
            </div>
            <div>image1</div>
          </div>
          {/*  */}
          <div className="grid md:grid-cols-4 gap-4 mt-6 pt-6">
            <div>image2</div>
            <div className="md:col-start-3 md:col-span-2">
              <p className=" step-number">02</p>
              <h2 className="heading">Backend</h2>
              <p className="text-lg">
                Behind the scenes, with powerful servers and efficient data
                management techniques, we ensure seamless operation even during
                peak usage. Our backend is engineered to handle large volumes of
                data and complex computations, guaranteeing a smooth experience
                for our users.
              </p>
            </div>
          </div>
          {/*  */}
          <div>
            <div className="grid md:grid-cols-3 gap-4 mt-11 pt-11">
              <div className="md:col-span-2">
                <p className="step-number">03</p>
                <h2 className="heading">Frontend</h2>
                <p className="text-lg">
                  Our frontend is designed with user-friendliness and efficiency
                  in mind, providing you with a seamless experience as you
                  interact with our powerful algorithms and machine learning
                  capabilities. Here is what you can expect:
                </p>
              </div>
              <div>image3</div>
            </div>
            <ul
              className="grid lg:grid-cols-2 gap-8 mt-8 "
              style={{
                width: '100%',
              }}
            >
              <div className="bg-[#083344] text-[#f8f5e6] p-8 rounded-2xl shadow-xl ">
                <li className="list-decimal list-inside font-bold text-xl">
                  Responsive React Framework:
                </li>
                <p className="p-4 text-base ">
                  Our website is built using React, a highly versatile and
                  efficient JavaScript library for building user interfaces.
                </p>
              </div>
              <div className="bg-[#155e75] text-[#f8f5e6] p-8 rounded-2xl shadow-xl">
                <li className="list-decimal list-inside font-bold text-xl">
                  Streamlined styling with Tailwind CSS:
                </li>
                <p className="p-4 text-base">
                  We leverage the power of Tailwind CSS to streamline our
                  styling process.
                </p>
              </div>
              <div className="lg:bg-[#155e75] bg-[#083344] text-[#f8f5e6] p-8 rounded-2xl shadow-xl">
                <li className="list-decimal list-inside font-bold text-xl">
                  Enhanced aesthetics with Material-UI (MUI) and PrimeReact:
                </li>
                <p className="p-4 text-base ">
                  We incorporate the styling components from Material-UI and
                  PrimeReact to enhance the aesthetics and functionality of our
                  interface.
                </p>
              </div>
              <div className="lg:bg-[#083344] bg-[#155e75] text-[#f8f5e6] p-8 rounded-2xl shadow-xl">
                <li className="list-decimal list-inside font-bold text-xl">
                  Optimized user experience for smooth navigation:
                </li>
                <p className="p-4 text-base ">
                  With a focus on user experience, we have optimized our
                  frontend to minimize complexity and maximize efficiency.
                </p>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default aboutProjectDetails;
