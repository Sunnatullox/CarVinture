import React, { useState } from "react";
import "../../style/ContactUs.css";
import { AdresUzb } from "./AdresUzb";
import { useAuth0 } from "@auth0/auth0-react";

export default function ContactUs() {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [UserPhone, setUserPhone] = useState("");
  const [UserEmail, setUserEmail] = useState("");
  const [UserMessag, setUserMessag] = useState("");
  const [location, setLocation] = useState("");
  const [upDate, setUpDate] = useState();
  const [ofDate, setOfDate] = useState();
  const { user } = useAuth0();
  
      const addMesseg = {
        FirstName,
        LastName,
        UserPhone,
        UserEmail,
        UserMessag,
        location,
        upDate,
        ofDate,
      };
          localStorage.setItem("img",user.picture)
          const userImg = localStorage.getItem("img")
  const Messeghendel = (e) => {
    e.preventDefault();
    fetch("https://cars-vinture.herokuapp.com/messeges", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        ...addMesseg,
        userImg,
        Data: new Date().getDate(),
        month: new Date().getMonth(),
        year: new Date().getFullYear(),
        hour: new Date().getHours(),
        minutes: new Date().getMinutes(),
      }),
    })
      .then(() => console.log("AddMesseg"))
      .catch((err) => console.log(err, "error"));

    setFirstName("");
    setLastName("");
    setUserPhone("");
    setUserEmail("");
    setUserMessag("");
    setLocation("Select your location");
    setUpDate("");
    setOfDate("");
  };

  return (
    <div className=" messeges container py-5" id="messeg">
      <div>
        <div className="mt-4 ">
          <h2 className=" fw-bold">Contact Us</h2>
        </div>
        <div className="mt-5">
          <p>You have any questions or need additional information?</p>
          <p className="fw-bold">
            Address: Car|Rental /Angor Taraqiyo 9. / Uzb Termez, Angor 199200
          </p>
        </div>
      </div>
      <form className="row" onSubmit={Messeghendel}>
        <div className="col-6">
          <input
            type="text"
            className="form-control"
            id="validationServerUsername"
            required
            placeholder="First name:"
            value={FirstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="col-6">
          <input
            type="text"
            className="form-control "
            id="validationServer03"
            required
            placeholder="Last name:"
            value={LastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="col-6">
          <input
            type="number"
            className="form-control  "
            id="validationServerUsername"
            required
            placeholder="Telephone:"
            style={{ marginTop: "1rem" }}
            value={UserPhone}
            onChange={(e) => setUserPhone(e.target.value)}
          />
        </div>
        <div className="col-6">
          <input
            type="email"
            className="form-control "
            id="validationServer03"
            required
            placeholder="Email:"
            style={{ marginTop: "1rem" }}
            value={UserEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
        </div>

        <div className="col-6" style={{ marginTop: "1rem" }}>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            class="form-select"
            aria-label="Default select example"
          >
            <option >Select your location</option>
            {AdresUzb.map((adres, index) => {
              return (
                <option key={index} value={adres.name}>
                  {adres.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="col-3" style={{ marginTop: "1rem" }}>
          <input
            class="form-control w-100"
            type="date"
            placeholder="Default input"
            value={upDate}
            onChange={(e) => setUpDate(e.target.value)}
            aria-label="default input example"
          ></input>
          <label className="fw-bold" style={{ fontSize: "14px",marginTop:"-1rem"  }}>
            Picking Up Date
          </label>
        </div>
        <div className="col-3" style={{ marginTop: "1rem" }}>
          <input
            class="form-control w-100"
            type="date"
            placeholder="Default input"
            value={ofDate}
            onChange={(e) => setOfDate(e.target.value)}
            aria-label="default input example"
          ></input>
          <label className="fw-bold" style={{ fontSize: "14px", marginTop:"-1rem" }}>
            Dropping Off Date
          </label>
        </div>
        <div className="mb-3">
          <textarea
            className="form-control my-3"
            placeholder="Messege:"
            id="exampleFormControlTextarea1"
            rows="3"
            value={UserMessag}
            onChange={(e) => setUserMessag(e.target.value)}
          ></textarea>
        </div>
        <div className="col-12">
          <button className="btn btn-primary" type="submit">
            Submit form
          </button>
        </div>
      </form>
    </div>
  );
}
