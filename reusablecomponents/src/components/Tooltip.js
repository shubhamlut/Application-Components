import React, { useState } from "react";
import "../styles/Tooltip.css"; // Import your component-specific CSS file

const MyComponent = () => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  const handleMouseEnter = () => {
    setTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setTooltipVisible(false);
  };

  return (
    <div
      className="tooltip-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      Hover me
      {isTooltipVisible && (
        <div className="tooltip">
          <div className="tooltipHeader">Tool tip header</div>
          <div className="tooltipContent">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
            // harum facilis. Est non illum cum reiciendis. Ullam eaque
            inventore // blanditiis temporibus suscipit nam quisquam soluta vero
            sint neque, // provident facilis?
          </div>
        </div>
      )}
    </div>
  );
};

export default MyComponent;
