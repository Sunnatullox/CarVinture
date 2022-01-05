import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../MeinList/Loader";



export default function Carouselinfo(props) {
  const [info, setInfo] = useState([]);
  const infoID = props.match.params.id;

  useEffect(() => {
    getCarsInfo()
    //eslint-disable-next-line
  }, [infoID]);



  const getCarsInfo = async () => {
    const response = await fetch(`http://localhost:5000/cars/${infoID}`);
    const data = await response.json();
    return setInfo(data);
  };
  


  const deleteCart = async() => {
    await fetch(`http://localhost:5000/cars/${infoID}`, {
        method: "DELETE",
        headers:{"Content-Type":"application/json"
      },
      body: JSON.stringify(info),
    });
    props.history.push("/product")
};



  

  return (
    <div>
      <div className="navbar">
        <Link to="/product" className="btn bg-primary">
          {" "}
          <span
            className="carousel-control-prev-icon fs-5"
            aria-hidden="true"
          ></span>
        </Link>
      </div>
      <div className="text-end" style={{top:"1rem"}}>
        <Link onClick={deleteCart} className="btn btn-danger">
          <i  className="fas fa-trash fs-2 text-black"></i>
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