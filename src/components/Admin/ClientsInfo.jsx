import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../MeinList/Loader";



export default function ClientsInfo(props) {
  const [info, setInfo] = useState([]);
  const infoID = props.match.params.id;

  useEffect(() => {;
    getCarsInfo()
    //eslint-disable-next-line
  }, [infoID]);

  const getCarsInfo = async () => {
    const response = await fetch(`https://cars-vinture.herokuapp.com/${infoID}`);
    const data = await response.json();
    return setInfo(data);
  };
  


  const deleteCart = async() => {
    await fetch(`https://cars-vinture.herokuapp.com/${infoID}`, {
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
        <Link to="/dashbort" className="btn bg-primary">
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
          <div className="card-body">
            <table className="table table-hove=">
              <thead>
                <tr className="text-dark row">
                  <th className="col">User Image</th>
                  <th className="col">User Name</th>
                  <th className="col">User Email</th>
                  <th className="col">location</th>
                </tr>
              </thead>
              <tbody>
                    <tr className="row">
                      <td className="col">  <a className="d-flex align-items-center "
                                href="#!"  
                                id="navbarDropdownMenuLink"
                                aria-expanded="false">
                                <img
                                src={info.userImg}
                                className="rounded-circle bg-info"
                                height="45"
                                alt=""
                                />
                            </a></td>             
                      <td className="col">{info.FirstName}</td>             
                      <td className="col">{info.UserEmail}</td>
                      <td className="col">{info.location}</td>
                    </tr>
              </tbody>
            </table>
            <table className="table table-hove=">
              <thead>
                <tr className="text-dark row">
                  <th className="col">Product up Date</th>
                  <th className="col">Product of Date</th>
                  <th className="col">Order time</th>
                </tr>
              </thead>
              <tbody>
                    <tr className="row">
                      <td className="col">{info.upDate}</td>             
                      <td className="col">{info.ofDate}</td>             
                      <td className="col">{info.year}/{info.month}/{info.Data}  {info.hour}:{info.minutes}</td>
                    </tr>
              </tbody>
            </table>
            <div className=" text-center justify-content-cneter wf-bold">{info.UserMessag}</div>
        </div>
{/*           <div className="container text-center ">
            <img className="w-50" src={info.Userpicture} alt="" />
            
            <h3>{info.FirstName}</h3>
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
          </div> */}
        </div>
      )}
    </div>
  );
}