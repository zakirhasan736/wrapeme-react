import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./MeetingHeader.module.css";

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
    <div className={styles.meetingheader} style={meetingHeaderStyle}>
      <div className={styles.quickCatchupParent}>
        <div className={styles.quickCatchup}>Quick Catchup</div>
        <div className={styles.idWm1223Hb}>ID: WM-1223-HB</div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.div}>0:08</div>
      </div>
      <img className={styles.maskGroupIcon} alt="" src={maskGroup} />
      <div className={styles.meetingheaderChild} />
      <div className={styles.carbonplayParent}>
        <img
          className={styles.carbonplayIcon}
          alt=""
          src={carbonplay}
          onClick={onCarbonplayIconClick}
        />
        <div className={styles.groupChild} onClick={onRectangleClick} />
        <div className={styles.inviteParent}>
          <b className={styles.invite}>Invite</b>
          <img
            className={styles.carbonuserFollowIcon}
            alt=""
            src={carbonuserFollow}
          />
        </div>
        <img
          className={styles.carbonuserMultipleIcon}
          alt=""
          src={carbonuserMultiple}
          onClick={onCarbonuserMultipleIconClick}
        />
        <img
          className={styles.carbonuserRoleIcon}
          alt=""
          src={carbonuserRole}
          onClick={onCarbonuserRoleIconClick}
        />
      </div>
      <div className={styles.meetingtabs}>
        <div className={styles.meetingtabsChild} />
        <div className={styles.meetingtabsItem} />
        <div
          className={styles.carbondocumentSignedParent}
          onClick={onGroupContainer3Click}
        >
          <img
            className={styles.carbondocumentSignedIcon}
            alt=""
            src={carbondocumentSigned}
          />
          <div className={styles.esign}>eSign</div>
        </div>
        <div
          className={styles.carbondocumentAddParent}
          onClick={onGroupContainer4Click}
        >
          <img
            className={styles.carbondocumentAddIcon}
            alt=""
            src={carbondocumentAdd}
          />
          <div className={styles.transactionType}>Transaction Type</div>
        </div>
        <div className={styles.meetingtabsInner} />
        <div className={styles.roomParent}>
          <b className={styles.room}>Room</b>
          <img
            className={styles.carboncheckboxIcon}
            alt=""
            src={carboncheckbox}
          />
        </div>
      </div>
      <img
        className={styles.carbonhelpIcon}
        alt=""
        src={carbonhelp}
        onClick={onCarbonhelpIconClick}
      />
    </div>
  );
};

export default MeetingHeader;
