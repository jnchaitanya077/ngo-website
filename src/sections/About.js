import React from "react";
import ActionButton from "../components/Button";
import FullHeading from "../components/FullHeading";
import People from "../images/image-11.jpg";
import { cta } from "../data/Styles";

function About(props) {
  return (
    <div className="w-100 odd">
      <section className="container">
        <FullHeading
          title="Who Are We"
          body="The SAMAGRA Foundation focuses on three parts of the Community: Children, Youth and Women to empower them Holistically for a better society. What creates confidence, makes them more intelligent, safe and affluent"
        />
        <div className="row mt-4">
          <div className="col-md-12 col-xl-8">
            <img src={People} alt="aboutUSImage" className="img-fluid" />
          </div>
          <div className="col-md-12 col-xl-4">
            <div className="col-12 mt-3 mt-md-0 ps-2">
              <h3>Our Mission</h3>
              <p className="justify text-muted">
                Creating Awareness, Career Building and Counselling for all the
                sections of the needy people in the society for making them
                professional on “Free of Cost”.
              </p>
            </div>
            <div className="col-12 mt-3 ps-2">
              <h3>Our Vision</h3>
              <p className="text-muted">
                Creating awareness in all sections of Healthcare, Personality
                Development and Skill Enhancement, etc., to build a skilled
                society and make their careers successful by conducting
                counseling sessions for needy sections on cost-free.
              </p>
              <ActionButton
                name="Know more"
                url="/"
                style={cta}
                type="btn-sm"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
