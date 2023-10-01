import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./InviteTabs.module.css";

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
    <div className={styles.invitetabs} style={inviteTabsStyle}>
      <div className={styles.invitetabsChild} />
      {showRectangleDiv && <div className={styles.invitetabsItem} />}
      <div className={styles.invitetabsInner} />
      {!rectangleDiv && (
        <div className={styles.rectangleDiv} style={rectangleDivStyle} />
      )}
      <div className={styles.invitetabsChild1} />
      <b
        className={styles.contacts}
        style={contactsStyle}
        onClick={onContactsTextClick}
      >
        Contacts
      </b>
      <div className={styles.email} onClick={onEmailTextClick}>
        Email
      </div>
      <div
        className={styles.phone}
        onClick={onPhoneTextClick}
        style={phoneStyle}
      >
        Phone
      </div>
      <div className={styles.sms} onClick={onSMSTextClick}>
        SMS
      </div>
      <div className={styles.inviteType}>Invite Type</div>
      <div className={styles.lineDiv} />
      <div className={styles.invitetabsChild2} />
      <div className={styles.invitetabsChild3} />
    </div>
  );
};

export default InviteTabs;
