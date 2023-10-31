import React from "react";

function About() {
  return (
    <div className="py-5 bg-light">
      <div className="container px-4">
        <div className="row align-items-center justify-content-between">
          <div className="col-md-6">
            <img
              src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
              alt="about us"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6">
            <h2 className="text-dark display-4 fw-bold">
              React development is carried out by passionate developers
            </h2>
            <p className="mt-4 text-secondary">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
              omnis voluptatem accusantium nemo perspiciatis delectus atque
              autem! Voluptatum tenetur beatae unde aperiam, repellat expedita
              consequatur! Officiis id consequatur atque doloremque!
            </p>
            <p className="mt-4 text-secondary">
              Nobis minus voluptatibus pariatur dignissimos libero quaerat iure
              expedita at? Asperiores nemo possimus nesciunt dicta veniam
              aspernatur quam mollitia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
