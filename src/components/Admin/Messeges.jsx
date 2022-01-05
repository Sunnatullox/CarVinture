import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { cardStyle } from './ReasubleStyle'
import { Link } from 'react-router-dom';

export default function Messeges() {
    const [userMesseg, setUsermesseg]=useState([]);
    

    useEffect(()=> {
       getMesseg();
    },[userMesseg])

    
    const getMesseg = async() => {
        const response = await fetch(`https://cars-vinture.herokuapp.com/messeges`);
        const data = await response.json();
        setUsermesseg(data)
    }

    function deleteClientInfo (id){
        fetch(`https://cars-vinture.herokuapp.com/messeges/${id}`, {
           method: "DELETE",
         }).then(resuult=> {
             resuult.json()
            })
            .then((respon) =>{
              console.log(respon);
            })
       
   };

    return (
        <Section>
            <div className="clients_messeg">
                <h2>Recent Order</h2>
            </div>
            <div className="card-body">
            <table className="table table-hove=">
                <thead>
                  <tr className="text-dark row">
                    <th className="col">Customer</th>
                    <th className="col">ORDER AMOUNT</th>
                    <th className="col">ADDRESS</th>
                    <th className="col">PHONE</th>
                    <th className="col">EMAIL</th>
                    <th className="col">PISCKING UP DATE</th>
                    <th className="col">DROPPING OFF DATE</th>
                    <th className="col">ORDER TIME</th>
                    <th className="col">Fuul info</th>
                     <th className="col">change the info</th>
                  </tr>
                </thead>
                <tbody>
                    {userMesseg.map((mess, id)=> {
                        return(
                        <tr key={id} className="row">
                          <td className="col">  
                              <a className="d-flex align-items-center "
                                href="#!"  
                                id="navbarDropdownMenuLink"
                                aria-expanded="false">
                                <img
                                src={mess.userImg}
                                className="rounded-circle"
                                height="45"
                                alt=""
                                />
                            </a>
                          </td>

                          <td className="col">{mess.FirstName}</td>
                          <td className="col">{mess.location}</td>
                          <td className="col">{mess.UserPhone}</td>
                          <td className="col">{mess.UserEmail}</td>
                          <td className="col">{mess.upDate}</td>
                          <td className="col">{mess.ofDate}</td>
                          <td className="col">{mess.year}/{mess.month}/{mess.Data}  {mess.hour}:{mess.minutes}</td>
                          <td className="col"><Link to={`/clientsinfo/${mess.id}`}><i class="fas fa-eye"></i></Link></td>
                            <td className="col"><Link onClick={() => deleteClientInfo(mess.id)}><i class="fas fa-trash"></i></Link> </td>
                        </tr>
                        )
                    })}
                </tbody>
              </table>
            </div>
        </Section>
    )
}


const Section = styled.section`
    margin-top:1rem !important;
    ${cardStyle}
    width:100%
    height:100%
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
                        font-size:0.8rem;
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
                                &:nth-of-type(4),
                                &:nth-of-type(5),
                                &:nth-of-type(6),
                                &:nth-of-type(7),
                                &:nth-of-type(8),
                                &:nth-of-type(9){
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
                                &:nth-of-type(4),
                                &:nth-of-type(5),
                                &:nth-of-type(6),
                                &:nth-of-type(7),
                                &:nth-of-type(8),
                                &:nth-of-type(9){
                                    display:none;
                                    background-color:#060b26;

                                }
                            }
                        }
                    }
                }
        }  
`;