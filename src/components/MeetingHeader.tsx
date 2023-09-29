import { FunctionComponent, useMemo, type CSSProperties } from "react";
import Property1MeetingTabs from "./Property1MeetingTabs";

type MeetingHeaderType = {
  maskGroup?: string;
  carbonplay?: string;
  carbonuserFollow?: string;
  carbonuserMultiple?: string;
  carbonuserRole?: string;
  carbondocumentSigned?: string;
  carbondocumentAdd?: string;
  carboncheckbox?: string;
  carbonhelp?: string;

  /** Style props */
  meetingHeaderPosition?: CSSProperties["position"];
  meetingHeaderTop?: CSSProperties["top"];
  meetingHeaderLeft?: CSSProperties["left"];

  /** Action props */
  onCarbonplayIconClick?: () => void;
  onRectangleClick?: () => void;
  onCarbonuserMultipleIconClick?: () => void;
  onCarbonuserRoleIconClick?: () => void;
  onGroupContainer3Click?: () => void;
  onGroupContainer4Click?: () => void;
  onCarbonhelpIconClick?: () => void;
};

const MeetingHeader: FunctionComponent<MeetingHeaderType> = ({
  maskGroup,
  carbonplay,
  carbonuserFollow,
  carbonuserMultiple,
  carbonuserRole,
  carbondocumentSigned,
  carbondocumentAdd,
  carboncheckbox,
  carbonhelp,
  meetingHeaderPosition,
  meetingHeaderTop,
  meetingHeaderLeft,
  onCarbonplayIconClick,
  onRectangleClick,
  onCarbonuserMultipleIconClick,
  onCarbonuserRoleIconClick,
  onGroupContainer3Click,
  onGroupContainer4Click,
  onCarbonhelpIconClick,
}) => {
  const meetingHeaderStyle: CSSProperties = useMemo(() => {
    return {
      position: meetingHeaderPosition,
      top: meetingHeaderTop,
      left: meetingHeaderLeft,
    };
  }, [meetingHeaderPosition, meetingHeaderTop, meetingHeaderLeft]);

  return (
    <div
      className="w-[1440px] h-14 text-left text-sm text-white-100 font-graphik"
      style={meetingHeaderStyle}
    >
      <div className="absolute h-[60.71%] w-[7.85%] top-[10.71%] right-[85.28%] bottom-[28.57%] left-[6.88%] text-base">
        <div className="absolute top-[0%] left-[0%] leading-[100%]">
          Quick Catchup
        </div>
        <div className="absolute top-[58.82%] left-[0%] text-sm leading-[100%] text-white-50">
          ID: WM-1223-HB
        </div>
      </div>
      <div className="absolute h-[35.71%] w-[3.06%] top-[23.21%] right-[81.53%] bottom-[41.07%] left-[15.42%] rounded-sm bg-gray flex flex-col items-center justify-between pt-0.5 px-1.5 pb-0 box-border">
        <div className="relative leading-[12px] uppercase">0:08</div>
      </div>
      <img
        className="absolute h-[51.79%] w-[4.83%] top-[16.07%] right-[93.78%] bottom-[32.14%] left-[1.39%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={maskGroup}
      />
      <div className="absolute h-[1.79%] w-[100.07%] top-[99.11%] right-[-0.03%] bottom-[-0.89%] left-[-0.03%] box-border border-t-[1px] border-solid border-white-10" />
      <div className="absolute h-[82.14%] w-[22.22%] top-[0%] right-[1.25%] bottom-[17.86%] left-[76.53%] text-primary-80 font-text-xs-regular">
        <img
          className="absolute h-[43.48%] w-[6.25%] top-[28.26%] right-[62.5%] bottom-[28.26%] left-[31.25%] max-w-full overflow-hidden max-h-full cursor-pointer"
          alt=""
          src={carbonplay}
          onClick={onCarbonplayIconClick}
        />
        <div
          className="absolute h-full w-[37.5%] top-[0%] right-[0%] bottom-[0%] left-[62.5%] rounded-sm box-border cursor-pointer border-[1px] border-solid border-primary-80"
          onClick={onRectangleClick}
        />
        <div className="absolute h-[43.48%] w-[18.75%] top-[28.26%] right-[10%] bottom-[28.26%] left-[71.25%]">
          <b className="absolute top-[0%] left-[41.67%] leading-[20px]">
            Invite
          </b>
          <img
            className="absolute h-4/5 w-[26.67%] top-[10%] right-[73.33%] bottom-[10%] left-[0%] max-w-full overflow-hidden max-h-full"
            alt=""
            src={carbonuserFollow}
          />
        </div>
        <img
          className="absolute h-[43.48%] w-[6.25%] top-[28.26%] right-[78.13%] bottom-[28.26%] left-[15.63%] max-w-full overflow-hidden max-h-full cursor-pointer"
          alt=""
          src={carbonuserMultiple}
          onClick={onCarbonuserMultipleIconClick}
        />
        <img
          className="absolute h-[43.48%] w-[6.25%] top-[28.26%] right-[93.75%] bottom-[28.26%] left-[0%] max-w-full overflow-hidden max-h-full cursor-pointer"
          alt=""
          src={carbonuserRole}
          onClick={onCarbonuserRoleIconClick}
        />
      </div>
      <Property1MeetingTabs
        carbondocumentSigned="/carbondocumentsigned.svg"
        carbondocumentAdd="/carbondocumentadd.svg"
        carboncheckbox="/carboncheckbox.svg"
        property1MeetingTabsWidth="34.38%"
        property1MeetingTabsHeight="76.79%"
        property1MeetingTabsPosition="absolute"
        property1MeetingTabsTop="23.21%"
        property1MeetingTabsRight="32.78%"
        property1MeetingTabsBottom="0%"
        property1MeetingTabsLeft="32.85%"
        eSignColor="#fff"
        transactionTypeColor="#fff"
        onGroupContainerClick={onGroupContainer3Click}
        onGroupContainer1Click={onGroupContainer4Click}
      />
      <img
        className="absolute h-[35.71%] w-[1.39%] top-[23.21%] right-[11.67%] bottom-[41.07%] left-[86.94%] max-w-full overflow-hidden max-h-full cursor-pointer"
        alt=""
        src={carbonhelp}
        onClick={onCarbonhelpIconClick}
      />
    </div>
  );
};

export default MeetingHeader;
