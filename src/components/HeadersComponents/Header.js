import React from "react";
import HeaderNav from "./HeaderNav";
import HeaderDisplay from "./HeaderDisplay";
const Header = ({ props }) => {
  return (
    <>
      <header>
        <nav id="top" className="container">
          <HeaderNav {...props} />
        </nav>
        <HeaderDisplay {...props} />
      </header>
    </>
  );
};

export default Header;
