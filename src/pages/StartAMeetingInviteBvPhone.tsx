import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import MeetingHeader from "../components/MeetingHeader";
import InviteTabs from "../components/InviteTabs";
import ButtonsTextIconButton from "../components/ButtonsTextIconButton";
import Property1HoverProperty2H from "../components/Property1HoverProperty2H";
import Search from "../components/Search";
import CallControls from "../components/CallControls";
import styles from "./StartAMeetingInviteBvPhone.module.css";

const StartAMeetingInviteBvPhone: FunctionComponent = () => {
  const navigate = useNavigate();

  const onCarbonplayIconClick = useCallback(() => {
    // Please sync "Meeting-PromoVideos" to the project
  }, []);

  const onRectangleClick = useCallback(() => {
    // Please sync "Meeting-Invite" to the project
  }, []);

  const onCarbonuserMultipleIconClick = useCallback(() => {
    // Please sync "Meeting-Participants" to the project
  }, []);

  const onCarbonuserRoleIconClick = useCallback(() => {
    // Please sync "Transfer" to the project
  }, []);

  const onGroupContainer3Click = useCallback(() => {
    // Please sync "eSign" to the project
  }, []);

  const onGroupContainer4Click = useCallback(() => {
    // Please sync "TransactionTypes" to the project
  }, []);

  const onCarbonhelpIconClick = useCallback(() => {
    // Please sync "Meeting-Help" to the project
  }, []);

  const onContactsTextClick = useCallback(() => {
    // Please sync "StartAMeeting-InviteByPhoneCall" to the project
  }, []);

  const onEmailTextClick = useCallback(() => {
    // Please sync "StartAMeeting-InviteByPhoneCall" to the project
  }, []);

  const onPhoneTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onSMSTextClick = useCallback(() => {
    // Please sync "StartAMeeting-InviteBySMS" to the project
  }, []);

  const onSearchContainerClick = useCallback(() => {
    // Please sync "StartAMeeting-InviteByPhone-Filled" to the project
  }, []);

  return (
    <div className={styles.startmeetingbyphone_wrapper}>
      <div className={styles.startameetingInvitebvphone}>
        <img className={styles.maskGroupIcon} alt="" src="/mask-group@2x.png" />
        <MeetingHeader
          maskGroup="/mask-group1@2x.png"
          carbonplay="/carbonplay.svg"
          carbonuserFollow="/carbonuserfollow.svg"
          carbonuserMultiple="/carbonusermultiple.svg"
          carbonuserRole="/carbonuserrole.svg"
          carbondocumentSigned="/carbondocumentsigned.svg"
          carbondocumentAdd="/carbondocumentadd.svg"
          carboncheckbox="/carboncheckbox.svg"
          carbonhelp="/carbonhelp.svg"
          meetingHeaderPosition="absolute"
          meetingHeaderTop="8px"
          meetingHeaderLeft="0px"
          onCarbonplayIconClick={onCarbonplayIconClick}
          onRectangleClick={onRectangleClick}
          onCarbonuserMultipleIconClick={onCarbonuserMultipleIconClick}
          onCarbonuserRoleIconClick={onCarbonuserRoleIconClick}
          onGroupContainer3Click={onGroupContainer3Click}
          onGroupContainer4Click={onGroupContainer4Click}
          onCarbonhelpIconClick={onCarbonhelpIconClick}
        />
        <div className={styles.startameetingInvitebvphoneChild} />
        <InviteTabs
          showRectangleDiv={false}
          rectangleDiv
          inviteTabsPosition="absolute"
          inviteTabsTop="285px"
          inviteTabsLeft="770px"
          rectangleDivHeight="70.97%"
          rectangleDivWidth="25.81%"
          rectangleDivTop="30.65%"
          rectangleDivRight="21.54%"
          rectangleDivBottom="-1.61%"
          rectangleDivLeft="52.64%"
          contactsCursor="pointer"
          contactsFontWeight="unset"
          phoneFontWeight="bold"
          onContactsTextClick={onContactsTextClick}
          onEmailTextClick={onEmailTextClick}
          onPhoneTextClick={onPhoneTextClick}
          onSMSTextClick={onSMSTextClick}
        />
        <ButtonsTextIconButton
          carboncopy="/carboncopy.svg"
          buttonsTextIconButtonPosition="absolute"
          buttonsTextIconButtonTop="591px"
          buttonsTextIconButtonLeft="1167px"
          textColor="#fff"
        />
        <div className={styles.meetingLinkHttpsmeeting}>
          Meeting Link: https://meeting.wrapme.com/23HQK3
        </div>
        <b className={styles.inviteOthersTo}>Invite others to the meeting</b>
        <div className={styles.startameetingInvitebvphoneItem} />
        <Property1HoverProperty2H
          text="Invite"
          property1HoverProperty2HPosition="absolute"
          property1HoverProperty2HTop="403px"
          property1HoverProperty2HLeft="1182px"
          property1HoverProperty2HWidth="80px"
          property1HoverProperty2HHeight="42px"
          textLineHeight="16px"
        />
        <Search
          searchNamePhoneNo="e.g. +15551231234 or name"
          carbonsearch="/carbonsearch.svg"
          searchBorder="1px solid var(--primary-10)"
          searchWidth="402px"
          searchPosition="absolute"
          searchTop="403px"
          searchLeft="770px"
          searchCursor="pointer"
          groupDivWidth="183px"
          onSearchContainerClick={onSearchContainerClick}
        />
        <div className={styles.theyWillReceive}>
          They will receive a call, adding them to the room
        </div>
        <CallControls
          callControlsCallControls="/callcontrols.svg"
          callControlsIconPosition="absolute"
          callControlsIconTop="820px"
          callControlsIconLeft="0px"
        />
        <img
          className={styles.startameetingInvitebvphoneInner}
          alt=""
          src="/group-356.svg"
        />
      </div>
    </div>
  );
};

export default StartAMeetingInviteBvPhone;
