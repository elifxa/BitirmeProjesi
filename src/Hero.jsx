import HomePage from './HomePage';
import './Hero.css';
import { useEffect, useRef, useState } from 'react';

function Hero() {
  const textRef = useRef(null);
  const homeRef = useRef(null);
  const [animationTriggered, setAnimationTriggered] = useState(false);

  useEffect(() => {
    if (!animationTriggered) {
      const handleIntersect = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            textRef.current.classList.add('animate-bottom');
            setAnimationTriggered(true);
          }
        });
      };

      const observer = new IntersectionObserver(handleIntersect, {
        threshold: buildThresholdList(),
      });

      observer.observe(textRef.current);

      return () => {
        observer.unobserve(textRef.current);
      };
    }
  }, [animationTriggered]);

  const buildThresholdList = () => {
    const thresholds = [];
    for (let i = 0; i <= 1.0; i += 0.01) {
      thresholds.push(i);
    }
    return thresholds;
  };

  const scrollToHomePage = () => {
    homeRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="h-screen">
      <div className="relative h-full overflow-hidden flex justify-center items-center shadow-2xl ">
        <img
          src="https://images.unsplash.com/photo-1583345237708-add35a664d77?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Solar Panel"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.60] shadow-lg"
        />

        <div
          ref={textRef}
          className="absolute left-0 w-full text-white text-center pt-24 pb-8"
          style={{ fontFamily: 'Libre Baskerville, sans-serif' }}
        >
          <h1 className="lg:text-6xl text-4xl font-medium mx-auto">
            Empower Your Solar Potential:
          </h1>
          <h1 className="lg:text-6xl text-4xl font-medium mx-auto pt-4 ">
            Hotspot Detection Unleashed
          </h1>
          <div className="grid lg:grid-cols-3 pt-12">
            <p className="col-start-2">
              Welcome to our platform! Get to know us better and start your
              journey today! We are here to guide you every step of the way.
            </p>
          </div>
          <button
            className="mt-16 px-20 py-4 rounded-full border-4 border-[#fafafa] text-xl text-[#fafafa] hover:bg-gray-400  hover:bg-opacity-50 transition duration-300 ease-in-out"
            onClick={scrollToHomePage}
          >
            Read More!
          </button>
        </div>
      </div>
      <div ref={homeRef}>
        <div className="pt-8">
          <HomePage />
        </div>
      </div>
    </div>
  );
}

export default Hero;
