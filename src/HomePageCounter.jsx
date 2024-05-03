import { useState, useEffect, useRef } from 'react';

function HomePageCounter({ target, text }) {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const increment = target / 200;
          let currentCount = 0;
          const intervalId = setInterval(() => {
            currentCount += increment;
            if (currentCount >= target) {
              currentCount = target;
              clearInterval(intervalId);
            }
            setCount(Math.ceil(currentCount));
          }, 1);

          return () => clearInterval(intervalId);
        }
      });
    });

    observer.observe(counterRef.current);

    return () => observer.disconnect();
  }, [target]);

  return (
    <div className="text-5xl p-4" ref={counterRef}>
      {count} {text}
    </div>
  );
}

export default HomePageCounter;
