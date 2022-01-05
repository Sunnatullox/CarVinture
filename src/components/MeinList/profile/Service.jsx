import React from 'react'
import like from "../../img/like-svgrepo-com.svg"
import clipboard from "../../img/clipboard-svgrepo-com.svg"
import location from "../../img/location-svgrepo-com.svg"
import styled from 'styled-components'


export default function Service() {
    const data= [
        {
            icon:like,
            title:"Our Customers Always 100% Satisfied",
            discription:"Lorem ipsum dolor sit amet consectetur adipisicing elit sed don eiusmod tempor enim minim veniam quis notrud exercitation"
        },
        {
            icon:clipboard,
            title:"We Provide Easier & Faster Bookings",
            discription:"Lorem ipsum dolor sit amet consectetur adipisicing elit sed don eiusmod tempor enim minim veniam quis notrud exercitation"
        },
        {
            icon:location,
            title:"Your Choice of Any Pickup Location",
            discription:"Lorem ipsum dolor sit amet consectetur adipisicing elit sed don eiusmod tempor enim minim veniam quis notrud exercitation"
        },
    ]

    return (
        <Section id='service'>
            {data.map((service, id) => {
                return(
                    <div className="service" key={id}>
                        <div className="icon">
                            <img src={service.icon} alt="" />
                        </div>
                        <h3>{service.title}</h3>
                        <p>{service.discription}</p>
                    </div>
                )
            })}
        </Section>
    )
}


const Section = styled.section`
padding:5rem 0;
display:grid;
grid-template-columns:repeat(3, 1fr);
gap:1rem;
.service{
    display:flex;
    flex-direction:column;
    gap:1rem;
    padding:2rem;
    background-color:aliceblue;
    box-shadow:rgb(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transition:0.3s ease-in-out;
    &:hover{
        transform:translateX(0.4rem) translateY(-1rem);
        box-shadow:rgba(0,0,0,0.35)0px 5px 15px;
    }
    .icon{
        text-align: center;
        img{
            height:4rem;
            
        }
    }
}

@media screen and (min-width:280px ) and (max-width:720px){
    grid-template-columns:repeat(auto-fill,minmax(250px,1fr));
}
@media screen and (min-width:720px ) and (max-width:1080px){
    grid-template-columns:repeat(2,1fr)
}
`;