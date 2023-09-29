import { FunctionComponent, useMemo, type CSSProperties } from "react";

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
      className="rounded h-10 flex flex-row items-center justify-center pt-2.5 px-6 pb-3 box-border gap-[10px] text-center text-sm text-neutral-100 font-text-xs-regular"
      style={buttonsTextIconButtonStyle}
    >
      <img
        className="relative w-4 h-4 overflow-hidden shrink-0"
        alt=""
        src={carboncopy}
      />
      <b className="relative leading-[20px]" style={text1Style}>
        Copy Link
      </b>
    </div>
  );
};

export default ButtonsTextIconButton;
