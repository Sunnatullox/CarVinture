import "../style/MeinHeader.css"
import SearchBox from "./SearchBox";
import audi from "../img/audi.png"
import chevroloet from "../img/chevrolet.png"
import lexsus from "../img/lexsus.png"
import tayota from "../img/tayota.png"
import tesla from "../img/tesla.png"
import Bmw from '../img/bmws.png'
export default function MeinHeader() {
  return (

    <div>
      <div className="card card-img text-white border" id="home">
        <div className="gradent"></div>
        <div className=" row  card-img-overlay">
          <div
            className="col-6 card-titles" >
            <h1 className="card-title">
              Renting cars have <br /> never been this easy
            </h1>
            <p className="card-text">
              Amet minim mollit non deserunt ullamco est sit <br /> aliqua dolor
              do amet sint. Velit officia consequat <br /> duis enim velit
              mollit.
            </p>
          </div>
        </div>
      </div>
      <div >
        <SearchBox />
      </div>
      <div className="logos row ">
        <div className="logo1 col" data-aos="fade-right" data-aos-offset="300"><img className="audi" src={audi} alt="..." /></div>
        <div className="logo2 col" data-aos="fade-right" data-aos-offset="300"><img className="chevrolet"  src={chevroloet} alt="..." /></div>
        <div className="logo3 col" data-aos="fade-right" data-aos-offset="300"><img className="lexsus" src={lexsus} alt="..." /></div>
        <div className="logo4 col"data-aos="fade-left" data-aos-offset="300"><img className="tayota" src={tayota} alt="..." /></div>
        <div className="logo5 col"data-aos="fade-left" data-aos-offset="300"><img className="tesla"   src={tesla} alt="..." /></div>
        <div className="logo6 col"data-aos="fade-left" data-aos-offset="300"><img className="Bmws"   src={Bmw} alt="..." /></div>
      </div>
      <div className=" position-absolute" style={{"marginTop":"10rem"}}>
      </div>
      </div>
  );
}
