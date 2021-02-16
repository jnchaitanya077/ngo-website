import React from "react";
import FullHeading from "../components/FullHeading";
import FullImage from "../components/FullImage";
import Waypoint from "../components/Waypoint";

// Data
import { SchemesDetails } from "../data/Schemes";

function Schemes({ element }) {
  return (
    <div className="w-100 odd">
      <Waypoint element={element} />
      <section className="container mt-md-3">
        <FullHeading
          title="Major Schemes"
          body="We make a difference in the lives of people during a very traumatic time in their life. Meeting their medical transport needs eases their burden."
        />
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-md-5 mt-3">
          {SchemesDetails.map((eachScheme) => (
            <FullImage key={eachScheme.id} schemeDetails={eachScheme} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Schemes;
