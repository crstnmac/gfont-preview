import { useEffect, useState } from "react";
import { getFontWeight } from "../../utils/get-font-weight";
import { Button } from "../Button";
import { RangeSlider } from "../RangeSlider";
import styles from "./StyleCard.module.css";

type variant = {
  fontFamily: string;
  fontWeight: string;
  fontStyle: string;
  fontStretch: string;
  lineHeight: string;
  fontSize: number;
  textAlign: string;
};

interface StyleProps {
  style: string;
  variant: variant;
}

export function StyleCard(props: StyleProps) {
  const { style, variant } = props;

  useEffect(() => {
    const style1 = document.createElement("style");
    style1.id = `google-font-${variant.fontFamily
      .split(" ")
      .slice(0, -2)
      .join(" ")
      .slice(1)
      .replace(/\s+/g, "-")
      .toLowerCase()}`;
    style1.innerHTML = style;

    document.head.appendChild(style1);
    return () => {
      document.head.removeChild(style1);
    };
  }, [style, variant.fontFamily]);

  const [previewText, setPreviewText] = useState("Hello World");

  const [fontOptions, setFontOptions] = useState({
    ...variant,
    lineHeight: "1.5",
    fontSize: 30,
    textAlign: "left" as "left" | "center" | "right"
  });

  const onChangePreviewText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPreviewText(e.target.value);
  };

  const onChangeFontSize = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFontOptions({ ...fontOptions, fontSize: parseInt(e.target.value, 0) });
  };

  const onChangeFontLineHeight = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFontOptions({ ...fontOptions, lineHeight: e.target.value });
  };

  return (
    <div className={styles.card} key={variant.fontFamily}>
      <div className={styles.options}>
        <div className={styles.variants}>
          {getFontWeight(variant.fontWeight)}
        </div>

        <div>
          <RangeSlider
            title="Size"
            min={"20"}
            max={"280"}
            value={fontOptions.fontSize.toString()}
            onChange={(e) => onChangeFontSize(e)}
          />
        </div>

        <div>
          <RangeSlider
            title="Leading"
            min={"1"}
            max={"3.2"}
            step={"0.1"}
            value={fontOptions.lineHeight}
            onChange={(e) => onChangeFontLineHeight(e)}
          />
        </div>

        <div className={styles.buttonGroup}>
          <Button
            onClick={() =>
              setFontOptions({ ...fontOptions, textAlign: "left" })
            }
          >
            Left
          </Button>
          <Button
            onClick={() =>
              setFontOptions({ ...fontOptions, textAlign: "center" })
            }
          >
            Center
          </Button>
          <Button
            onClick={() =>
              setFontOptions({ ...fontOptions, textAlign: "right" })
            }
          >
            Right
          </Button>
        </div>
      </div>

      <input
        type={"text"}
        className={styles.input}
        value={previewText.trim() !== "" ? previewText : "Aye.."}
        style={fontOptions}
        onChange={onChangePreviewText}
      ></input>
    </div>
  );
}
