import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import { FaBars } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { FaTimes } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { IoRestaurantSharp } from "react-icons/io5";

const Header = () => {
  const [searchIconOpen, setSearchIconOpen] = useState(false);
  const showSearch = () => {
    setSearchIconOpen(!searchIconOpen);
  };
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <div className="Top">
      {/* <div className='head-top-black'>
                <div>
                    logo
                </div>
                <div>
                    <button className='BuyBiletBtn'>Buy now</button>
                </div>
            </div> */}
      {/* Video bileşeni */}
      {/* <video autoPlay muted loop className="BackgroundVideo">
        <source
          src="https://example.com/3769033-hd_1920_1080_25fps.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video> */}
      <div
        className="SearchBox"
        style={{ display: searchIconOpen ? "flex" : "none" }}
      >
        <IoSearch />
        {searchIconOpen && (
          <input type="text" className="SearchInp" placeholder="Search..." />
        )}
      </div>
      <header>
        <button className=" nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
        <div>
          <h1 className="royatetext">ROYATE</h1>
        </div>
        <div>
          <nav ref={navRef}>
            <ul>
              <li>
                <NavLink
                  to={"/"}
                  className={(navData) => (navData.isActive ? "active" : "")}
                >
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/about"}
                  className={(navData) => (navData.isActive ? "active" : "")}
                >
                  ABOUT
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/menu"}
                  className={(navData) => (navData.isActive ? "active" : "")}
                >
                  MENU
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/blog"}
                  className={(navData) => (navData.isActive ? "active" : "")}
                >
                  BLOG
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/shop"}
                  className={(navData) => (navData.isActive ? "active" : "")}
                >
                  SHOP
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(navData) => (navData.isActive ? "active" : "")}
                  to={"/register"}
                >
                  <FaRegUser />
                </NavLink>
              </li>
              <li>
                <button className=" nav-btn nav-close-btn" onClick={showNavbar}>
                  <FaTimes />
                </button>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <div className="SearchIconBox ">
            {/* <button onClick={showSearch}>
              <IoMdSearch className="search"  />
            </button> */}
            <IoRestaurantSharp className="eaticon" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
