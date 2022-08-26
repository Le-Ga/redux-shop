import React from "react";
import * as FaIcons from "react-icons/fa";
import * as BsIcons from "react-icons/bs";

export const SidebarData = [
  {
    title: "Products",
    path: "/products",
    icon: <FaIcons.FaBoxes />,
    cName: "nav-text",
  },
  {
    title: "Cart",
    path: "/cart",
    icon: <BsIcons.BsCart4 />,
    cName: "nav-text",
  },
];
