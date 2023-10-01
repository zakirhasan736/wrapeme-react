import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./CallControls.module.css";

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
      className={styles.callcontrolsIcon}
      alt=""
      src={callControlsCallControls}
      style={callControlsIconStyle}
    />
  );
};

export default CallControls;
