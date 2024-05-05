import Dropbox from './Dropbox';

export default function useProject() {
  return (
    <div className="h-screen bg-gradient-to-bl from-gray-950 via-gray-700 to-gray-900  text-[#ddd]">
      <div>
        <div className="p-40 pb-16">
          <h1
            className="text-center text-7xl font-semibold"
            style={{ textShadow: '2px 3px 5px black' }}
          >
            Get Started
          </h1>
          <h1
            className="text-center text-7xl font-semibold"
            style={{ textShadow: '2px 3px 5px black' }}
          >
            With!
          </h1>
        </div>
      </div>
      <div className="grid md:grid-cols-6 gap-4 m-24">
        <div className="md:col-start-2 col-span-4">Dropbox</div>
        <div className="md:col-start-2 col-span-4">See Results</div>
      </div>
    </div>
  );
}
