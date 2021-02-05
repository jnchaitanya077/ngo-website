import React from "react";
import Button from "./Button";
import NavList from "./NavList";
import { Link } from "react-router-dom";
import { donate, stickyNavBar } from "../data/Styles";
import "../css/navigation.css";

export default function Navigation({ sticky }) {
  return (
    <nav
      className={
        sticky
          ? "navbar navbar-expand-xxl fixed-top navbar-light"
          : "navbar navbar-light navbar-expand-xxl"
      }
    >
      <Link className="navbar-brand" to="/">
        Samagra Foundation
      </Link>
      <button
        className="navbar-toggler custom-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse  d-xs-flex flex-xs-row-reverse"
        id="navbarNavDropdown"
      >
        <ul className="navbar-nav ms-auto">
          <NavList navItems={navItems} styles={stickyNavBar} sticky={sticky} />
        </ul>
      </div>
      <Button name={"Donate"} style={donate} url="/" type="btn-sm" />
    </nav>
  );
}

const navItems = [
  {
    id: 0,
    isActive: false,
    tabTitle: "About Us",
    navList: [
      { linkTitle: "Mission/Vision", link: "/About", id: 0 },
      { linkTitle: "Our Team", link: "/Team", id: 1 },
      { linkTitle: "FAQs", link: "/Faq", id: 2 },
    ],
    url: ""
  },
  {
    id: 1,
    isActive: false,
    tabTitle: "Schemes",
    navList: [
      { linkTitle: "Bharatiya Balavikas Yojana", link: "/Schemes/:", id: 0 },
      { linkTitle: "Bharatiya Naari Shakti Yojana", link: "/Schemes/:", id: 1 },
      { linkTitle: "Bharatiya Jaldhar Yojana", link: "/Schemes/:", id: 2 },
      { linkTitle: "Bharatiya Suraj Bijili Yojana", link: "/Schemes/:", id: 3 },
      {
        linkTitle: "Bharatiya Varshjal Sanchayan Yojana",
        link: "/Schemes/:",
        id: 4,
      },
      { linkTitle: "Bharatiya Rakshak Yuva Sena", link: "/Schemes/:", id: 5 },
      { linkTitle: "Grameen kalabharati Yojana", link: "/Schemes/:", id: 6 },
      {
        linkTitle: "Matha Shishu Samrakshana Yojana",
        link: "/Schemes/:",
        id: 7,
      },
    ],
    url: ""
  },
  {
    id: 2,
    isActive: false,
    tabTitle: "Creating Impact",
    navList: [
      { linkTitle: "Donate Online", link: "", id: 0 },
      { linkTitle: "Join Us", link: "", id: 1 },
    ],
    url: ""
  },
  {
    id: 3,
    isActive: false,
    tabTitle: "Support",
    navList: [
      { linkTitle: "Government Organizations", link: "", id: 0 },
      { linkTitle: "Corporate Organizations", link: "", id: 1 },
      { linkTitle: "Institution & Organization", link: "", id: 2 },
      { linkTitle: "Philanthropists", link: "", id: 3 },
    ],
    url: ""
  },
  {
    id: 4,
    isActive: false,
    tabTitle: "Scholarships",
    navList: [
      { linkTitle: "Cash Awards", link: "/CashAwards", id: 0 },
      { linkTitle: "Student Scholorships", link: "", id: 1 },
      { linkTitle: "Medals", link: "", id: 2 },
      { linkTitle: "Certificates", link: "", id: 3 },
    ],
    url: ""
  },
  {
    id: 5,
    isActive: false,
    tabTitle: "Finance",
    navList: [
      { linkTitle: "Annual Reports", link: "/AnnualReports", id: 0 },
      { linkTitle: "Donar Details", link: "/DonarDetails", id: 1 },
    ],
    url: ""
  },
  {
    id: 6,
    isActive: false,
    tabTitle: "Media",
    navList: [
      { linkTitle: "Print Media", link: "", id: 0 },
      { linkTitle: "Electronic Media", link: "", id: 1 },
      { linkTitle: "Social Media", link: "", id: 2 },
      { linkTitle: "Gallery", link: "", id: 3 },
      { linkTitle: "Video Interview", link: "", id: 4 },
    ],
    url: ""
  },
  {
    id: 8,
    isActive: false,
    tabTitle: "Contact Us",
    navList: [],
    url: ""
  },
];
