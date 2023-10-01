import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Property1MeetingTabs.module.css";

type Property1MeetingTabsType = {
  carbondocumentSigned?: string;
  carbondocumentAdd?: string;
  carboncheckbox?: string;

  /** Style props */
  property1MeetingTabsWidth?: CSSProperties["width"];
  property1MeetingTabsHeight?: CSSProperties["height"];
  property1MeetingTabsPosition?: CSSProperties["position"];
  property1MeetingTabsTop?: CSSProperties["top"];
  property1MeetingTabsRight?: CSSProperties["right"];
  property1MeetingTabsBottom?: CSSProperties["bottom"];
  property1MeetingTabsLeft?: CSSProperties["left"];
  eSignColor?: CSSProperties["color"];
  transactionTypeColor?: CSSProperties["color"];

  /** Action props */
  onGroupContainerClick?: () => void;
  onGroupContainer1Click?: () => void;
};

const Property1MeetingTabs: FunctionComponent<Property1MeetingTabsType> = ({
  carbondocumentSigned,
  carbondocumentAdd,
  carboncheckbox,
  property1MeetingTabsWidth,
  property1MeetingTabsHeight,
  property1MeetingTabsPosition,
  property1MeetingTabsTop,
  property1MeetingTabsRight,
  property1MeetingTabsBottom,
  property1MeetingTabsLeft,
  eSignColor,
  transactionTypeColor,
  onGroupContainerClick,
  onGroupContainer1Click,
}) => {
  const property1MeetingTabsStyle: CSSProperties = useMemo(() => {
    return {
      width: property1MeetingTabsWidth,
      height: property1MeetingTabsHeight,
      position: property1MeetingTabsPosition,
      top: property1MeetingTabsTop,
      right: property1MeetingTabsRight,
      bottom: property1MeetingTabsBottom,
      left: property1MeetingTabsLeft,
    };
  }, [
    property1MeetingTabsWidth,
    property1MeetingTabsHeight,
    property1MeetingTabsPosition,
    property1MeetingTabsTop,
    property1MeetingTabsRight,
    property1MeetingTabsBottom,
    property1MeetingTabsLeft,
  ]);

  const eSignStyle: CSSProperties = useMemo(() => {
    return {
      color: eSignColor,
    };
  }, [eSignColor]);

  const transactionTypeStyle: CSSProperties = useMemo(() => {
    return {
      color: transactionTypeColor,
    };
  }, [transactionTypeColor]);

  return (
    <div
      className={styles.property1meetingtabs}
      style={property1MeetingTabsStyle}
    >
      <div className={styles.property1meetingtabsChild} />
      <div className={styles.property1meetingtabsItem} />
      <div
        className={styles.carbondocumentSignedParent}
        onClick={onGroupContainerClick}
      >
        <img
          className={styles.carbondocumentSignedIcon}
          alt=""
          src={carbondocumentSigned}
        />
        <div className={styles.esign} style={eSignStyle}>
          eSign
        </div>
      </div>
      <div
        className={styles.carbondocumentAddParent}
        onClick={onGroupContainer1Click}
      >
        <img
          className={styles.carbondocumentAddIcon}
          alt=""
          src={carbondocumentAdd}
        />
        <div className={styles.transactionType} style={transactionTypeStyle}>
          Transaction Type
        </div>
      </div>
      <div className={styles.property1meetingtabsInner} />
      <div className={styles.roomParent}>
        <b className={styles.room}>Room</b>
        <img
          className={styles.carboncheckboxIcon}
          alt=""
          src={carboncheckbox}
        />
      </div>
    </div>
  );
};

export default Property1MeetingTabs;
