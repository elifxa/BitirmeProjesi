import InfoPage from './infoPage';
import TableOfContents from './TableofContext';

export default function SolarPanelinfo() {
  return (
    <div className="h-screen">
      <div className="relative h-1/2">
        <img
          src="https://assets-global.website-files.com/60605a18185fff2ff1aa822b/60d1c120545350f0f34c309b_Gu%CC%88nes%CC%A7%20Tarlas%C4%B1.jpg"
          alt="Lots of solar panels in sunset"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.30] shadow-lg"
        />

        <div className="absolute bottom-2 left-8 p-8 text-[#fef3c7] ">
          <h1
            className="text-6xl"
            style={{ fontFamily: 'Libre Baskerville, sans-serif' }}
          >
            Solar Panels
          </h1>
          <h2
            className="text-3xl"
            style={{ fontFamily: 'Libre Baskerville, sans-serif' }}
          >
            Everything You Need to Know!
          </h2>
        </div>
      </div>

      <div className="md:flex md:flex-row-reverse">
        <div className="md:w-1/4">
          <TableOfContents />
        </div>
        <div className="md:flex-1 overflow-auto">
          <InfoPage />
        </div>
      </div>
    </div>
  );
}
