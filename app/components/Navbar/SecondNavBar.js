import React from "react";

const SecondNavBar = (props) => {
  const { navTitle, isSecondNavbarAppear } = props;
  const navbarClassName = `sticky top-0 w-full bg-white flex mx-auto transition-opacity duration-500 ease-in ${
    isSecondNavbarAppear ? "opacity-100 p-4 " : "opacity-0 invisible max-h-0 "
  }`;

  return (
    <nav className={navbarClassName}>
      <div className="uppercase flex w-full justify-between text-sm">
        <div className="w-64">Company logo</div>
        {navTitle}
      </div>
    </nav>
  );
};

export default SecondNavBar;
