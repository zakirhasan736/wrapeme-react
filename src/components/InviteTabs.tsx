import { FunctionComponent, useMemo, type CSSProperties } from "react";

type InviteTabsType = {
  showRectangleDiv?: boolean;
  rectangleDiv?: boolean;

  /** Style props */
  inviteTabsPosition?: CSSProperties["position"];
  inviteTabsTop?: CSSProperties["top"];
  inviteTabsLeft?: CSSProperties["left"];
  rectangleDivHeight?: CSSProperties["height"];
  rectangleDivWidth?: CSSProperties["width"];
  rectangleDivTop?: CSSProperties["top"];
  rectangleDivRight?: CSSProperties["right"];
  rectangleDivBottom?: CSSProperties["bottom"];
  rectangleDivLeft?: CSSProperties["left"];
  contactsCursor?: CSSProperties["cursor"];
  contactsFontWeight?: CSSProperties["fontWeight"];
  phoneFontWeight?: CSSProperties["fontWeight"];

  /** Action props */
  onContactsTextClick?: () => void;
  onEmailTextClick?: () => void;
  onPhoneTextClick?: () => void;
  onSMSTextClick?: () => void;
};

const InviteTabs: FunctionComponent<InviteTabsType> = ({
  showRectangleDiv,
  rectangleDiv,
  inviteTabsPosition,
  inviteTabsTop,
  inviteTabsLeft,
  rectangleDivHeight,
  rectangleDivWidth,
  rectangleDivTop,
  rectangleDivRight,
  rectangleDivBottom,
  rectangleDivLeft,
  contactsCursor,
  contactsFontWeight,
  phoneFontWeight,
  onContactsTextClick,
  onEmailTextClick,
  onPhoneTextClick,
  onSMSTextClick,
}) => {
  const inviteTabsStyle: CSSProperties = useMemo(() => {
    return {
      position: inviteTabsPosition,
      top: inviteTabsTop,
      left: inviteTabsLeft,
    };
  }, [inviteTabsPosition, inviteTabsTop, inviteTabsLeft]);

  const rectangleDivStyle: CSSProperties = useMemo(() => {
    return {
      height: rectangleDivHeight,
      width: rectangleDivWidth,
      top: rectangleDivTop,
      right: rectangleDivRight,
      bottom: rectangleDivBottom,
      left: rectangleDivLeft,
    };
  }, [
    rectangleDivHeight,
    rectangleDivWidth,
    rectangleDivTop,
    rectangleDivRight,
    rectangleDivBottom,
    rectangleDivLeft,
  ]);

  const contactsStyle: CSSProperties = useMemo(() => {
    return {
      cursor: contactsCursor,
      fontWeight: contactsFontWeight,
    };
  }, [contactsCursor, contactsFontWeight]);

  const phoneStyle: CSSProperties = useMemo(() => {
    return {
      fontWeight: phoneFontWeight,
    };
  }, [phoneFontWeight]);

  return (
    <div
      className="w-[492px] h-[62px] text-left text-sm text-primary-100 font-text-xs-regular"
      style={inviteTabsStyle}
    >
      <div className="absolute h-[67.74%] w-full top-[32.26%] right-[0%] bottom-[0%] left-[0%] rounded bg-white-100 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)]" />
      {showRectangleDiv && (
        <div className="absolute h-[70.97%] w-[26.83%] top-[30.65%] right-[73.37%] bottom-[-1.61%] left-[-0.2%] rounded-tl rounded-tr-none rounded-br-none rounded-bl bg-primary-10 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] box-border border-[1px] border-solid border-primary-100" />
      )}
      <div className="absolute h-[67.74%] w-[26.42%] top-[32.26%] right-[47.15%] bottom-[0%] left-[26.42%] bg-primary-10 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] box-border hidden border-[1px] border-solid border-primary-100" />
      {!rectangleDiv && (
        <div
          className="absolute h-[67.74%] w-[25.41%] top-[32.26%] right-[21.75%] bottom-[0%] left-[52.85%] bg-primary-10 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] box-border hidden border-[1px] border-solid border-primary-100"
          style={rectangleDivStyle}
        />
      )}
      <div className="absolute h-[67.74%] w-[21.54%] top-[32.26%] right-[0.2%] bottom-[0%] left-[78.25%] rounded-tl-none rounded-tr rounded-br rounded-bl-none bg-primary-10 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] box-border hidden border-[1px] border-solid border-primary-100" />
      <b
        className="absolute top-[50%] left-[7.52%] leading-[20px]"
        style={contactsStyle}
        onClick={onContactsTextClick}
      >
        Contacts
      </b>
      <div
        className="absolute top-[50%] left-[36.18%] leading-[20px] cursor-pointer"
        onClick={onEmailTextClick}
      >
        Email
      </div>
      <div
        className="absolute top-[50%] left-[61.59%] leading-[20px] cursor-pointer"
        onClick={onPhoneTextClick}
        style={phoneStyle}
      >
        Phone
      </div>
      <div
        className="absolute top-[50%] left-[86.38%] leading-[20px] cursor-pointer"
        onClick={onSMSTextClick}
      >
        SMS
      </div>
      <div className="absolute top-[0%] left-[0%] text-xs leading-[16px] text-white-70">
        Invite Type
      </div>
      <div className="absolute h-[69.35%] w-[0.2%] top-[31.45%] right-[47.05%] bottom-[-0.81%] left-[52.74%] box-border border-r-[1px] border-solid border-neutral-5" />
      <div className="absolute h-[69.35%] w-[0.2%] top-[31.45%] right-[22.05%] bottom-[-0.81%] left-[77.74%] box-border border-r-[1px] border-solid border-neutral-5" />
      <div className="absolute h-[69.35%] w-[0.2%] top-[31.45%] right-[73.48%] bottom-[-0.81%] left-[26.32%] box-border hidden border-r-[1px] border-solid border-neutral-5" />
    </div>
  );
};

export default InviteTabs;
