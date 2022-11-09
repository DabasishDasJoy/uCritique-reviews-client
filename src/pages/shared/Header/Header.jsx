import {
  Button,
  IconButton,
  MobileNav,
  Navbar,
  Typography,
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { BiLogIn } from "react-icons/bi";
import { BsClock, BsTelephone } from "react-icons/bs";
import { GoLocation } from "react-icons/go";

import { NavLink } from "react-router-dom";
import logo from "../../../assets/dentalcare-logo-color.png";

const Header = () => {
  const [openNav, setOpenNav] = useState(false);

  /* Navbar change on scroll controller */
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        className="p-1 transition-all delay-75 uppercase"
      >
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive
              ? "text-primary border-b-2 border-b-primary"
              : "hover:text-primary"
          }
        >
          Home
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 transition-all delay-75 uppercase"
      >
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive
              ? "text-primary border-b-2 border-b-primary"
              : "hover:text-primary"
          }
        >
          Services
        </NavLink>
      </Typography>
    </ul>
  );

  return (
    <Navbar
      fullWidth
      blurred={scroll}
      shadow={scroll}
      className={`transition-all fixed delay-100 z-50  ${
        scroll ? "bg-white" : "lg:bg-transparent"
      } container mx-auto lg:px-0 lg:py-0 py-1 px-1`}
    >
      {/* Top part for desktop & tablet */}
      <div className="lg:flex hidden items-center justify-between border-b-2 border-b-gray-300 px-20 py-3">
        <Typography
          textGradient
          as="NavLink"
          to="/"
          variant="h5"
          className="mr-4 cursor-pointer font-bold uppercase flex items-center gap-2 text-textPrimary"
        >
          <img src={logo} alt="logoImage" className="w-9" />
          <span> Jahed's Dental Care</span>
        </Typography>
        {/* basic information */}
        <div className="flex gap-10">
          <div className="flex gap-2 items-center">
            <BsClock className="text-primary w-8 h-8" />
            <div className="text-textPrimary font-normal text-xs leading-5">
              <p>Monday - Friday</p>
              <p>08:00 AM - 08:00PM</p>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <BsTelephone className="text-primary w-8 h-8" />
            <div className="text-textPrimary font-normal text-xs leading-5">
              <p>+88018 888 88888</p>
              <p>jahedscare@office.com</p>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <GoLocation className="text-primary w-8 h-8" />
            <div className="text-textPrimary font-normal text-xs leading-5">
              <p>Bandarban</p>
              <p>Chattogram, Bangladesh</p>
            </div>
          </div>
        </div>
      </div>
      {/* Top part end */}
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        {/* Only Mobile view brand name */}
        <Typography
          textGradient
          as="NavLink"
          to="/"
          variant="h7"
          className="mr-4 cursor-pointer font-bold uppercase lg:hidden flex items-center gap-2 text-textPrimary"
        >
          <img src={logo} alt="logoImage" className="w-6" />
          <span> Jahed's Dental Care</span>
        </Typography>
        {/* Only Mobile view brand name end */}
        {/* Navigations start */}
        <div className="hidden lg:block py-2">{navList}</div>
        <Button
          size="sm"
          className="lg:flex items-center bg-white border-2 border-secondary gap-1 rounded-sm text-sm hidden text-secondary py-1 hover:bg-secondary hover:text-white transition-all delay-75 shadow-none hover:shadow-lg"
        >
          <BiLogIn className="text-2xl" />
          <NavLink to={"/login"}>Login</NavLink>
        </Button>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
        {/* Navigations start */}
      </div>
      <MobileNav open={openNav}>
        {navList}
        <Button
          size="sm"
          fullWidth
          className="mb-2 bg-primary rounded-sm flex justify-center items-center gap-1"
        >
          <BiLogIn />
          <NavLink to={"/login"}>Login</NavLink>
        </Button>
      </MobileNav>
    </Navbar>
  );
};

export default Header;
