import Dropbox from './Dropbox';

export default function useProject() {
  return (
    <div className="h-screen bg-gradient-to-bl from-gray-950 via-gray-700 to-gray-800  text-[#ddd]">
      <div>
        <div className="p-24">Hero</div>
        <div className="grid md:grid-cols-6 gap-4 m-24">
          <div className="md:col-start-2 col-span-4">Dropbox</div>
          <div className="md:col-start-2 col-span-4">See Results</div>
        </div>
      </div>
    </div>
  );
}
