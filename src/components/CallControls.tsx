import { FunctionComponent, useMemo, type CSSProperties } from "react";

type CallControlsType = {
  callControlsCallControls?: string;

  /** Style props */
  callControlsIconPosition?: CSSProperties["position"];
  callControlsIconTop?: CSSProperties["top"];
  callControlsIconLeft?: CSSProperties["left"];
};

const CallControls: FunctionComponent<CallControlsType> = ({
  callControlsCallControls,
  callControlsIconPosition,
  callControlsIconTop,
  callControlsIconLeft,
}) => {
  const callControlsIconStyle: CSSProperties = useMemo(() => {
    return {
      position: callControlsIconPosition,
      top: callControlsIconTop,
      left: callControlsIconLeft,
    };
  }, [callControlsIconPosition, callControlsIconTop, callControlsIconLeft]);

  return (
    <img
      className="w-[1440px] h-20"
      alt=""
      src={callControlsCallControls}
      style={callControlsIconStyle}
    />
  );
};

export default CallControls;
