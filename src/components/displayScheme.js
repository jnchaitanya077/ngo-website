import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import { SchemesDetails } from "../data/Schemes";
import Paragraph from "./ParagraphBuilder";
import Waypoint from "./Waypoint";
import { v4 as uuidv4 } from 'uuid';
import GradientImage from "./GradientImage";
import Button from "./Button";
import { cta } from "../data/Styles"


import Stats from "./Stats";
import ImageCard from "./ImageCard";


function DisplayScheme({ element }) {
  const match = useRouteMatch("/Schemes/:schemeId");
  const {
    params: { schemeId },
  } = match;
  console.log(schemeId);

  const [isLoading, Loading] = useState(true);
  const [data, setData] = useState();
  const [otherSchemes, setSchemes] = useState();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    // Find the Scheme based on its title and set the state.
    var e = SchemesDetails.find((scheme) => scheme.title === schemeId);
    setData(e);
    setSchemes(SchemesDetails.filter((eachScheme) => eachScheme.title !== e.title));
    Loading(!Loading);
  }, [schemeId]);

  return isLoading ? (
    "Loading.."
  ) : data ? (<>
    <GradientImage title={schemeId} image={data.image} />
    {console.log("inside")}
    <div className="container">

      <div className="row">
        <div className="col-xl-8">
          <Waypoint element={element} />
          <div
            className="mt-md-3 mb-md-5"
            style={styles.paragraphStyles}
          >
            <h3>Overview</h3>
            {data.fullDescription.paragraph.map((eachPara) => (
              <Paragraph
                key={uuidv4()}
                text={eachPara.text && eachPara.text} //send only if text is present or null
                list={eachPara.list && eachPara.list} //send only if list is present or null
                qoute={eachPara.qoute && eachPara.qoute} //send only if qoute is present or null
              />
            ))}
            <Button name="Donate" style={cta} />
          </div>
        </div>

        <div className="col-xl-4">
          <Stats />
        </div>
      </div>

      <hr />
      <h3>Other Schemes</h3>
      <div className="row row-cols-1 row-cols-md-4">
        {otherSchemes.map((t) => <div>
          <ImageCard key={uuidv4()} image={t.image} title={t.title} link={`/Schemes/${t.title}`} />
        </div>)}
      </div>
    </div>
  </>
  ) : (
        <h1>NotFound</h1>
      );
}

export default DisplayScheme;


const styles = {
  paragraphStyles: {
    lineHeight: "1.8",
    letterSpacing: "0.3px",
    textAlign: "justify",
    textJustify: "inter-word",

  }
}
