import React from 'react'
import styled from 'styled-components'
import { cardStyle } from './ReasubleStyle'
export default function FAQ() {
    const faqs= [
        {
            icon:<i className="fas fa-calendar-alt"></i>,
            text:"How tomanage time and get good marks for trips"
        },
        {
            icon:<i className="fas fa-globe-asia"></i>,
            text:"How to regulate transactions over time"
        },
        {
            icon:<i className="fas fa-money-bill"></i>,
            text:"Withdrawing money through an ATM"
        },
    ]
    return (
        <Section>
            <div className="FAQtitle">
                <h2>Infarmation for drivers</h2>
            </div>
            <div className="faqs">
                {faqs.map((faq, index) => {
                    return(
                        <div className="faq" key={index}>
                            <div className="FAQinfo">
                                {faq.icon}
                                <h5>{faq.text} <i class="fas fa-chevron-right"></i></h5>
                            </div>
                        </div>
                    )
                })}
            </div>
        </Section>
    )
}


const Section = styled.section`
${cardStyle}
.FAQtitle{
    h2{
        color:#ffc107;
        letter-spacing:0.3rem;
    }
}
.faqs{
    display:flex;
    flex-direction:column;
    gap:1rem;
    margin-bottom:1rem;
    .faq{
        display:flex;
        align-items:center;
        justify-content:space-between;
        cursor:pointer;
        margin-top:1.2rem !important;
        .FAQinfo{
            display:flex;
            gap:1rem;
            align-items:center;
            h5{ 
                display:flex;
                i{
                    display:grid;
                    text-align:center;
                    justify-content:end
                    
                
                }
            }
        }
        i{
            display:grid;
            font-size:1.4rem
        }
        &:nth-of-type(2){
            border-top:0.01rem solid #6c6e6e;
            border-bottom:0.01rem solid #6c6e6e;
            padding:0.8rem 0;
        }
        

    }
}
@media screen and (min-width:280px ) and (max-width:1080px){
    i{
        font-size:2rem !important;
}
`;