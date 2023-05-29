import React from "react";

const SecondNavBar = (props) => {
  const { navTitle, isSecondNavbarAppear } = props;
  const navbarClassName = `fixed top-0 w-full bg-gray-800 text-white py-2 px-4 transition-transform duration-300 ${
    isSecondNavbarAppear ? 'transform translate-y-0' : '-translate-y-full'
  }`;

  return (
    <nav className={navbarClassName}>
      <div
        className={`uppercase flex w-full justify-between text-sm `}
      >
        <div className="w-64">Company logo</div>
        {navTitle}
      </div>
    </nav>
  );
};

export default SecondNavBar;
