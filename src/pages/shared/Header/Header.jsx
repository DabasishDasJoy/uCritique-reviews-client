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
          className={`flex items-center border-b-2 hover:text-primary ${({
            isActive,
          }) =>
            isActive
              ? "text-primary  border-b-primary"
              : " border-b-white text-secondary"}`}
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
          className={`flex items-center border-b-2 hover:text-primary ${({
            isActive,
          }) =>
            isActive
              ? "text-primary  border-b-primary"
              : " border-b-white text-secondary"}`}
        >
          Services
        </NavLink>
      </Typography>
    </ul>
  );

  return (
    <Navbar fullWidth className="container mx-auto lg:px-0 lg:py-0 py-1 px-1">
      {/* Top part for desktop & tablet */}
      <div className="lg:flex hidden items-center justify-between border-b-2 px-20 py-3">
        <Typography
          textGradient
          as="NavLink"
          to="/"
          variant="h5"
          className="mr-4 cursor-pointer font-bold uppercase flex items-center gap-2 text-secondary"
        >
          <img src={logo} alt="logoImage" className="w-9" />
          <span> Jahed's Dental Care</span>
        </Typography>
        <div className="flex gap-3">
          <div className="flex gap-2 items-center">
            <BsClock className="text-primary w-8 h-8" />
            <div className="text-secondary font-normal text-xs leading-5">
              <p>Monday - Friday</p>
              <p>08:00 AM - 08:00PM</p>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <BsTelephone className="text-primary w-8 h-8" />
            <div className="text-secondary font-normal text-xs leading-5">
              <p>+88018 888 88888</p>
              <p>jahedscare@office.com</p>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <GoLocation className="text-primary w-8 h-8" />
            <div className="text-secondary font-normal text-xs leading-5">
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
          className="mr-4 cursor-pointer font-bold uppercase lg:hidden flex items-center gap-2 text-secondary"
        >
          <img src={logo} alt="logoImage" className="w-6" />
          <span> Jahed's Dental Care</span>
        </Typography>
        {/* Only Mobile view brand name end */}
        {/* Navigations start */}
        <div className="hidden lg:block py-2">{navList}</div>
        <Button
          size="sm"
          className="lg:flex items-center bg-white border-2 border-primary gap-1 rounded-sm text-sm hidden text-primary py-1 hover:bg-primary hover:text-white transition-all delay-75"
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