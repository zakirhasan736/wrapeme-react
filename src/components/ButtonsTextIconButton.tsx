import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ButtonsTextIconButton.module.css";

type ButtonsTextIconButtonType = {
  carboncopy?: string;

  /** Style props */
  buttonsTextIconButtonPosition?: CSSProperties["position"];
  buttonsTextIconButtonTop?: CSSProperties["top"];
  buttonsTextIconButtonLeft?: CSSProperties["left"];
  textColor?: CSSProperties["color"];
};

const ButtonsTextIconButton: FunctionComponent<ButtonsTextIconButtonType> = ({
  carboncopy,
  buttonsTextIconButtonPosition,
  buttonsTextIconButtonTop,
  buttonsTextIconButtonLeft,
  textColor,
}) => {
  const buttonsTextIconButtonStyle: CSSProperties = useMemo(() => {
    return {
      position: buttonsTextIconButtonPosition,
      top: buttonsTextIconButtonTop,
      left: buttonsTextIconButtonLeft,
    };
  }, [
    buttonsTextIconButtonPosition,
    buttonsTextIconButtonTop,
    buttonsTextIconButtonLeft,
  ]);

  const text1Style: CSSProperties = useMemo(() => {
    return {
      color: textColor,
    };
  }, [textColor]);

  return (
    <div
      className={styles.buttonstexticonbutton}
      style={buttonsTextIconButtonStyle}
    >
      <img className={styles.carboncopyIcon} alt="" src={carboncopy} />
      <b className={styles.text} style={text1Style}>
        Copy Link
      </b>
    </div>
  );
};

export default ButtonsTextIconButton;
