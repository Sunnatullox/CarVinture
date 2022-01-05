import { Link  as Links  } from "react-scroll";
import "./style/Header.css";
import { useHistory } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import hamburger from './img/icons8-menu.svg'
import close from './img/icons8-close.svg'



function Header() {
  const history = useHistory();
  const { loginWithRedirect, loginWithPopup, isAuthenticated } = useAuth0();
  const [navbar, setNavbar] = useState(true);
  const [shownav, setShownav] = useState(true)
  
  try{
    const changeBAcground = ()=> {
      if ( window.scrollY < 1) {
        setNavbar(true)
      }else{
        setNavbar(false)
      }
    }
    window.addEventListener('scroll',changeBAcground);
  }catch(error){

  }

  

  return (
   <>
   {!isAuthenticated && (

<nav className={navbar ? "navbar navbar-expand-lg navbar-light" : " navbar sticky-top navbar-expand-lg navbar-light  active"}>
<div className="contants container-fluid">
<Links to="/" spy={true} smooth={true} offset={50} duration={500} className="Car logo" >CarVenture</Links>
  <button className="navbar-toggler border border-dark text-info" onClick={() => setShownav(!shownav)}>
  { shownav ? <img src={hamburger} alt="" className=" w-50" /> : <img src={close} alt="" className=" w-50"/> }
  </button>
  <div className={ shownav ? "collapse navbar-collapse" : "collapse navbar-collapse shownav" } id="navbarSupportedContent">
    <ul className="navbar-nav me-auto manuli  mb-lg-0 ms-auto" id="js-menu">
      <li className="nav-item">
        <Links onClick={() => setShownav(!shownav)} to="home" spy={true} smooth={true} offset={-100} duration={500} className="nav-links borbot">Home</Links>
      </li>
      <li className="nav-item">
      <Links onClick={() => setShownav(!shownav)} to="cars" spy={true} smooth={true} offset={-100} duration={500} className="nav-links borbot">Cars</Links>
      </li>
      <li className="nav-item">
      <Links onClick={() => setShownav(!shownav)} to="Info" spy={true} smooth={true} offset={-100} duration={500} className="nav-links borbot">Locations</Links>
      </li>
      <li className="nav-item">
      <Links onClick={() => setShownav(!shownav)} to="Area" spy={true} smooth={true} offset={-100} duration={500}  className="nav-links borbot">Contact</Links>
      </li>
      <li className="nav-item">
      <Links onClick={() => setShownav(!shownav)} to="Stories"  spy={true} smooth={true} offset={-100} duration={500} className="nav-links borbot">Stories</Links>
      </li>
      <li className="nav-item">
      <Links onClick={() => setShownav(!shownav)} to="Search"  spy={true} smooth={true} offset={-100} duration={500} className="nav-links borbot">Search</Links>
      </li>
      <li className="nav-item">
      <Links 
            type="button"
            className="btn sign_up m-2"
            onClick={() => loginWithPopup()}
          >
            Sign Registor
          </Links>
      </li>
    </ul>
  </div>
</div>
</nav>
   )}
       {isAuthenticated && history.push("/profile")}
   
   </>
  
  );
}

export default Header;


//// registratsiya bo'limini Auth0 bilan qilganda malumotlarni json serverga joylash ////
  /*   const { user } = useAuth0() */
  /* fetch("http://localhost:5000/Registor", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({...user})
  })
    .then(() => {
      console.log("Added you info");
      
    })
    .catch((error) => {
      console.log(error);
    });
    
 */




////scroll navbar yasash ////

     /*  const [navbar, setNavbar] = useState(false);
  const changeBAcground = ()=> {
    if ( window.scrollY > 70) {
      setNavbar(true)
    }else{
      setNavbar(false)
    }
  }
  window.addEventListener('scroll',changeBAcground);
  
  .navbar
  {
    height: 80px;
    margin-left: 1rem;
    background: transparent;
    justify-content: center;
    align-items:center;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    z-index: 999;
    border: none;
    padding-bottom: 10px;
  }
<div classNameName={navbar ? 'navbar active' : 'navbar'}></div> */