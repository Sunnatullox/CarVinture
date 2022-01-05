import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

export default function AddproductCar() {
  const [image, setCarUrl] = useState("");
  const [title, setCarTitle] = useState("");
  const [price, setCarPrice] = useState("");
  const [model, setCarModel] = useState("");
  const [discription, setCarDisciption] = useState("");
  const history = useHistory();

  const AddCars = { image, title, price, model, discription };

  const AddProductCarshendel = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/Car", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ ...AddCars, updated: new Date() }),
    })
      .then((add) => {
        console.log(add, "Add Product Cars");
        history.push("/product");
      })
      .catch((err) => {
        console.log(err, "Error Add Product Cars");
      });
    setCarUrl("");
    setCarTitle("");
    setCarPrice("");
    setCarModel("");
    setCarDisciption("");
  };
  return (
    <Section>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        data-bs-whatever="@mdo"
      >
        Addto Cars
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-dark" id="exampleModalLabel">
                New Cars
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
                <div className="my-2">
                  <input
                    type="text"
                    value={image}
                    onChange={(e) => setCarUrl(e.target.value)}
                    className="form-control"
                    placeholder="Image UREL:"
                    id="recipient-name"
                  />
                </div>
                <div className="my-2">
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setCarTitle(e.target.value)}
                    placeholder="Car Title:"
                    className="form-control"
                    id="recipient-name"
                  />
                </div>
                <div className="my-2">
                  <input
                    type="text"
                    value={price}
                    onChange={(e) => setCarPrice(e.target.value)}
                    placeholder="Car Price:"
                    className="form-control"
                    id="recipient-name"
                  />
                </div>
                <div className="my-2">
                  <input
                    type="text"
                    value={model}
                    onChange={(e) => setCarModel(e.target.value)}
                    placeholder="Car Model:"
                    className="form-control"
                    id="recipient-name"
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    value={discription}
                    onChange={(e) => setCarDisciption(e.target.value)}
                    placeholder="Car Disciption:"
                    className="form-control"
                    id="message-text"
                  ></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>

              <button
                onClick={AddProductCarshendel}
                type="button"
                className="btn btn-primary"
              >
                Send message
              </button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section``;
