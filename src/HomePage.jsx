import Hero from './Hero';
import HomePageCounter from './HomePageCounter';

function HomePage() {
  return (
    <div>
      <Hero />
      <div className="m-10 p-10 grid lg:grid-cols-3 gap-14 ">
        <div className="text-[#020617] grid justify-items-center">
          <i className="fa fa-fire fa-3x"></i>
          <HomePageCounter target={1000} text={'+'} />
          <p className="text-2xl">Hotspots Detected</p>
        </div>
        <div className="text-[#020617] grid justify-items-center">
          <i className="fa fa-bolt fa-3x"></i>
          <HomePageCounter target={5000} text={'kWh'} />
          <p className="text-2xl">Energy Saved</p>
        </div>
        <div className="text-[#020617] grid justify-items-center">
          <i className="fa fa-smile fa-3x"></i>
          <HomePageCounter target={98} text={'%'} />
          <p className="text-2xl">Customer Satisfaction</p>
        </div>
      </div>

      <div className="grid grid-cols-6 gap-4">
        <div className="col-start-2 col-span-4 ">
          <div className="grid justify-items-center">
            <h1>What are we solving?</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
