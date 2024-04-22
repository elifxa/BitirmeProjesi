import InfoPage from './infoPage';
import TableOfContents from './TableofContext';

export default function SolarPanelinfo() {
  return (
    <div className="h-screen">
      <div className="relative h-1/2">
        <img
          src="https://assets-global.website-files.com/60605a18185fff2ff1aa822b/60d1c120545350f0f34c309b_Gu%CC%88nes%CC%A7%20Tarlas%C4%B1.jpg"
          alt="Description of the image"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.30] shadow-lg"
        />
        <p className="absolute bottom-2 left-8 p-8 text-white text-6xl">
          Everything You Need to Know!
        </p>
      </div>

      <div className="grid grid-cols-4 gap-4 md:mx-auto md:mt-4 lg:mt-4">
        <div className="col-span-3 overflow-auto">
          <InfoPage />
        </div>
        <div className="col-span-1 ">
          <TableOfContents />
        </div>
      </div>
    </div>
  );
}
