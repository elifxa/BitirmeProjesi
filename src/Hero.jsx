function Hero() {
  return (
    <>
      <div
        className="flex items-center justify-between p-8"
        style={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}
      >
        <div className=" text-4xl">Text</div>
        <img
          src="https://d2tez01fe91909.cloudfront.net/wp-content/uploads/2023/01/AdobeStock_166916488-scaled-e1683923540796.jpeg"
          alt="Image"
          className="h-80 w-auto"
        />
      </div>
    </>
  );
}

export default Hero;
