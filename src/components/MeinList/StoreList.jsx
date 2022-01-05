import Blog from "../img/Blog.jpg";
import Blog1 from "../img/Blog1.jpg";
import Blog2 from "../img/Blog2.jpg";
import Arrow from "../img/arrow.svg"
import "../style/StoreList.css";

export default function StoreList() {

  return (
    <div style={{ background: "#f7f5f5", marginTop: "13rem", height: "50rem" }}>
      <div className="py-5 text-center" id="Stories">
        <h1 data-aos="fade-down" data-aos-offset="300" className="store">Read Our Stories</h1>
      </div>
      <div className="my-5"  id="StoreList">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div data-aos="fade-up" data-aos-offset="300" className="col">
            <div className=" cardimgm card h-100 border-0">
              <img src={Blog} className="imgm card-img-top w-100" alt="..." />
              <div className="card-body">
              <button
                  className="btn storebtn border-0 text-white justify-content-center text-center">
                  Togs
                </button>
                <h5 className="card-title">
                  Start a blog to reach your creative peak
                </h5>
                <p className="card-text">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
                <h6 className="moriem mt-lg-5">Find Out Moreim <img src={Arrow} alt="" /></h6>
              </div>
            </div>
          </div>
          <div data-aos="fade" data-aos-offset="300" className="col">
            <div className="cardimgm card h-100 border-0">
              <img src={Blog1} className="imgm card-img-top" alt="..." />
              <div className="card-body">
                <button
                  className="btn storebtn border-0 text-white justify-content-center text-center">
                  Togs
                </button>
                <h5 className="card-title">
                  Starting your traveling blog with Vasco
                </h5>
                <p className="card-text">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
                <h6 className="moriem mt-lg-5">Find Out Moreim <img src={Arrow} alt="" /></h6>
              </div>
            </div>
          </div>
          <div data-aos="fade-down" data-aos-offset="300" className="col">
            <div className="cardimgm card h-100 border-0">
            <img src={Blog2} className="imgm card-img-top" alt="..." />
              <div className="card-body">
                <button
                  className="btn storebtn border-0 text-white justify-content-center text-center"
              
                >
                  Togs
                </button>
                <h5 className="card-title">Caring is the new marketing Hyundai</h5>
                <p className="card-text">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
                <h6 className="moriem mt-lg-5">Find Out Moreim <img src={Arrow} alt="" /></h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
