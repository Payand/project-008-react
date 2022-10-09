import React from "react";
import HeaderIcon from "./HeaderIcon";
import HeaderSearch from "./HeaderSearch";

const HeaderNav = (props) => {
  let headersNav = props.props;

  // console.log(headersNav);
  return (
    <div className="flex-nav-container">
      <div className="logo">TodayWatch</div>
      <ul>
        {headersNav.map((el) => {
          return (
            <li id={"#" + el} key={el}>
              {el}
            </li>
          );
        })}
        <HeaderSearch />
        <HeaderIcon />
      </ul>
    </div>
  );
};
export default HeaderNav;
