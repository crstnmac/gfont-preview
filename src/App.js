import { useState } from "react";
import FontsLoader from "./components/FontsLoader";
import { HexColorPicker } from "react-colorful";
import Dropdown from "./components/Dropdown";
import "./styles.css";
import fonts from "./googleFonts.json";
import "normalize.css";

export default function App() {
  const [fontFamily, setFontFamily] = useState("Inter");
  const [font, setFont] = useState({
    weight: 500,
    size: 25,
    letterSpacing: 1,
    color: "#2805ff",
    alignText: "left",
    backgroundColor: "#f9f5f1",
    lineHeight: "default"
  });

  const onFontSelect = (e) => {
    setFontFamily(e.target.value);
  };

  const onChangeSliderWeight = (e) => {
    setFont({ ...font, weight: e.target.value });
  };

  const onChangeSliderSize = (e) => {
    setFont({ ...font, size: e.target.value });
  };

  const onChangeSliderSpace = (e) => {
    setFont({ ...font, letterSpacing: e.target.value });
  };

  const onChangeColor = (e) => {
    setFont({ ...font, color: e });
  };

  const onClickAlign = (move) => {
    setFont({ ...font, alignText: align(move) });
  };

  const onClickDark = () => {
    if (font.backgroundColor === "#123142") {
      setFont({ ...font, backgroundColor: "#f9f5f1", color: "#520bff" });
    } else setFont({ ...font, backgroundColor: "#123142", color: "#ffffff" });
  };

  const onChangeLineHeight = (e) => {
    setFont({ ...font, lineHeight: e.target.value });
  };

  const align = (move) => {
    switch (move) {
      case "right":
        return "right";
      case "center":
        return "center";
      default:
        return "left";
    }
  };

  return (
    <div>
      <FontsLoader
        fonts={[
          {
            font: fontFamily,
            weights: [
              100,
              "100i",
              300,
              "300i",
              400,
              "400i",
              500,
              "500i",
              600,
              "600i",
              700,
              "700i",
              800,
              "800i"
            ]
          }
        ]}
      />
      <label>Weight: {font.weight}</label>
      <input
        type="range"
        min={100}
        default={font.weight}
        max={800}
        onChange={onChangeSliderWeight}
        value={font.weight}
      />
      <br />
      <label>Size: {font.size}</label>
      <input
        type="range"
        min={8}
        default={font.size}
        max={280}
        onChange={onChangeSliderSize}
        value={font.size}
      />
      <br />
      <label>Letter Spacing : {font.letterSpacing}</label>
      <input
        type="range"
        min={1}
        default={font.letterSpacing}
        max={15}
        onChange={onChangeSliderSpace}
        value={font.letterSpacing}
      />
      <br />
      <label>Leading : {font.lineHeight}</label>
      <input
        type="range"
        min={0.5}
        default={font.lineHeight}
        max={3.0}
        step={0.1}
        onChange={onChangeLineHeight}
        value={font.lineHeight}
      />
      <br />
      <HexColorPicker color={font.color} onChange={onChangeColor} /> Color:
      {font.color}
      <br />
      <Dropdown value={fontFamily} options={fonts} onChange={onFontSelect} />
      <button onClick={() => onClickAlign("left")}>Left</button>
      <button onClick={() => onClickAlign("center")}>Center</button>
      <button onClick={() => onClickAlign("right")}>Right</button>
      <button onClick={onClickDark}>BG dark</button>
      <div
        style={{
          fontFamily: fontFamily,
          fontSize: font.size + "px",
          letterSpacing: font.letterSpacing + "px",
          color: font.color,
          border: "2px solid black",
          textAlign: font.alignText,
          backgroundColor: font.backgroundColor,
          lineHeight: font.lineHeight + "em"
        }}
      >
        <h1 style={{ fontWeight: font.weight }}>Hello CodeSandbox</h1>
        <h2 style={{ fontWeight: font.weight }}>
          Start editing to see some magic happen!
        </h2>
      </div>
    </div>
  );
}
