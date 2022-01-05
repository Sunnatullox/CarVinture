import React from 'react'
import styled from 'styled-components'
import {cardStyle} from './ReasubleStyle'


export default function Analistic() {
    return (
        <Section>
            <div className="analytic">
                <div className="logo">
                <i className="fas fa-clipboard-list"></i>
                </div>
                <div className="content">
                    <h5>Spent this month</h5>
                    <h2>$693.7</h2>
                </div>
            </div>
            <div className="analytic">
                <div className="logo"> <i className="fas fa-chart-line"></i></div>
                <div className="content">
                    <h5>Earnings</h5>
                    <h2>$390.9</h2>
                </div>
            </div>
            <div className="analytic">
                <div className="logo"> <i className="fas fa-user-friends"></i></div>
                <div className="content">
                    <h5>New Clients</h5>
                    <h2>321</h2>
                </div>
            </div>
            <div className="analytic">
                <div className="content">
                    <h5>Activity</h5>
                    <h2>$643.50</h2>
                </div>
                <div className="logo"> <i className="fas fa-wave-square"></i></div>
            </div>
        </Section>
    )
}

const Section = styled.section`
display:grid;
grid-template-columns:repeat(2,1fr);
gap:1rem;
.analytic{
${cardStyle};
padding:1rem;
display:flex;
justify-content:space-evenly;
align-items:center;
gap:1rem;
transition:0.5s ease-in-out;
i{
    display:grid;
    color:white;
    width:3rem;
    height:3rem;
    justify-content:center;
    align-items:center
}
&:hover{
    background-color:#ffc107;
    color:black;
        i{
            color:white;
        }
    }
    .logo{
        background-color:black;
        border-radius:3rem;
        dispay:flex;
        justify-content:center;
        align-items:center
        padding:1.5rem;
        i{
            font-size:1.5rem;
        }

    }
}
@media screen and (min-width:280px ) and (max-width:1080px){
    grid-template-columns:repeat(auto-fill,minmax(220px, 1fr));
    .analytic{
        &:nth-of-type(3),
        &:nth-of-type(4){
            flex-direction:row-reverse;
        }
    }

}

`;