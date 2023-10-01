import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Search.module.css";

type SearchType = {
  searchNamePhoneNo?: string;
  carbonsearch?: string;

  /** Style props */
  searchBorder?: CSSProperties["border"];
  searchWidth?: CSSProperties["width"];
  searchPosition?: CSSProperties["position"];
  searchTop?: CSSProperties["top"];
  searchLeft?: CSSProperties["left"];
  searchCursor?: CSSProperties["cursor"];
  groupDivWidth?: CSSProperties["width"];

  /** Action props */
  onSearchContainerClick?: () => void;
};

const Search: FunctionComponent<SearchType> = ({
  searchNamePhoneNo,
  carbonsearch,
  searchBorder,
  searchWidth,
  searchPosition,
  searchTop,
  searchLeft,
  searchCursor,
  groupDivWidth,
  onSearchContainerClick,
}) => {
  const searchStyle: CSSProperties = useMemo(() => {
    return {
      border: searchBorder,
      width: searchWidth,
      position: searchPosition,
      top: searchTop,
      left: searchLeft,
      cursor: searchCursor,
    };
  }, [
    searchBorder,
    searchWidth,
    searchPosition,
    searchTop,
    searchLeft,
    searchCursor,
  ]);

  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      width: groupDivWidth,
    };
  }, [groupDivWidth]);

  return (
    <div
      className={styles.search}
      style={searchStyle}
      onClick={onSearchContainerClick}
    >
      <div className={styles.searchNamePhoneNoParent} style={groupDivStyle}>
        <div className={styles.searchNamePhone}>{searchNamePhoneNo}</div>
        <img className={styles.carbonsearchIcon} alt="" src={carbonsearch} />
      </div>
    </div>
  );
};

export default Search;
