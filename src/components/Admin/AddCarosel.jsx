import { Link } from "react-router-dom";
import "../style/carsCard.css";
import Chesk from "../img/check.svg";
import Slider from "react-slick";
import { useEffect, useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AddPost from './AddPost'

export default function AddCarosel() {

    const [cars, setCars] = useState([])
    

    useEffect (()=> {       
         getCars();
    },[])

    const getCars = async()=> {
        const response = await fetch("http://localhost:5000/cars");
        const data =  await response.json();
        setCars(data)
    }

  const sliderRef = useRef(null)
 
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div id="cars">
      <h1  data-aos="flip-down" data-aos-offset="300" className=" fature_cars" style={{color:"#ffc107"}}>
        {" "}
        Our Featured Cars
      </h1>
          <AddPost />
      <div className="d-flex justify-content-end">
        <div >
          {" "}
          <Link
            className="carousel-control border bg-primary"
            type="button"

            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
              onClick={()  => sliderRef.current.slickPrev()}
            ></span>
            <span className="visually-hidden">Previous</span>
          </Link>
        </div>
        <div>
          <Link
            className="carousel-control border bg-primary"
            type="button"
            data-bs-slide="next"
            onClick={()  => sliderRef.current.slickNext()}
          >
            <span
              className="carousel-control-next-icon  "
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </Link>
        </div>
      </div>
      <div className="row carouselcar">
        <Slider  ref={sliderRef}{...settings}>
          {cars.map((cars, id) => (
            <div className="col cardshadow" key={id}>
            <div className=" card h-100 carcard" >
              <img
                src={cars.image}
                className="carimg card-img-top m-lg-5 no-repeat carimg"
                alt="..."
              />
              <div className="card-body">
                <h4 className="card-title text-dark">{cars.title}</h4>
                <p className="card-text d-flex text-dark">
                  <img src={Chesk} alt="..." /> {cars.airbug}
                </p>
                <p className="card-text d-flex text-dark">
                  <img src={Chesk} alt="..." /> {cars.system}
                </p>
                <p className="card-text d-flex text-dark">
                  <img src={Chesk} alt="..." />
                  {cars.sunroof}{" "}
                </p>
                <Link to={`/carouselinfo/${cars.id}`} className="btn btn-primary">
                  Rent Now
                </Link>
              </div>
            </div>
          </div>
          ))}
        </Slider>
          </div>
    </div>
  );
}
