import React from 'react'
import styled from "styled-components"
import { cardStyle } from './ReasubleStyle';



export default function ProFile() {
    return (
        <Section>
          <div className="immages">
            <img src="" alt="" />
          </div>
          <div className="prTitle">
              <h2>Sunnatullox</h2>
              <h5><i className="fas fa-map-marker-alt"></i> UZB, Termez, Angor</h5>
          </div>
          <div className="PrInfo">
              <div className="container">
                  <h5>Days atwork</h5>
                  <h3>28</h3>
              </div>
              <div className="container">
                  <h5>Rides</h5>
                  <h3>427</h3>
              </div>
              <div className="container">
                  <h5>Hours</h5>
                  <h3>76</h3>
              </div>
          </div>
        </Section>
    )
}
const Section = styled.section`
    ${cardStyle}
    margin-top:0.8rem;
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:1rem;
    .immages{
        max-height:100%;
        overflow:hidden;
        border-radius:20rem
        img{
            heigh:1rem;
            width:1rem;
            object-fit: cover;
            border-radius:20rem;
            transition:0.5s ease-in-out;
        }
        &:hover{
            img{
                transform:scale(1.1)
            }
        }
    }
    .prTitle{
        text-align:center;
        h2,h5{
            color:#ffc107;
            letter-spacing:0.2rem;
        }
        h5{
            letter-spacing:0.1rem;
        }
    }
    .PrInfo{
        display:flex;
        gap:1rem;
        .container{
            text-align:center;

        }
    }
`;