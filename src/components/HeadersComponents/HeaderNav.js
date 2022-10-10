import React from "react";
import HeaderIcon from "./HeaderIcon";
import HeaderSearch from "./HeaderSearch";

const HeaderNav = ({ nav }) => {
  return (
    <div className="flex-nav-container">
      <div className="logo">TodayWatch</div>
      <ul>
        {nav.map((el) => {
          return (
            <li id={el} key={el}>
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
