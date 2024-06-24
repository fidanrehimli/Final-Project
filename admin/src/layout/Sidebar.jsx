import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {
  const menuItem = [
    {
      path: "/user",
      name: "Users",
      icon: <FaUserCircle />,
    },
    {
      path: "/productadd",
      name: "Products",
      icon: <FaShoppingCart />,
    },
  ];


  return (
    <div className="container">
      <div className="sidebar">
        <div className="top_section">
          <h1 className="logo">Delivery</h1>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassname="active"
          >
            <div className="icon">{item.icon}</div>
            <div className="link-text">{item.name}</div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
