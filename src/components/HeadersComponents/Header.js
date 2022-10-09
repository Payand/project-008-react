import React from "react";
import HeaderNav from "./HeaderNav";
import HeaderDisplay from "./HeaderDisplay";
const Header = (props) => {
  return (
    <>
      <header>
        <nav id="top" className="container">
          <HeaderNav props={props.props.nav} />
        </nav>
        <HeaderDisplay props={props.props.navDisplay} />
      </header>
    </>
  );
};

export default Header;
