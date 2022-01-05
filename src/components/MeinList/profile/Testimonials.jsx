import React from "react";
import styled from "styled-components";

export default function Testimonials() {

  return (
    <Section>
      <div className="Titles" id="testimonila">
        <h4>Some Words</h4>
        <h2>Testimonial</h2>
      </div>
      <div className="testimonials">
        <div className="testimonial">
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed nonumy
            eirmod tempor invidunt ut labore et dolore magnaed aliquyam erat,
            sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
            rebum. Stet clita kasd gubergren.
          </p>
          <div className="infoms">
              <img src='https://diviultimate.com/wp-content/uploads/2017/01/client-1.jpg' alt="Testimonial" />
              <div className="details">
                  <h4>Sunnatullox</h4>
                  <span>Softvare Inginer</span>
              </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed nonumy
            eirmod tempor invidunt ut labore et dolore magnaed aliquyam erat,
            sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
            rebum. Stet clita kasd gubergren.
          </p>
          <div className="infoms">
              <img src='https://diviultimate.com/wp-content/uploads/2017/01/client-1.jpg' alt="Testimonial" />
              <div className="details">
                  <h4>Sunnatullox</h4>
                  <span>Softvare Inginer</span>
              </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed nonumy
            eirmod tempor invidunt ut labore et dolore magnaed aliquyam erat,
            sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
            rebum. Stet clita kasd gubergren.
          </p>
          <div className="infoms">
              <img src='https://diviultimate.com/wp-content/uploads/2017/01/client-1.jpg' alt="Testimonial" />
              <div className="details">
                  <h4>Sunnatullox</h4>
                  <span>Softvare Inginer</span>
              </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
margin:5rem 0;
.Titles{
  text-align:center;
  nargin-bottom:2rem;
}
.testimonials{
    display:flex;
    justfy-content:center;
    margin:0 2rem;
    gap:2rem;
  .testimonial{
      background-color:aliceblue;
      padding:2rem;
      border-radius:0.5rem;
      box-shadow:rgba(100,100,111,0.2)0px 7px 29px 0px;
      transition:0.3s ease-in-out;
      &:hover{
          transform:translateX(0.4rem) translateY(-1rem);
          box-shadow:rgba(0,0,0,0.35)0px 5px 15px;
      }
      .infoms{
          display:flex;
          justify-content:center;
          gap:1rem;
          align-items:center;
          margin-top:1rem;
          img{
              height:3rem;
              border-radius:4rem;
          }
          .details{
              span{
                  font-size:0.9rem;
              }
          }
      }
  }
}
@media screen and (min-width:280px ) and (max-width:768px){
  .testimonials{
      flex-direction:column;
      margin:0;
      .testimonial{
          justify-content:center;
          .infoms{
              justify-content:center;
          }
      }
  }
}
`;