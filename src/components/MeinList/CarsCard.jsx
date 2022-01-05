import { Link } from "react-router-dom";
import "../style/carsCard.css";
import Chesk from "../img/check.svg";
import Slider from "react-slick";
import { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CarsCard({ cars,aos , aos_offset}) {

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
      <h1  data-aos="flip-down" data-aos-offset="300" className=" fature_cars">
        {" "}
        Our Featured Cars
      </h1>
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
          {cars.map((car, id) => (
            <div className="col cardshadow" key={id} data-aos={aos} data-aos-offset={aos_offset}>
            <div className=" card h-100 carcard" >
              <img
                src={car.image}
                className="carimg card-img-top m-lg-5 no-repeat carimg"
                alt="..."
              />
              <div className="card-body">
                <h4 className="card-title">{car.title}</h4>
                <p className="card-text d-flex">
                  <img src={Chesk} alt="..." /> {car.airbug}
                </p>
                <p className="card-text d-flex">
                  <img src={Chesk} alt="..." /> {car.system}
                </p>
                <p className="card-text d-flex">
                  <img src={Chesk} alt="..." />
                  {car.sunroof}{" "}
                </p>
                <Link to={`/userInfo/${id}`} className="btn btn-primary">
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
