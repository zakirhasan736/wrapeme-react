import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Property1HoverProperty2H.module.css";

type Property1HoverProperty2HType = {
  text?: string;

  /** Style props */
  property1HoverProperty2HPosition?: CSSProperties["position"];
  property1HoverProperty2HTop?: CSSProperties["top"];
  property1HoverProperty2HLeft?: CSSProperties["left"];
  property1HoverProperty2HWidth?: CSSProperties["width"];
  property1HoverProperty2HHeight?: CSSProperties["height"];
  textLineHeight?: CSSProperties["lineHeight"];
};

const Property1HoverProperty2H: FunctionComponent<
  Property1HoverProperty2HType
> = ({
  text,
  property1HoverProperty2HPosition,
  property1HoverProperty2HTop,
  property1HoverProperty2HLeft,
  property1HoverProperty2HWidth,
  property1HoverProperty2HHeight,
  textLineHeight,
}) => {
  const property1HoverProperty2HStyle: CSSProperties = useMemo(() => {
    return {
      position: property1HoverProperty2HPosition,
      top: property1HoverProperty2HTop,
      left: property1HoverProperty2HLeft,
      width: property1HoverProperty2HWidth,
      height: property1HoverProperty2HHeight,
    };
  }, [
    property1HoverProperty2HPosition,
    property1HoverProperty2HTop,
    property1HoverProperty2HLeft,
    property1HoverProperty2HWidth,
    property1HoverProperty2HHeight,
  ]);

  const textStyle: CSSProperties = useMemo(() => {
    return {
      lineHeight: textLineHeight,
    };
  }, [textLineHeight]);

  return (
    <div
      className={styles.property1hoverProperty2h}
      style={property1HoverProperty2HStyle}
    >
      <b className={styles.text} style={textStyle}>
        {text}
      </b>
    </div>
  );
};

export default Property1HoverProperty2H;
