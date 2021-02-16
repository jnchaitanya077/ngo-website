import React from "react";
import { Link } from "react-router-dom";

function NavItem({ eachItem }) {
  return (
    <li className="nav-item">
      <Link
        className="nav-link text-nowrap"
        to={
          eachItem.link.includes(":")
            ? eachItem.link.substring(0, eachItem.link.length - 1) +
            eachItem.linkTitle
            : eachItem.link
        }
      >
        {eachItem.linkTitle}
      </Link>
    </li>
  );
}

export default NavItem;
