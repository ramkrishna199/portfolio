import React from "react";

const About = () => {
  return (
    <>
      <div className="container-xxl py-6" id="about">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="d-flex align-items-center mb-3">
                <h3 className="lh-base mb-0">
                  Hi ! I'm Ramkrishna Mahato
                </h3>
              </div>
              <p className="mb-4">
                I am an enthusiastic and dedicated web developer, specializing
                in React.js, eager to launch my career in the field of web
                development. With a strong foundation in front-end technologies
                and a passion for creating interactive and user-friendly web
                applications, I am committed to delivering high-quality
                solutions.
              </p>
             
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="row g-3 mb-4"s >
                <div className="col-sm-6">
                  <img
                    className="img-fluid rounded"
                    src="img/technologies-services.png"
                    alt="/"
                  />
                </div>
                <div className="col-sm-6">
                  <img
                    className="img-fluid rounded"
                    src="img/img.jpg"
                    alt="/"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
