import React from "react";
//This component can used as one section where the different items can be placed. Section can be repeated using map

import "../styles/Section.css";
const Section = ({ data }) => {
  return (
    <div className="sectionWrapper">
      {data.map((row) => {
        return (
          <div className="section">
            <div className="sectionItems">
              {Object.keys(row).map((item) => {
                return <div>{row[item]}</div>;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Section;
