import './aboutProjectDetails.css';

function aboutProjectDetails() {
  return (
    <div className="mt-6 pt-4">
      <div className="grid place-items-center p-6">
        <div
          style={{
            backgroundColor: '#082f49',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5)',
            padding: '20px 0 0 20px',
            borderRadius: '2px',
            maxHeight: '100px',
            marginBottom: '30px',
          }}
        >
          <h1
            className="md:text-4xl font-medium italic text-[#082f49]"
            style={{
              backgroundColor: '#f8f5e6',
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.5)',
              padding: '30px',
              borderRadius: '2px',
            }}
          >
            What does our team do?
          </h1>
        </div>
      </div>

      {/*  */}
      {/*  */}

      <div className="grid md:grid-cols-6 gap-4 ">
        <div className="col-start-2 col-span-4">
          <div className="grid md:grid-cols-3 gap-4 mt-11 pt-11">
            <div className="md:col-span-2">
              <p className="step-number">01</p>
              <h2 className="heading">Machine Learning</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel
                temporibus aliquid quaerat dolores impedit sequi aliquam nihil
                repellendus perspiciatis, quisquam quae velit mollitia labore
                dolor officiis dolorem praesentium hic! Eius?
              </p>
            </div>
            <div>image1</div>
          </div>

          {/*  */}

          <div className="grid md:grid-cols-4 gap-4 mt-6 pt-6">
            <div>image2</div>
            <div className="md:col-start-3 md:col-span-2">
              <p className=" step-number">02</p>
              <h2 className="heading">Backend</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Nesciunt laborum rem facere maiores labore quasi enim, repellat
                molestiae dolore eum! Atque nulla tenetur, ut maiores mollitia
                autem blanditiis officiis dicta!
              </p>
            </div>
          </div>

          {/*  */}

          <div className="grid md:grid-cols-3 gap-4 mt-11 pt-11">
            <div className="md:col-span-2">
              <p className="step-number">03</p>
              <h2 className="heading">Frontend</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sed
                odit quaerat adipisci, nemo aliquid sunt voluptates eius eveniet
                asperiores a in necessitatibus beatae consectetur veniam
                pariatur dicta sapiente voluptate.
              </p>
            </div>
            <div>image3</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default aboutProjectDetails;
