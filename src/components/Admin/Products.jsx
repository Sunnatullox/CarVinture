import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AddCarosel from "./AddCarosel";
import AddproductCar from "./AddproductCar";
import { cardStyle } from "./ReasubleStyle";
import Sidebar from "./Sidebar";

export default function Products() {
  const [Procuts, setProcuts] = useState([]);

  useEffect(() => {
    getMesseg();
  }, [Procuts]);

/* useEffect(()=>{
  deleteCart();
},[deleteCart])
 */
 function deleteCart (id){
   fetch(`https://cars-vinture.herokuapp.com/Car/${id}`, {
      method: "DELETE",
    }).then(resuult=> {
        resuult.json()
      })
      .then((respon) =>{
        console.log(respon);
      })
  
};
  

  const getMesseg = async () => {
    const response = await fetch("https://cars-vinture.herokuapp.com/Car");
    const data = await response.json();
    setProcuts(data);
  };

  return (
    <>
      <Sidebar />
      <Section>
        <div className="clients_messeg">
          <h2>Recent Order</h2>
        </div>
        <div className="row">
          <div className="col-10"></div>
          <div className="col-2">
            <AddproductCar/>
          </div>
        </div>
        <div className="card-body">
          <table className="table table-hove=">
            <thead>
              <tr className="text-dark row">
                <th className="col">Cars Image</th>
                <th className="col">Cars Titles</th>
                <th className="col">Car Price</th>
                <th className="col">Car Model</th>
                <th className="col">Fuul info</th>
                <th className="col">change the info</th>
              </tr>
            </thead>
            <tbody>
              {Procuts.map((prod, id) => {
                return (
                  <tr key={id} className="row">
                    <td className="col">
                      <a
                        className="d-flex align-items-center "
                        href="#!"
                        id="navbarDropdownMenuLink"
                        aria-expanded="false"
                      >
                        <img
                          src={prod.image}
                          className="rounded-circle"
                          height="45"
                          alt=""
                        />
                      </a>
                    </td>
                    <td className="col">{prod.title}</td>
                    <td className="col">{prod.price}</td>
                    <td className="col">{prod.model}</td>
                    <td className="col"><Link to={`/info/${prod.id}`}><i class="fas fa-eye"></i></Link></td>
                    <td className="col"><Link onClick={() => deleteCart(prod.id)}> <i class="fas fa-trash"></i></Link></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Section>
      <AddCars>
        <AddCarosel/>
      </AddCars>
  
    </>
  );
}

const AddCars = styled.section`
${cardStyle}
margin-top:2rem;
border-radius:0;
`;

const Section = styled.section`
    margin-top:3rem !important;
    ${cardStyle};
    border-radius:0;
    width:100%;
    height:100%;
    padding:2rem 0 0 0;
    display:grid;
    .clients_messeg{
        display:flex; 
        color:#ffc107;
        justify-content:center;
    }
    .card-body{
        table{
            thead{
                tr{
                    background-color:rgba(0,0,0,0.3);
                    transition: 0.3s ease-in-out;
                    &:hover{
                        background-color:#ffc107;
                        th{
                            color:black;
                        }
                    }
                    th{
                        color:white;
                    }
                }   
            }
            tbody{
                padding:0;
                
                tr{
                    border-top:1px solid #000;
                    border-bottom:1px solid #000;
                    vertical-align: middle;
                    background-color: rgb(138, 138, 130);
                    td{    
                                          
                        margin-top:1.2rem !important;
                        color:black;
                        font-size:0.8rem;
                        font-weight: bold;
                        i{
                            font-size:1.2rem;
                            margin-left:20px;
                            transition:0.3s ease-in-out;
                            color:black;
                            &:hover{
                                transform:translateY(-0.5rem)
                            }
                        }
                        .fa-eye{
                            transition: 0.3s ease-in-out;
                        }
                        .fa-trash{
                            color:red;
                        }
                    }
                    &:hover{
                        transition: 0.3s ease-in-out;
                        background-color:#ffc107;
                        
                        td{
                                color:#060b26 ;
                        }
                    }
                }
            }
        }
    }
    @media screen and (min-width:450px ) and (max-width:950px){

        .clients_messeg{
            h2{
                font-size:1.2rem;
            }
        }
        .card-body{
                table{
                    
                    thead{
                        tr{
                            th{
                                font-size:0.4rem;
                            }
                        }
                    }
                    tbody{
                        background-color: rgb(138, 138, 134);
                        padding:0;
                        tr{
                            vertical-align: middle;
                            padding:0;
                            td{
                                padding:0;
                                img{
                                    width:1rem;
                                    height:1rem;
                                }
                                display:flex;
                                align-items:center;
                                margin-top:1rem !important;
                                font-size:0.3rem;
                            }
                        }
                    }
                }
        }
    }
    @media screen and (min-width:280px ) and (max-width:450px){
        .clients_messeg{
            h2{
                font-size:1.2rem;
            }
        }
        .card-body{
                table{
                    
                    thead{
                        tr{
                            th{
                                display:flex;
                                justify-content:center;
                                font-size:0.4rem;
                                &:nth-of-type(3),
                                &:nth-of-type(4){
                                    display:none;
                                }
                            }

                        }
                    }
                    tbody{
                        background-color: rgb(138, 138, 134);
                        padding:0;
                        tr{
                            vertical-align: middle;
                            padding:0;
                            td{
                                justify-content:center;
                                padding:0;
                                img{
                                    display:flex;
                                    width:1rem;
                                    height:1rem;
                                    
                                }
                                display:flex;
                                align-items:center;
                                margin-top:1rem !important;
                                font-size:0.3rem;
                                font-size:0.4rem;
                                &:nth-of-type(3),
                                &:nth-of-type(4){
                                    display:none;
                                    background-color:#060b26;

                                }
                            }
                        }
                    }
                }
        }  
`;
