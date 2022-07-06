import React from "react";

const RangeSlider = ({ min, max, value, onChange }) => {
  return (
    <div>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default RangeSlider;
