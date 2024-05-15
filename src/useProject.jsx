import Dropbox from './Dropbox';
import './useProject.css';

export default function useProject() {
  return (
    <div className="h-screen ">
      <div className="relative h-1/2">
        <img
          src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Lots of solar panels in sunset"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.50] shadow-lg"
        />

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-[#fafafa]">
          <h1
            className="text-6xl"
            style={{ fontFamily: 'Libre Baskerville, sans-serif' }}
          >
            Get Started
          </h1>
          <h2
            className="text-4xl"
            style={{ fontFamily: 'Libre Baskerville, sans-serif' }}
          >
            Try our service right now!
          </h2>
        </div>
      </div>

      <div>
        <div className="grid lg:grid-cols-4 justify-center pt-10">
          <h2 className="ml-10 text-5xl lg:col-span-2">How to Use?</h2>
          <div></div> <div></div>
          <div className="p-10 m-10 bg-[#fffff3]  rounded-md shadow-lg step-card">
            <h3 className="text-4xl pb-4">01</h3>
            <p className="text-center">TAKE A THERMAL IMAGE OF YOUR PANEL.</p>
          </div>
          <div className="p-10 m-10 bg-[#fffff3]  rounded-md shadow-lg step-card">
            <h3 className="text-4xl pb-4">02</h3>
            <p className="text-center">
              UPLOAD THIS IMAGE TO THE{' '}
              <span style={{ fontWeight: 'bold', color: '#155e75' }}>
                CHOOSE{' '}
              </span>
              BUTTON BELOW.
            </p>
          </div>
          <div className="p-10 m-10 bg-[#fffff3]  rounded-md shadow-lg step-card">
            <h3 className="text-4xl pb-4">03</h3>
            <p className="text-center">
              MAKE SURE YOU UPLOAD THE CORRECT IMAGE(S) BEFORE CLICKING THE
              UPLOAD BUTTON.
            </p>
          </div>
          <div className="p-10 m-10 bg-[#fffff3] rounded-md shadow-lg step-card">
            <h3 className="text-4xl pb-4">04</h3>
            <p className="text-center">
              AND YOU WILL SEE THE RESULTING IMAGE AND COORDINATES OF THE
              DEFECTIVE AREA IN A SECOND!
            </p>
          </div>
        </div>
      </div>

      <div className=" ">
        <div className="grid justify-center justify-items-center md:grid-cols-6 gap-4 ">
          <div className="md:col-start-2 col-span-4">
            <Dropbox />
          </div>
        </div>
      </div>
    </div>
  );
}
