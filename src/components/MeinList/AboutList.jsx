import I_img from "../img/img.jpg";
import "../style/AboutList.css";

export default function AboutList() {
  return (
    <div style={{"background":"#f7f5f5","height":"50rem", "marginTop":"13rem" }}>
      <div className=" text-md-center py-3"  id="Area">
        <h1 data-aos="fade-down" data-aos-offset="300" className="about">
          What do people say about us?
        </h1>
        <p data-aos="fade-up" data-aos-offset="300" className=" text-muted">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint.
          <br /> Velit officia consequat duis enim velit mollit.
        </p>
      </div>
      <div data-aos="fade-left" data-aos-offset="300" className="cardsabout row row-cols-md-2 my-5 justify-content-center">
      <div class="card h-100">
      <img src={I_img} class="card-img h-100 cover-empty center" alt="..." />

</div>
        <div data-aos="fade-right" data-aos-offset="300" className="card col-6 justify-content-center" style={{"background":"rgba(31, 69, 144, 1)","width":"35rem"}}>
          <h5 className=" container text-md-start text-white m-lg-5 abouts">
            “Amet minim mollit non deserunt ullamco <br />  est sit aliqua dolor
            do amet sint. Velit<br /> officia consequat duis enim velit mollit.{" "}
            <br /> Exercitation veniam consequat sunt <br /> nostrud amet. Amet
            minim mollit non <br /> deserunt ullamco est sit aliqua dolor {" "}
            <br />do amet sint. Velit officia consequat  <br />duis enim velit
            mollit. Exercitation  <br />veniam consequat sunt nostrud amet.“
          </h5>
          <div className="row container">
          <h1 className=" container col-6 "> </h1>
          <div className="col-3"></div>
          </div>
          <div className="row container">
          <h1 className=" container col-7" style={{"marginLeft":"3.2rem"}}>
            <h4 className="abou text-white">Hayitov Sunnatullox,<br/>  CEO at SpaceX</h4>
          </h1>
          <div className="col-5"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
