import React from 'react'
import styled from 'styled-components'
import { cardStyle } from './ReasubleStyle'



export default function Transfers() {
    const transacrions = [
        {
            image:"https://diviultimate.com/wp-content/uploads/2017/01/client-1.jpg",
            name:"Sunnatullox",
            time:'Today , 17:47',
            amount:"+$31"
        },
        {
            image:"https://diviultimate.com/wp-content/uploads/2017/01/client-1.jpg",
            name:"Sunnatullox",
            time:'Today , 17:47',
            amount:"+$24"
        },
        {
            image:"https://diviultimate.com/wp-content/uploads/2017/01/client-1.jpg",
            name:"Sunnatullox",
            time:'Today , 17:47',
            amount:"+$27"
        }
    ]
    return (
        <Section>
            <div className="TraTitle">
                <h2>Your Transfers</h2>
            </div>
            <div className="transitions">
                {transacrions.map((trans, index) => {
                    return(
                        <div className="transition" key={index}>
                            <div className="transition_title">
                                <div className="transition_img">
                                    <img src={trans.image} alt="..." className="avatimg"/>
                                </div>
                                <div className="transition_title_ddetals">
                                    <h3>{trans.name}</h3>
                                    <h6>{trans.time}</h6>
                                </div>
                            </div>
                            <div className="transition_amount">
                            <span>{trans.amount}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
            <a href="#!" className="view">
                View all <i className="fas fa-arrow-right"></i>
            </a>
        </Section>
    )
}

const Section = styled.section`
${cardStyle};
margin-top:0.8rem;
dispaly:flex;
        
gap:1rem;
.TraTitle{
    h2{
        color:#ffc107;
        letter-spacing:0.3rem;
    }
}
.transitions{
    display:flex;
    flex-direction:column;
    gap:1rem;
    margin-top:1rem;
    .transition
        display:flex;
        justifiy-content:space-between;
        align-items:center;
        .transition_title{
            display:flex;
            gap:1rem;
            .transition_img{
                img{
                    height:2.5rem ;
                    border-radius:3rem;
                }
            }
        }
        .transition_amount{
            background-color:#d7e41e1d;
            width:4rem;
            margin-left:1rem;
            border-radius:1rem;
            text-align:center !important;
            transition:0.3s ease-in-out;
            &:hover{
                background-color:#ffc107;
                span{
                    color:black;
                }
            }
            span{
            }
        }

    }
}
.view{
    width:100%;
    display:flex;
    justify-content:flex-end;
    align-items:center;
    text-decoration:none;
    color:#ffc107;
    font-weight:bold;
    margin-top:1rem;
    gap:0.5rem;
    margin-right:1rem !important;
    i{
        transition:0.3s ease-in-out;
        font-size:1rem;
    }
    &:hover{
        i{
            transform:translateX(0.5rem)
        }
    }
    @media screen and (min-width:280px ) and (max-width:950px){
        .transitions{
            .transition{
                flex-direction:column;
                align-items:center;
                gap:1rem;
            }
        }
    }
}
`;