import { Link } from "react-router-dom";
import "./style/Footer.css"

export default function Footer() {
  return (

  
          <section className="text-center text-lg-start text-dark"
          style={{"background-color": "#ECEFF1"}}>
            <div className="container text-center text-md-start ">
              <div className="row">
                <div className="col-md-2 col-lg-4 col-xl-3 mx-auto my-5">
                  <h6 className="fw-bold company_name">CarVenture</h6>
                  <br
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{"width": "60px;", "background-color": "#7c4dff;", "height": "2px"}}
                  />
                  <p>
                    Here you can use rows and columns to organize your footer
                    content. Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit.
                  </p>
                </div>
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto my-5">
                  <h6 className="">Company</h6>
                  <br
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{"width": "60px;", "background-color": "#7c4dff;", "height": "2px"}}
                  />
                  <p>
                    <Link to="#!" className="text-dark">
                      MDBootstrap
                    </Link>
                  </p>
                  <p>
                    <Link to="#!" className="text-dark">
                      MDWordPress
                    </Link>
                  </p>
                  <p>
                    <Link to="#!" className="text-dark">
                      BrandFlow
                    </Link>
                  </p>
                  <p>
                    <Link to="#!" className="text-dark">
                      Bootstrap Angular
                    </Link>
                  </p>
                </div>
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto my-5">
                  <h6 className="">Features</h6>
                  <br
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{"width": "60px;", "background-color": "#7c4dff;", "height": "2px"}}
                  />
                  <p>
                    <Link to="#!" className="text-dark">
                      Your Account
                    </Link>
                  </p>
                  <p>
                    <Link to="#!" className="text-dark">
                      Become an Affiliate
                    </Link>
                  </p>
                  <p>
                    <Link to="#!" className="text-dark">
                      Shipping Rates
                    </Link>
                  </p>
                  <p>
                    <Link to="#!" className="text-dark">
                      Help
                    </Link>
                  </p>
                </div>
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto my-5">
                  <h6 className="">Contact Us</h6>
                  <br
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{"width": "60px;", "background-color": "#7c4dff;", "height": "2px"}}
                  />
                  <p>
                    <Link to="#!" className="text-dark">
                      Your Account
                    </Link>
                  </p>
                  <p>
                    <Link to="#!" className="text-dark">
                      Become an Affiliate
                    </Link>
                  </p>
                  <p>
                    <Link to="#!" className="text-dark">
                      Shipping Rates
                    </Link>
                  </p>
                  <p>
                    <Link to="#!" className="text-dark">
                      Help
                    </Link>
                  </p>
                </div>
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 my-5">
                  <h6 className="">Get deals and discounts</h6>
                  <br
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{"width":"60px","background-color":"#7c4dff","height:": "2px"}}
                  />
                  <p>
                     Subscribe to our newsletter
                  </p>
                    <input type="text" className="form-control" placeholder="Email" />
                </div>
              </div>
            </div>
          <div
            className="text-center p-3"
            style={{"background-color": "rgba(0, 0, 0, 0.2)"}}
          >
            © {new Date().getFullYear()}<></> {new Date().getMonth()}<></> {new Date().getDate()} Copyright:
            <Link className="text-dark" to="https://mdbootstrap.com/">
             <></>  Car Rental
            </Link>
          </div>
          </section>
  );
}
