function AboutPage() {
  return (
    <div>
      <div className="grid lg:grid-cols-2 gap-12 mt-8 pt-6 ">
        <div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="52"
              height="52"
              viewBox="0 0 24 24"
              fill="#222"
            >
              <path d="M6 12c0 2.206 1.794 4 4 4 1.761 0 3.242-1.151 3.775-2.734l2.224-1.291.001.025c0 3.314-2.686 6-6 6s-6-2.686-6-6 2.686-6 6-6c1.084 0 2.098.292 2.975.794l-2.21 1.283c-.248-.048-.503-.077-.765-.077-2.206 0-4 1.794-4 4zm4-2c-1.105 0-2 .896-2 2s.895 2 2 2 2-.896 2-2l-.002-.015 3.36-1.95c.976-.565 2.704-.336 3.711.159l4.931-2.863-3.158-1.569.169-3.632-4.945 2.87c-.07 1.121-.734 2.736-1.705 3.301l-3.383 1.964c-.29-.163-.621-.265-.978-.265zm7.995 1.911l.005.089c0 4.411-3.589 8-8 8s-8-3.589-8-8 3.589-8 8-8c1.475 0 2.853.408 4.041 1.107.334-.586.428-1.544.146-2.18-1.275-.589-2.69-.927-4.187-.927-5.523 0-10 4.477-10 10s4.477 10 10 10c5.233 0 9.521-4.021 9.957-9.142-.301-.483-1.066-1.061-1.962-.947z" />
            </svg>
            <h3 className="ml-2 text-3xl font-medium">Mission</h3>
          </div>
          <hr className="border-2 border-gray-500 w-full my-6" />
          <p className="pt-6 text-lg">
            Our mission is to spearhead a transformative shift in the solar
            energy landscape by meticulously identifying and resolving hotspot
            problems within solar panels. Through our rigorous research,
            innovative technologies, and unwavering dedication, we strive to
            optimize the performance and longevity of solar panel installations.
            By addressing these critical issues head-on, we aim to propel the
            widespread adoption of solar energy as a clean, reliable, and
            sustainable power source, empowering individuals and communities to
            embrace a greener, more resilient future.
          </p>
        </div>

        <div>
          <div className="flex items-center justify-end relative">
            <h3 className="pr-2 text-3xl font-medium ">Vision</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="52"
              height="52"
              viewBox="0 0 24 24"
              fill="#222"
            >
              <path d="M12.015 7c4.751 0 8.063 3.012 9.504 4.636-1.401 1.837-4.713 5.364-9.504 5.364-4.42 0-7.93-3.536-9.478-5.407 1.493-1.647 4.817-4.593 9.478-4.593zm0-2c-7.569 0-12.015 6.551-12.015 6.551s4.835 7.449 12.015 7.449c7.733 0 11.985-7.449 11.985-7.449s-4.291-6.551-11.985-6.551zm-.015 5c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zm0-2c-2.209 0-4 1.792-4 4 0 2.209 1.791 4 4 4s4-1.791 4-4c0-2.208-1.791-4-4-4z" />
            </svg>
          </div>
          <hr className="border-2 border-gray-500 w-full my-6" />
          <p className="pt-6 text-lg">
            At the heart of our vision lies a profound commitment to driving
            unprecedented advancements in solar energy efficiency and
            sustainability. We envision a world where every solar panel operates
            at its peak potential, free from the constraints of hotspot-related
            challenges.Our vision extends beyond mere innovation; it encompasses
            a steadfast dedication to environmental stewardship, energy
            independence, and social responsibility, paving the way for a more
            equitable and sustainable world for generations to come.
          </p>
        </div>
      </div>
      <hr className="border-2 border-gray-500 w-full my-6" />
    </div>
  );
}

export default AboutPage;
