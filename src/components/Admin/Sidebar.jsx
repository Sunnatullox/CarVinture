import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {Link as Links} from 'react-scroll'
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuth0();
  localStorage.setItem("img",user.picture)
  const userImg = localStorage.getItem("img")
  localStorage.setItem("name",user.name)
  const name = localStorage.getItem("name")
  const showSidebar = () => setOpen(!open);


  return (
  
    <>
    <div className=" sticky-top">
      <div className="nav">
        <div className="bar">
        <Link to="#" className="menu-bars ">
          <i onClick={showSidebar} className="fas fa-bars text-white"></i>
        </Link>
        </div>
        <div className="user" style={{marginLeft:"auto",display:"flex",marginRight:"2rem"}}>
        <a className="d-flex align-items-center m-3"
        href="#!"
        id="navbarDropdownMenuLink"
        aria-expanded="false"
      >
        <img
          src={userImg}
          className="rounded-circle"
          height="45"
          alt=""
        />
      </a>
            <h4 className="user_name text-white">{ name }</h4> 
        </div>
      </div>
      <nav className={open ? "nav-menu avtive" : "nav-menu"}>
        <ul className="nav-menu-items">
          <div className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <i onClick={showSidebar} className="fal fa-times text-white"></i>
            </Link>
          </div>
          <div className="nav-text">
            
            <h1 className="Car">CarVinture</h1>
          </div>
           <li className="nav-text ">
            <Link to="/dashbort">
            <i className="fas fa-th-large"></i>
              <span>Dashboard</span>
            </Link>
          </li>
          <li className="nav-text ">
            <Link to="/product">
            <i className="fas fa-tachometer-alt"></i>
              <span>Riders</span>
            </Link>
          </li>
          <li className="nav-text ">
            <Link to="">
            <i className="fas fa-id-card"></i>
              <span>Payments</span>
            </Link>
          </li>
          <li className="nav-text ">
            <Link to="">
            <i className="fas fa-list-alt"></i>
              <span>Learning</span>
            </Link>
          </li>
          <li className="nav-text ">
            <Link to="">
            <i className="fas fa-comment-dots"></i>
              <span>FAQs</span>
            </Link>
          </li>
          <li className="nav-text ">
            <Link to="">
            <i className="fas fa-cog"></i>
              <span>Settings</span>
            </Link>
          </li>
          <li className="nav-text quit">
            <Link to="/profile">
              <i className="fas fa-arrow-square-left"></i>
              <span>Quit</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  
    </>
  );
}

