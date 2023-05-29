import React from "react";

const MainNavBar = ({navTitle}) => {
  return (
    <nav className={"w-full bg-white shadow-lg p-8 "}>
      <div className="flex max-w-6xl mx-auto">
        <div className="w-64">Company logo</div>
        <div className="uppercase flex w-full justify-between text-sm">
          {navTitle}
        </div>
      </div>
    </nav>
  );
};

export default MainNavBar;
