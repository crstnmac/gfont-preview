import { useState } from "react";
import FontsLoader from "./components/FontsLoader";
import { HexColorPicker } from "react-colorful";
import Dropdown from "./components/Dropdown";
import "./styles.css";
import fonts from "./googleFonts.json";

export default function App() {
  const [fontFamily, setFontFamily] = useState("Inter");
  const [font, setFont] = useState({
    weight: 100,
    size: 25,
    letterSpacing: 1,
    color: "#aabbcc",
    alignText: "left"
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
      <label>Weight</label>
      <input
        type="range"
        min={100}
        default={font.weight}
        max={800}
        onChange={onChangeSliderWeight}
        value={font.weight}
      />
      <label>Size</label>
      <input
        type="range"
        min={10}
        default={font.size}
        max={100}
        onChange={onChangeSliderSize}
        value={font.size}
      />
      <label>Letter Spacing</label>
      <input
        type="range"
        min={1}
        default={font.letterSpacing}
        max={15}
        onChange={onChangeSliderSpace}
        value={font.letterSpacing}
      />

      <HexColorPicker color={font.color} onChange={onChangeColor} />

      <Dropdown value={fontFamily} options={fonts} onChange={onFontSelect} />

      <button onClick={() => onClickAlign("left")}>Left</button>

      <button onClick={() => onClickAlign("center")}>Center</button>

      <button onClick={() => onClickAlign("right")}>Right</button>
      <div
        style={{
          fontFamily: fontFamily,
          fontSize: font.size + "px",
          letterSpacing: font.letterSpacing + "px",
          color: font.color,
          border: "2px solid black",
          textAlign: font.alignText
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
