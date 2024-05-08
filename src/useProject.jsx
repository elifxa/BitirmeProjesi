import Dropbox from './Dropbox';
import './useProject.css';

export default function useProject() {
  return (
    <div className="h-screen bg-[#fffff3]">
      <div className="relative h-1/2">
        <img
          src="https://images.unsplash.com/photo-1589623003309-c2b7071aef95?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Lots of solar panels in sunset"
          className="absolute inset-0 w-full h-full object-fit brightness-[0.50] shadow-lg"
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
            Try our services immediately!
          </h2>
        </div>
      </div>

      <div className=" bg-[#fffff3]">
        <div className="grid justify-center justify-items-center md:grid-cols-6 gap-4 ">
          <div className="md:col-start-2 col-span-4">
            <Dropbox />
          </div>
        </div>
      </div>
    </div>
  );
}
