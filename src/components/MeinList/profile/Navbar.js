import React from "react";
import { Link } from "react-router-dom";
import {Link as Links} from 'react-scroll'
import { useState } from "react";
import { sidebarData } from "./sidebarData";
import { useAuth0 } from "@auth0/auth0-react";
import "../../style/Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuth0();
  
  const showSidebar = () => setOpen(!open);
          localStorage.setItem("img",user.picture)
          const userImg = localStorage.getItem("img")
          localStorage.setItem("name",user.name)
          const name = localStorage.getItem("name")

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
            <h4 className="user_name text-white">{name }</h4> 
        </div>
      </div>
      <nav className={open ? "nav-menu avtive" : "nav-menu"}>
        <ul className="nav-menu-items">
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <i onClick={showSidebar} className="fal fa-times text-white"></i>
            </Link>
          </li>
          <div className="nav-text">
            <h1 className="Car">CarVinture</h1>
          </div>
          {sidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Links className="text-white" to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Links>
              </li>
            );
          })}

          <li className="nav-text ">
            <Link to="/dashbort">
            <i className="fas fa-user-circle"></i>
              <span>Admin Panel</span>
            </Link>
          </li>
          <li className="nav-text quit">
            <Link to="/" onClick={() => logout()}>
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
