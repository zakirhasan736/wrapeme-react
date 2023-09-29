import { FunctionComponent, useMemo, type CSSProperties } from "react";

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
      className="rounded bg-white-100 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] box-border w-[290px] h-[42px] overflow-hidden text-left text-sm text-neutral-30 font-text-xs-regular border-[1px] border-solid border-neutral-5"
      style={searchStyle}
      onClick={onSearchContainerClick}
    >
      <div
        className="absolute top-[10px] left-[16px] w-[171px] h-5"
        style={groupDivStyle}
      >
        <div className="absolute top-[0px] left-[26px] leading-[20px]">
          {searchNamePhoneNo}
        </div>
        <img
          className="absolute top-[3px] left-[0px] w-4 h-4 overflow-hidden"
          alt=""
          src={carbonsearch}
        />
      </div>
    </div>
  );
};

export default Search;
