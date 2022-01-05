import styled from "styled-components"
import "../style/Profile.css"
import Navbar from "./profile/Navbar";
import profile_img from "../img/profile-img.jpg"
import Service from "./profile/Service";
import Products from "./profile/Products";
import Footer from "../Footer";
import Testimonials from "./profile/Testimonials";
import MyGoogleMap from "./profile/MyGoogleMap";
import ContactUs from "./profile/ContactUs";

export default function Profile() {

  
const Section = styled.section`


position:relateve;
margin-top:0rem;
width:100%;
height:100%
.backgraund{
  height:100%;
  img{
    width:100%;
    height:50%
    filter: brightness(60%);
  }
  }
  .Pro_contents{
    height:100%;
    width:100%;
    position: absolute;
    top:0;
    z-index:3;
    text-align:center;
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    gap:1rem;
    .Pro_title{
      color:white;
     .titles{ 
      font-size:3rem;
      letter-spacing:0.2rem;
    }
    .pragrp{
      text-align:center;
      padding: 0.3vw
      margin-top:0.5rem
      font-size: 1.2rem;
    }
  }
  .Pro_search{
    display:flex;
    background-color:#ffffffce;
    padding:0.5rem;
    margin:0;
    border-radius:0.5rem;
    
    .containerPro{
      display:flex;
      align-items:center;
      justify-content:center;
      flex-direction:column;
      padding:0 1.5rem;
      label{
        font-size:1.1rem;
        color:#03045e;
      }
      input{
        background-color:transparent;
        border:none;
        text-align:center;
        color:black;
        &[type="date"]{
          padding-left:3rem;
        }
        &::placeholder{
          color:black;
        }
        &:focus{
          outline:none;
        }
      }
    }
    button{
      padding:1rem;
      cursor:pointer;
      border-radius:0.3rem;
      flex:none;
      border:none;
      color:white;
      background-color:#4361ee;
      font-size:1.1rem;
      text-transform:uppercase;
      transition:0.3s ease-in-out;
      &:hover{
        background-color:#023e8a;
      }
    }
  }
}


@media screen and (min-width:280px ) and (max-width:980px){
  height:27rem;
  .backgraund{
    img{
      height:30rem;
    }
  }
  .Pro_contents{
    .Pro_title{
      .titles{ 
        font-size:1.4rem;
      }
      .pragrp{
        font-size:0.8rem;
        padding:1vw;
      }
    }
    .Pro_search{
      flex-direction:column;
      padding:0.8rem;
      gap:0.8rem;
      .containerPro{
        padding:0 0.8rem;
        input[type="dte"]{
          padding-left:1rem;
        }
      }
      button{
        padding:1rem;
        font-size:1rem;
      }
    }
  }
}
`;

  return (
    <div className="profil">
     <Navbar/>
      <Section id="homes">
        <div className="backgraund">
          <img src={profile_img} alt="" />
        </div>
        <div className="Pro_contents">
          <div className="Pro_title">
            <h1 className="titles">CarVInture Car Rental</h1>
            <p className="pragrp">GET 15% OFF YOUR RENTAL</p>
          </div>
        <div className="Pro_search">
          <div className="container containerPro">
            <label for="">Look for a car to rent</label>
            <input type="text" placeholder="Search your location" />
          </div>
          <div className="container containerPro">
            <label for="">Pick-up date</label>
            <input type="date"  />
          </div>
          <div className="container containerPro">
            <label for="">Drop-off date</label>
            <input type="date"  />
          </div>
          <button>Find it now</button>
        </div>
        </div>
      </Section>
      <div>
      <Service/>
      </div>
      <div>
        <Products/>
      </div>
      <div>
        <Testimonials/>
      </div>
      <div>
        <MyGoogleMap/>
      </div>
      <div>
        <ContactUs/>
      </div>
      <div>
        <Footer/>
      </div>
     
     </div>
)  
}






/*         <div class="p-3 mb-3 baner" style={{"mix-blend-mode":" darken"}}>
          <div className="header-img">
            <div className="graden"></div>
            <div className="row">
              <div className="col py-5">
                <h1 className="text-white">Rentall</h1>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="searchg d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

              <div className="navbar navbr col-12 col-lg-auto me-lg-auto justify-content-center mb-md-0">
                <span><a href="#!" className="NavBrands nav-link px-2 link-secondary">All Brands</a></span>
                <span><a href="#!" className="NavBrands nav-link px-2 link-dark">Audi</a></span>
                <span><a href="#!" className="NavBrands nav-link px-2 link-dark">Chevrolet</a></span>
                <span><a href="#!" className="NavBrands nav-link px-2 link-dark">Lexsus</a></span>
                <span><a href="#!" className="NavBrands nav-link px-2 link-dark">Toyota</a></span>
                <span><a href="#!" className="NavBrands nav-link px-2 link-dark">Tesla</a></span>
              </div>

              <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                <input type="search" className="form-control" placeholder="HYUNDAI..." aria-label="Search"/>
              </form>

              <div className=" text-end">
                <button type="button" className="btn btn-outline-dark">Search</button>
              </div>
            </div>
          </div>
        </div> */