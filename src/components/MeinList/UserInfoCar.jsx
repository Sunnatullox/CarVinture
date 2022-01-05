import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../MeinList/Loader";



export default function  UserInfoCar(props) {
  const [info, setInfo] = useState([]);

  const infoID = props.match.params.id;

  useEffect(() => {
    getInfo();
    //eslint-disable-next-line
  }, [info]);

  const getInfo = async () => {
    const response = await fetch(`https://cars-vinture.herokuapp.com/cars/${infoID}`);
    const data = await response.json();
    return setInfo(data);
  };
   return (
    <div>
      <div className="navbar">
        <Link to="/" className="btn bg-primary">
          {" "}
          <span
            className="carousel-control-prev-icon fs-5"
            aria-hidden="true"
          ></span>
        </Link>
      </div>

      <h1 className=" text-center">Infarmation</h1>
      {info.length ? (
        <Loader />
      ) : (
        <div className=" justify-content-center">
          <div className="container text-center ">
            <img className="w-50" src={info.image} alt="" />
            <h3>{info.title}</h3>
            <p>{info.discription}</p>
            <div className="d-flex justify-content-center">
              <div className="card w-25 h-100 center no-repeat m-4">
                <img src={info.img1} alt="" />
              </div>
              <div className="card w-25 h-100 center no-repeat m-4">
                <img src={info.img2} alt="" />
              </div>
              <div className="card w-25 h-100 center no-repeat m-4">
                <img src={info.img3} alt="" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}