import React from "react";
import Bookmark from "../img/Bookmark.svg"
import Pin from "../img/Pin.svg"
import Shield from "../img/Shield.svg"
import "../style/AreaInfoList.css"

export default function AreaInfarmationList() {
  return (
    <div className="my-5" id="Info">
      <div className=" infoheadr text-md-center py-5">
        <h1 className="different" data-aos="slide-right" data-aos-offset="300">
          Why We Are Different
        </h1>
        <p  data-aos="slide-left" data-aos-offset="300" className=" text-muted">
          Amet minim mollit non deserunt ullamco est <br /> sit aliqua dolor do
          amet sint. <br /> Velit officia consequat duis enim velit mollit.
        </p>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4 text-md-center ">
        <div className="col"  data-aos="fade-right" data-aos-offset="300">
          <div className="card h-100 cardsAri">
            <img src={Bookmark} className="card-img-top ImgAri" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Easy Booking</h5>
              <p className="card-text">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit
              </p>
            </div>
          </div>
        </div>
        <div className="col" data-aos="fade-down" data-aos-offset="300">
          <div className="card h-100 cardsAri">
            <img src={Pin} className="card-img-top ImgAri" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Secure Payments</h5>
              <p className="card-text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
            </div>
          </div>
        </div>
        <div className="col" data-aos="fade-left" data-aos-offset="300">
          <div className="card h-100 cardsAri">
            <img src={Shield} className="card-img-top ImgAri" alt="..." />
            <div className="card-body">
              <h5 className="card-title">24/7 Tracking</h5>
              <p className="card-text">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}