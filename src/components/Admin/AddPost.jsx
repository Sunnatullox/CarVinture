import React, { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function AddPost() {
  const [title, setTite] = useState("");
  const [image, setImage] = useState("");
  const [discription, setDiscription] = useState("");
  const [airbug, setAirbug] = useState("");
  const [system, setSystem] = useState("");
  const [sunroof, setSunroof] = useState("");
  const history = useHistory();


  const hendelSubmit = (e) => {
    e.preventDefault();

    const addCard = { title, image, discription, airbug, system, sunroof,};
    fetch("http://localhost:5000/cars", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ ...addCard, updated: new Date(), id:Date.now() }),
    })
      .then(() => {
        console.log("Add card");
        history.push("/product");
      })
      .catch((error) => console.log(error));

    setTite("");
    image("");
    setDiscription("");
    setAirbug("");
    setSystem("");
    setSunroof("");
  };

  return (
    <div className=" position-absolute">
      <button
        type="button"
        className="btn btn-primary "
        data-bs-toggle="modal"
        data-bs-target="#exampleModals"
      >
        AddPosts
      </button>

      <form
        className="modal fade"
        id="exampleModals"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-dark" id="exampleModalLabel">
                Addto New Card Carousel
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-2">
                  <label
                    for="recipient-Title"
                    className="col-form-label text-dark"
                  >
                    Add Title:
                  </label>
                  <input
                    type="text"
                    value={title}
                    className="form-control"
                    onChange={(e) => setTite(e.target.value)}
                  />
                </div>
                <label
                  for="recipient-Title"
                  className="col-form-label text-dark"
                >
                  Add Image Url
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                />
                <div className="mb-2">
                  <label
                    for="recipient-Title"
                    className="col-form-label text-dark"
                  >
                    selected System:
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    value={airbug}
                    onChange={(e) => setAirbug(e.target.value)}
                  >
                    <option>selected system conditioners</option>
                    <option value="No_airbug">No air conditioners</option>
                    <option value="Ect_airbug">Air conditioners</option>
                  </select>
                  <br />
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    value={system}
                    onChange={(e) => setSystem(e.target.value)}
                  >
                    <option>selected system Bluetooth</option>
                    <option value="No_Bluetooth">No Bluetooth</option>
                    <option value="Est_Bluetooth">
                      Bluetooth Sound System
                    </option>
                  </select>
                  <br />
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    value={sunroof}
                    onChange={(e) => setSunroof(e.target.value)}
                  >
                    <option>Selected sunroof</option>
                    <option value="No_Sunroof">No Sunroof</option>
                    <option value="Ect_Sunroof">Sunroof Available</option>
                  </select>
                </div>
              </form>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  onClick={hendelSubmit}
                  data-bs-dismiss="modal"
                  type="button"
                  className="btn btn-primary"
                  disabled={!image}
                >
                  Send message
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
