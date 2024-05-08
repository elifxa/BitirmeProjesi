import Dropbox from './Dropbox';
import './useProject.css';

export default function useProject() {
  return (
    <div className="h-screen bg-[#fffff3]">
      <div>
        <div className="pt-32 pb-16  grid justify-center justify-items-center text-7xl">
          <h3 className="header text-center">
            <span className="header-span">Get</span>{' '}
            <span className="header-span">Started</span>{' '}
          </h3>{' '}
          <hr className="border-4 w-full border-[#f1ebe5] my-2 " />
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
