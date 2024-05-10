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
              backgroundColor: '#FAFAFA',
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

      <div className="grid lg:grid-cols-6 gap-4 ">
        <div className="col-start-2 col-span-4">
          <div className="grid lg:grid-cols-3 gap-4 mt-6 pt-6">
            <div className="lg:col-span-2 ">
              <p className="step-number">01</p>
              <h2 className="heading">Machine Learning</h2>
              <div className="shadow-lg  rounded-2xl  p-8 bg-[#164e63] text-white">
                <p className="text-lg">
                  At the core of our platform are advanced machine learning
                  algorithms trained to detect hot spots in panels with
                  precision and speed. Leveraging cutting-edge techniques and
                  extensive datasets, our algorithms continuously learn and
                  improve to deliver the most accurate results possible.
                </p>
              </div>
            </div>
            <div className="content-center">
              <ul className="list-inside ml-5 mt-3 pt-8">
                <li className="p-2  list-inside font-medium text-xl">
                  <span className="font-extrabold	">1.</span> Leveraging the
                  power of Python3 and PyTorch
                </li>
                <li className="p-2  list-inside font-medium text-xl">
                  <span className="font-extrabold	">2.</span> YOLOv8(You Only
                  Look Once)
                </li>
                <li className="p-2  list-inside font-medium text-xl">
                  <span className="font-extrabold	">3.</span>Roboflow and Google
                  Colab
                </li>
                <li className="p-2 list-inside font-medium text-xl">
                  <span className="font-extrabold	">4.</span> Utilizing OpenCV
                  (Open Source Computer Vision Library)
                </li>
              </ul>
            </div>
          </div>
          {/*  */}
          <div className="grid lg:grid-cols-4 gap-8 mt-6 pt-6">
            <div className="lg:col-span-2 content-center">
              <ul className="list-inside ml-5 mt-3 pt-8">
                <li className="p-2 list-inside font-medium text-xl">
                  <span className="font-extrabold">1.</span> Python
                </li>
                <li className="p-2 list-inside font-medium text-xl">
                  <span className="font-extrabold">2.</span> Streamlined styling
                  with Tailwind CSS
                </li>
                <li className="p-2 list-inside font-medium text-xl">
                  <span className="font-extrabold">3.</span> Enhanced aesthetics
                  and functionality with Material-UI(MUI) and PrimeReact
                </li>
                <li className="p-2 list-inside font-medium text-xl">
                  <span className="font-extrabold">4.</span> Interactive main
                  page for easy photo uploads and report generation
                </li>
                <li className="p-2 list-inside font-medium text-xl">
                  <span className="font-extrabold">5.</span> Optimized user
                  experience for smooth navigation
                </li>
              </ul>
            </div>
            <div className="lg:col-start-3 lg:col-span-2 ">
              <p className="step-number">02</p>
              <h2 className="heading">Backend</h2>
              <div className="shadow-lg rounded-2xl p-8 bg-[#083344] text-white">
                <p className="text-lg">
                  Behind the scenes, with powerful servers and efficient data
                  management techniques, we ensure seamless operation even
                  during peak usage. Our backend is engineered to handle large
                  volumes of data and complex computations, guaranteeing a
                  smooth experience for our users.
                </p>
              </div>
            </div>
          </div>

          {/*  */}

          <div className="grid lg:grid-cols-3 gap-4 mt-11 pt-11">
            <div className="md:col-span-2">
              <p className="step-number">03</p>
              <h2 className="heading">Frontend</h2>
              <div className="shadow-lg  rounded-2xl  p-8 bg-[#164e63] text-white">
                <p className="text-lg">
                  Our frontend interface is meticulously crafted with an
                  unwavering focus on user-friendliness and efficiency, ensuring
                  that every interaction with our platform is not just seamless,
                  but also deeply intuitive. From the moment you engage with our
                  interface, you will notice the careful consideration put into
                  every element, from the layout to the smallest details of
                  interaction.
                </p>
              </div>
            </div>
            <div className="content-center">
              <ul className="list-inside ml-5 mt-3 pt-8 ">
                <li className="p-2  list-inside font-medium text-xl">
                  <span className="font-extrabold	">1.</span> Responsive React
                  Framework
                </li>
                <li className="p-2  list-inside font-medium text-xl">
                  <span className="font-extrabold	">2.</span> Streamlined styling
                  with Tailwind CSS
                </li>
                <li className="p-2  list-inside font-medium text-xl">
                  <span className="font-extrabold	">3.</span> Enhanced aesthetics
                  and functionality with Material-UI (MUI) and PrimeReact
                </li>
                <li className="p-2 list-inside font-medium text-xl">
                  <span className="font-extrabold	">4.</span> Interactive main
                  page for easy photo uploads and report generation
                </li>
              </ul>
            </div>
          </div>
          <img
            src="https://miro.medium.com/v2/resize:fit:1400/1*FcJQX2zzna7-rdEocH3jYw.png"
            alt="Lots of solar panels in sunset"
            className="mt-20 mb-20 "
            style={{
              maxWidth: '100%',
              boxShadow: '4px 4px 10px 10px rgba(0, 0, 0, 0.1)',
              mixBlendMode: 'darken',
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default aboutProjectDetails;
