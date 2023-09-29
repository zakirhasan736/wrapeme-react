import { FunctionComponent, useMemo, type CSSProperties } from "react";

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
      className="w-[495px] h-[43px] text-left text-sm text-white-50 font-text-xs-regular"
      style={property1MeetingTabsStyle}
    >
      <div className="absolute h-[4.65%] w-[32.73%] top-[97.67%] right-[31.31%] bottom-[-2.33%] left-[35.96%] box-border hidden border-t-[2px] border-solid border-primary-80" />
      <div className="absolute h-[4.65%] w-[23.84%] top-[97.67%] right-[5.86%] bottom-[-2.33%] left-[70.3%] box-border hidden border-t-[2px] border-solid border-primary-80" />
      <div
        className="absolute h-[46.51%] w-[13.13%] top-[0%] right-[11.31%] bottom-[53.49%] left-[75.56%] cursor-pointer"
        onClick={onGroupContainerClick}
      >
        <img
          className="absolute h-full w-[30.77%] top-[0%] right-[69.23%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src={carbondocumentSigned}
        />
        <div
          className="absolute top-[0%] left-[46.15%] leading-[20px]"
          style={eSignStyle}
        >
          eSign
        </div>
      </div>
      <div
        className="absolute top-[0px] left-[190px] w-[134px] h-5 cursor-pointer"
        onClick={onGroupContainer1Click}
      >
        <img
          className="absolute top-[0px] left-[0px] w-5 h-5 overflow-hidden"
          alt=""
          src={carbondocumentAdd}
        />
        <div
          className="absolute top-[0%] left-[22.39%] leading-[20px]"
          style={transactionTypeStyle}
        >
          Transaction Type
        </div>
      </div>
      <div className="absolute h-[4.65%] w-[20.61%] top-[97.67%] right-[68.08%] bottom-[-2.33%] left-[11.31%] box-border border-t-[2px] border-solid border-primary-80" />
      <div className="absolute h-[46.51%] w-[13.33%] top-[0%] right-[71.72%] bottom-[53.49%] left-[14.95%] text-primary-80">
        <b className="absolute top-[0%] left-[45.45%] leading-[20px]">Room</b>
        <img
          className="absolute h-full w-[30.3%] top-[0%] right-[69.7%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src={carboncheckbox}
        />
      </div>
    </div>
  );
};

export default Property1MeetingTabs;
