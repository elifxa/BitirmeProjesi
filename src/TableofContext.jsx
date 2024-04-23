import { useState, useEffect } from 'react';

function TableOfContents() {
  const [activeSection, setActiveSection] = useState('section1');

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = [
        'section1',
        'section2',
        'section3',
        'section4',
        'section5',
        'section6',
        'section7',
        'section8',
      ];
      const scrollPosition = window.scrollY;

      const currentSection = sectionIds.find((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop - 200;
          const sectionBottom = sectionTop + section.offsetHeight;
          return scrollPosition >= sectionTop && scrollPosition < sectionBottom;
        }
        return false;
      });
      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection]);

  const isSectionActive = (sectionId) => {
    return sectionId === activeSection;
  };

  return (
    <div className="sticky top-20 ml-6 z-10 mt-6">
      <h2 className="font-bold text-2xl">TABLE OF CONTENTS</h2>
      <ul className="mt-6 space-y-2 list-none flex flex-col gap-5">
        <li className="flex-1">
          <a
            href="#section1"
            className={`text-xl block flex items-center ${
              isSectionActive('section1')
                ? 'text-black font-medium '
                : 'text-gray-500'
            }`}
          >
            <span
              className={`h-2 w-2 mr-2 rounded-full border border-[#800080] ${
                isSectionActive('section1') ? 'bg-[#800080]' : ''
              }`}
            ></span>
            Solar Panels
          </a>
        </li>
        <li className="flex-1">
          <a
            href="#section2"
            className={`text-xl block flex items-center ${
              isSectionActive('section2')
                ? 'text-black font-medium'
                : 'text-gray-500'
            }`}
          >
            <span
              className={`h-2 w-2 mr-2 rounded-full border border-[#800080] ${
                isSectionActive('section2') ? 'bg-[#800080]' : ''
              }`}
            ></span>
            How Do Solar Panels Work?
          </a>
        </li>
        <li className="flex-1">
          <a
            href="#section3"
            className={`text-xl block flex items-center ${
              isSectionActive('section3')
                ? 'text-black font-medium'
                : 'text-gray-500'
            }`}
          >
            <span
              className={`h-2 w-2 mr-2 rounded-full border border-[#800080] ${
                isSectionActive('section3') ? 'bg-[#800080]' : ''
              }`}
            ></span>
            Solar panel installation
          </a>
        </li>
        <li className="flex-1">
          <a
            href="#section4"
            className={`text-xl block flex items-center ${
              isSectionActive('section4')
                ? 'text-black font-medium'
                : 'text-gray-500'
            }`}
          >
            <span
              className={`h-2 w-2 mr-2 rounded-full border border-[#800080] ${
                isSectionActive('section4') ? 'bg-[#800080]' : ''
              }`}
            ></span>
            Care and lifespan of solar panels
          </a>
        </li>
        <li className="flex-1">
          <a
            href="#section5"
            className={`text-xl block flex items-center ${
              isSectionActive('section5')
                ? 'text-black font-medium'
                : 'text-gray-500'
            }`}
          >
            <span
              className={`h-2 w-2 mr-2 rounded-full border border-[#800080] ${
                isSectionActive('section5') ? 'bg-[#800080]' : ''
              }`}
            ></span>
            Causes of Deterioration of Solar Panels
          </a>
        </li>
        <li className="flex-1">
          <a
            href="#section6"
            className={`text-xl block flex items-center ${
              isSectionActive('section6')
                ? 'text-black font-medium'
                : 'text-gray-500'
            }`}
          >
            <span
              className={`h-2 w-2 mr-2 rounded-full border border-[#800080] ${
                isSectionActive('section6') ? 'bg-[#800080]' : ''
              }`}
            ></span>
            Advantages of Solar Panels
          </a>
        </li>
        <li className="flex-1">
          <a
            href="#section7"
            className={`text-xl block flex items-center ${
              isSectionActive('section7')
                ? 'text-black font-medium'
                : 'text-gray-500'
            }`}
          >
            <span
              className={`h-2 w-2 mr-2 rounded-full border border-[#800080] ${
                isSectionActive('section7') ? 'bg-[#800080]' : ''
              }`}
            ></span>
            Solar Panel Applications
          </a>
        </li>

        <li className="flex-1">
          <a
            href="#section8"
            className={`text-xl block flex items-center ${
              isSectionActive('section8')
                ? 'text-black font-medium '
                : 'text-gray-500'
            }`}
          >
            <span
              className={`h-2 w-2 mr-2 rounded-full border border-[#800080] ${
                isSectionActive('section8') ? 'bg-[#800080]' : ''
              }`}
            ></span>
            The Future of Solar Panels
          </a>
        </li>
      </ul>
    </div>
  );
}

export default TableOfContents;
