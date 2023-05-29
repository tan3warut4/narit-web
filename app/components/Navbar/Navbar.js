"use client";
import MainNavBar from "./MainNavBar";
import { useEffect, useState } from "react";
import SecondNavBar from "./SecondNavBar";

const navLink = [
  "Home",
  "About us",
  "Our service",
  "Team",
  "Transaction",
  "publication",
  "careers",
  "contact us",
];

const Navbar = (props) => {
  const [isSecondNavbarAppear, setIsSecondNavbarAppear] = useState(false);
  const { sectionTwoRef } = props;
  useEffect(() => {
    const handleScroll = () => {
      const section2Offset =
         sectionTwoRef.current.getBoundingClientRect().height;
      const currentScrollPos = window.scrollY;
      console.log(currentScrollPos, "offset is", section2Offset);
      if (currentScrollPos >= section2Offset) {
        setIsSecondNavbarAppear(true);
      } else {
        setIsSecondNavbarAppear(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionTwoRef]);

  const navTitle = navLink.map((item, index) => (
    <div key={index}>
      <a className="cursor-pointer">{item}</a>
    </div>
  ));

  return (
    <>
      <MainNavBar navTitle={navTitle} />

      <SecondNavBar
        navTitle={navTitle}
        isSecondNavbarAppear={isSecondNavbarAppear}
      />
    </>
  );
};

export default Navbar;
