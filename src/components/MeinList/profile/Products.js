import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Loader from "../Loader";
import modelcar from "../../img/car-2895.svg"
import avtomatic from "../../img/1bfdeaa23c4628d33721502fd76bdabc.svg"
import sped from "../../img/car-speedometer-svgrepo-com.svg"



export default function Products() {
  const [carts, setCarts] = useState([]);
  const [active, setActive]= useState(1)

  useEffect(() => {
    getCartshendel();
  }, []);

  const getCartshendel = async () => {
    const responts = await fetch("http://localhost:5000/Car");
    const data = await responts.json();
    setCarts(data);
  };

  const brandsCar = [
      "All Brands",
      'Audi',
      'Chevrolet',
      'Lexsus',
      'Toyota',
      'Tesla'
  ]

  const Section = styled.section`
  padding:2rem 0; 
  .titles{
    text-align:center;
  }
  .packages{
    justify-content: center;
    display: flex;
    margin:2rem 0;
    ul{
        display:flex;
        list-style-type:none;
        width:max-content;
        li{
            padding:1rem 2rem;
            border-bottom:0.1rem solid black;
        }
        .active{
            border-bottom:0.5rem solid #8338ec
        }
    }
  }
  .destinations{
      display:grid;
      grid-template-columns:repeat(3,1fr);
      gap:3rem;
      padding:0 3rem;
      .destination{
          padding:1rem;
          display:flex;
          flex-direction:colmn;
          gap:0.5rem;
          background-color:#8383ec14;
          border-radius:1rem;
          text-align:center;
          transition: 0.3s ease-in-out;;
          &:hover{
            transform:translateX(0.4rem) translateY(-1rem);
            box-shadow:rgba(0,0,0,0.35) 0px 5px 15px ;
          }
          .carimg{
              width:100%;
          }
          .info{
            display:flex;
            align-items: center;
            justify-content: center;
            .services{
                display:flex;
                gap:0.3rem;
                padding:0.3rem;
                img{
                    width:2rem;
                    border-radius:1rem;
                    padding:0.3rem 0.4rem; 
                    backgraund-color:#4d2ddb84;
                    margin-top:-1rem;
                }
            }
            display:flex;
          }
      }
  }

  @media screen and (min-width:280px ) and (max-width:765px){
    .packages{
        ul{
            li{
                padding:0 0.5rem;
                font-size:2vh;
                padding-bottom:1rem;
            }
            .active{
                border-bottom-width:0.3rem;
            }
        }
    }
    .destinations{
        grid-template-columns:1fr;
        padding:0;
        .destination{
            .info{
                .services{
                    padding:0.1rem;
                }
            }
        }.
    }
  }
  @media screen and (min-width:765px ) and (max-width:1080px){  
    .destinations{
        grid-template-columns:repeat(2,1fr)
        padding:0;
        .destination{
            .info{
                .services{
                    padding:0.1rem;
                    img{
                        width:1.5rem;
                    }
                    p{
                        font-size:10px;
                    }
                }
            }
        }.
    }
  }
  `;

  return (
    <div>
      {!carts.length ? (
        <Loader />
      ) : (
        <Section id="products">
          <div className="titles">
            <h2>OUR RENTAL FLEETS</h2>
            <p>
              Amco laboris nisi ut aliquip xea comod consequt duis aute irure <br/>
              dolor reprehenderit voluptate velit cillum dolore fugiat lore <br/>
              ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod <br/>
              tempor incididunt
            </p>
          </div>
          <div className="packages">
              <ul>
            {brandsCar.map((brand,id) => {
                return(
                    <li key={id} className={active === id+1 ? "active" : ""} onClick={() => setActive(id + 1)}>
                        {brand}
                    </li>
                )
            })}
              </ul>
          </div>
          <div className="destinations">
              {carts.map((car, id) => {
                  return(
                      <div key={id} className="destination card h-100" >
                          <img src={car.image} className="carimg" alt="..." />
                          <h3>{car.title}</h3>
                          <h5>{car.price}<span className="text-danger">/Day</span></h5>
                          <div className="info ">
                              <div className="services">
                              <img src={modelcar} alt=".." />
                              <p>{car.model}</p>
                              </div>
                              <div className="services">
                              <img src={avtomatic   } alt="" />
                              <p>Automatic</p>
                              </div>
                              <div className="services">
                              <img src={sped} alt="" />
                              <p>20kmpl</p>
                              </div>
                          </div>
                      </div>    
                  )
              })}
          </div>
        </Section>
      )}
    </div>
  );
}
