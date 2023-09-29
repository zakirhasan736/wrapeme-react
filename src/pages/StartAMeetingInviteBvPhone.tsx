import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import MeetingHeader from "../components/MeetingHeader";
import InviteTabs from "../components/InviteTabs";
import ButtonsTextIconButton from "../components/ButtonsTextIconButton";
import Property1HoverProperty2H from "../components/Property1HoverProperty2H";
import Search from "../components/Search";
import CallControls from "../components/CallControls";

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
    <div className="wrap-container w-full bg-neutral-100">
      <div className="relative bg-neutral-100 max-w-[1440px] w-full mx-auto max-h-[900px] h-[100vh] overflow-hidden text-left text-sm text-white-70 font-text-xs-regular">
        <img
          className="absolute top-[209px] left-[138px] w-[572px] h-[422px] object-cover"
          alt=""
          src="/mask-group@2x.png"
        />
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
        <div className="absolute top-[209px] left-[730px] rounded bg-secondary-10 box-border w-[572px] h-[422px] border-[1px] border-solid border-primary-100" />
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
        <div className="absolute top-[598px] left-[748px] leading-[20px]">
          Meeting Link: https://meeting.wrapme.com/23HQK3
        </div>
        <b className="absolute top-[239px] left-[869px] text-5xl leading-[32px] text-white-100">
          Invite others to the meeting
        </b>
        <div className="absolute top-[590.5px] left-[729.5px] box-border w-[573px] h-px border-t-[1px] border-solid border-primary-100" />
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
          searchBorder="1px solid rgba(41, 101, 138, 0.1)"
          searchWidth="402px"
          searchPosition="absolute"
          searchTop="403px"
          searchLeft="770px"
          searchCursor="pointer"
          groupDivWidth="183px"
          onSearchContainerClick={onSearchContainerClick}
        />
        <div className="absolute top-[379px] left-[770px] text-3xs leading-[14px] text-white-50">
          They will receive a call, adding them to the room
        </div>
        <CallControls
          callControlsCallControls="/callcontrols.svg"
          callControlsIconPosition="absolute"
          callControlsIconTop="820px"
          callControlsIconLeft="0px"
        />
        <img
          className="absolute top-[566px] left-[354px] w-[140px] h-10"
          alt=""
          src="/group-356.svg"
        />
      </div>
    </div>
  );
};

export default StartAMeetingInviteBvPhone;
