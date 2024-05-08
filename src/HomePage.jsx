import './HomePage.css';
import HomePageCounter from './HomePageCounter';
import HowItWorks from './HowItWorks';

function HomePage() {
  return (
    <div>
      <div className="p-16 grid lg:grid-cols-3 gap-14 shadow-lg">
        <div className="text-[#020617] grid justify-items-center">
          <i className="fa fa-fire fa-3x"></i>
          <HomePageCounter target={1000} text={'+'} />
          <p className="lg:text-2xl text-xl">Hotspots Detected</p>
        </div>
        <div className="text-[#020617] grid justify-items-center">
          <i className="fa fa-bolt fa-3x"></i>
          <HomePageCounter target={5000} text={'kWh'} />
          <p className="lg:text-2xl text-xl">Energy Saved</p>
        </div>
        <div className="text-[#020617] grid justify-items-center">
          <i className="fa fa-smile fa-3x"></i>
          <HomePageCounter target={98} text={'%'} />
          <p className="lg:text-2xl text-xl">Customer Satisfaction</p>
        </div>
      </div>
      {/*  */}
      <div className="grid lg:grid-cols-6 gap-4">
        <div className="col-start-2 col-span-4 ">
          <div className="grid justify-items-center mt-16">
            <h1
              className="text-center text-5xl font-medium p-6"
              style={{ textShadow: '2px 3px 5px gray' }}
            >
              Hotspot Detection Project for Solar Panels
            </h1>
          </div>
          <div>
            <h3 className="text-2xl font-medium pt-10 pl-10">
              What Are Hotspots?
            </h3>
            <hr className="border-2 border-gray-700 lg:w-1/3 w-1/2 my-2" />
          </div>
          <div className="text-lg p-12">
            <p>
              <a
                href="https://en.wikipedia.org/wiki/Hot_spot_(photovoltaics)#:~:text=In%20a%20photovoltaic%20(PV)%20module,degradation%20mode%20in%20PV%20modules"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'underline', color: '#1e40af' }}
              >
                Hot Spots
              </a>
              , refer to localized areas of increased temperature within solar
              panels. These hotspots can occur due to various factors such as
              shading, manufacturing defects, soiling, or mismatched cells. Left
              undetected and unresolved, hotspots can lead to significant
              performance degradation, reduced energy output, and even long-term
              damage to the solar panels.
            </p>
            <div className="grid justify-end p-6">
              <a
                href="https://www.linkedin.com/pulse/solar-panel-hotspots-identifying-preventing-potential-damage/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-800"
              >
                Go to LinkedIn Article
                <i className="fab fa-linkedin fa-3x ml-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/*  */}

      <div className="grid lg:grid-cols-4 gap-4 justify-items-center text-center ">
        <div className="col-start-2 col-span-2 ">
          <h2
            className=" text-5xl font-semibold pt-10"
            style={{ textShadow: '2px 3px 5px gray' }}
          >
            Our Solution
          </h2>
          <h2 className=" text-2xl font-semibold pt-4 p-8">
            Hotspot Detection Technology
          </h2>
          <p>
            To address these challenges, we have developed state-of-the-art
            hotspot detection technology. Our system monitors the performance of
            your solar panels, identifying any anomalies or hotspots with
            pinpoint accuracy.
          </p>
        </div>
      </div>

      {/*  */}

      <div className="grid lg:grid-cols-3 justify-items-center p-8">
        {/* 
        <div className="grid lg:grid-cols-3 gap-2">
          <div className="grid grid-rows-2 grid-flow-col gap-4">
            <div className="pb-4 p-14">
              <div className="flex justify-between items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  fill="#020617"
                  viewBox="0 0 256 256"
                >
                  <path d="M32,104a8,8,0,0,1,8-8H56a8,8,0,0,1,0,16H40A8,8,0,0,1,32,104ZM71.43,58.75A8,8,0,0,0,82.75,47.43L71.43,36.12A8,8,0,0,0,60.12,47.43ZM128,40a8,8,0,0,0,8-8V16a8,8,0,0,0-16,0V32A8,8,0,0,0,128,40Zm50.91,21.09a8,8,0,0,0,5.66-2.34l11.31-11.32a8,8,0,0,0-11.31-11.31L173.25,47.43a8,8,0,0,0,5.66,13.66ZM192,104a8,8,0,0,0,8,8h16a8,8,0,0,0,0-16H200A8,8,0,0,0,192,104ZM88,112a8,8,0,0,0,8-8,32,32,0,0,1,64,0,8,8,0,0,0,16,0,48,48,0,0,0-96,0A8,8,0,0,0,88,112ZM238.91,220a8,8,0,0,1-6.91,4H24a8,8,0,0,1-7-11.94l40.69-72a8,8,0,0,1,7-4.06H191.3a8,8,0,0,1,7,4.06l40.69,72A8,8,0,0,1,238.91,220Zm-52.27-68H162.27l3.48,16h29.93Zm-37.26,16-3.48-16H110.1l-3.48,16Zm-46.24,16-5.21,24h60.14l-5.21-24ZM60.32,168H90.25l3.48-16H69.36ZM37.71,208H81.55l5.22-24H51.28Zm180.58,0-13.57-24H169.23l5.22,24Z"></path>
                </svg>
                <h3 className="text-xl font-semibold">
                  Maximize Energy Output
                </h3>
              </div>
              <p className="text-base text-center">
                By detecting and resolving hotspots promptly, we ensure that
                your solar panels operate at peak efficiency, maximizing energy
                production and your return on investment.
              </p>
            </div>
            <div className=" pt-4 p-14 ">
              <div className="flex justify-between items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  fill="#020617"
                  viewBox="0 0 256 256"
                >
                  <path d="M236.8,188.09,149.35,36.22h0a24.76,24.76,0,0,0-42.7,0L19.2,188.09a23.51,23.51,0,0,0,0,23.72A24.35,24.35,0,0,0,40.55,224h174.9a24.35,24.35,0,0,0,21.33-12.19A23.51,23.51,0,0,0,236.8,188.09ZM222.93,203.8a8.5,8.5,0,0,1-7.48,4.2H40.55a8.5,8.5,0,0,1-7.48-4.2,7.59,7.59,0,0,1,0-7.72L120.52,44.21a8.75,8.75,0,0,1,15,0l87.45,151.87A7.59,7.59,0,0,1,222.93,203.8ZM120,144V104a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,180Z"></path>
                </svg>
                <h3 className="text-xl font-semibold">Prevent Damage</h3>
              </div>

              <p className="text-base text-center">
                Hotspots can cause irreparable damage to solar panels if left
                unchecked. Our proactive approach helps prevent long-term
                damage, extending the lifespan of your solar panel system.
              </p>
            </div>
          </div>

          <div className="grid grid-rows-2 grid-flow-col gap-4">
            <div className="pb-4 p-14 ">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">Safety</h3>{' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  fill="#020617"
                  viewBox="0 0 256 256"
                >
                  <path d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,200H40V72H216V200Zm-56-64a8,8,0,0,1-8,8H136v16a8,8,0,0,1-16,0V144H104a8,8,0,0,1,0-16h16V112a8,8,0,0,1,16,0v16h16A8,8,0,0,1,160,136Z"></path>
                </svg>
              </div>
              <p className="text-base text-center">
                Overheating in solar panels poses a fire risk. Detecting and
                mitigating hotspots not only preserves the integrity of your
                solar panels but also enhances safety for your property and
                surrounding areas.
              </p>
            </div>
            <div className=" pt-4 p-14 ">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">
                  Optimize Maintenance Costs
                </h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  fill="#020617"
                  viewBox="0 0 256 256"
                >
                  <path d="M184,89.57V84c0-25.08-37.83-44-88-44S8,58.92,8,84v40c0,20.89,26.25,37.49,64,42.46V172c0,25.08,37.83,44,88,44s88-18.92,88-44V132C248,111.3,222.58,94.68,184,89.57ZM232,132c0,13.22-30.79,28-72,28-3.73,0-7.43-.13-11.08-.37C170.49,151.77,184,139,184,124V105.74C213.87,110.19,232,122.27,232,132ZM72,150.25V126.46A183.74,183.74,0,0,0,96,128a183.74,183.74,0,0,0,24-1.54v23.79A163,163,0,0,1,96,152,163,163,0,0,1,72,150.25Zm96-40.32V124c0,8.39-12.41,17.4-32,22.87V123.5C148.91,120.37,159.84,115.71,168,109.93ZM96,56c41.21,0,72,14.78,72,28s-30.79,28-72,28S24,97.22,24,84,54.79,56,96,56ZM24,124V109.93c8.16,5.78,19.09,10.44,32,13.57v23.37C36.41,141.4,24,132.39,24,124Zm64,48v-4.17c2.63.1,5.29.17,8,.17,3.88,0,7.67-.13,11.39-.35A121.92,121.92,0,0,0,120,171.41v23.46C100.41,189.4,88,180.39,88,172Zm48,26.25V174.4a179.48,179.48,0,0,0,24,1.6,183.74,183.74,0,0,0,24-1.54v23.79a165.45,165.45,0,0,1-48,0Zm64-3.38V171.5c12.91-3.13,23.84-7.79,32-13.57V172C232,180.39,219.59,189.4,200,194.87Z"></path>
                </svg>
              </div>
              <p className="text-base text-center">
                By addressing potential issues early on,avoid costly repairs or
                replacements, leading to long-term savings and improved
                efficiency. Our proactive hotspot detection approach helps
                minimize maintenance expenses.
              </p>
            </div>
          </div>
        </div> */}

        <div className="box">
          <img src="image1.jpg" alt="Image 1" className="box-image" />
          <div className="box-text">Text 1</div>
        </div>
        <div className="box">
          <img
            src="https://plus.unsplash.com/premium_photo-1682145585391-1d14209c4746?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Image 2"
            className="box-image"
          />
          <div className="box-text">Text 2</div>
        </div>
        <div className="box">
          <img src="image3.jpg" alt="Image 3" className="box-image" />
          <div className="box-text">Text 3</div>
        </div>
      </div>
      {/*  */}
      <HowItWorks />
    </div>
  );
}

export default HomePage;
