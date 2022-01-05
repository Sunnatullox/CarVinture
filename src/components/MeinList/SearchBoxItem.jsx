import "../style/SearchBoxItem.css";
import { Link } from "react-router-dom";

export default function SearchBoxItem() {
  return (

    <div>

      <div id="Search" className="card text-center">
        <div className="py-5 Next text-white">
          <h1 data-aos="fade-right" data-aos-offset="300">Find Your Next Long</h1> 
          <h1 data-aos="fade-left" data-aos-offset="300" >Drive Now!</h1> 
        </div>
        <div className="SearchList" data-aos="fade-down" data-aos-offset="300">
        <div className="Sear">
          <div className="search">
            <h6>
              PICK UP LOCATION
            </h6>
            <select className="form-select" aria-label="Default select example">
              <option className=" text-muted">Select Location</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <div className="search">
            <h6>
              PICK UP DATE
            </h6>
            <select className="form-select" aria-label="Default select example">
              <option className=" text-muted">Select Date</option>
              <option value="">1</option>
              <option value="">3</option>
              <option value="">4</option>
            </select>
          </div>
          <div className="search">
            <h6>
            PICK UP DATE
            </h6>
            <select className="form-select" aria-label="Default select example">
              <option className=" text-muted">Select Date</option>
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
            </select>
          </div>
          <div className="searchbtns" style={{ marginTop: "1.7rem" }}>
            <Link to="/" className="carbtn btn bg-primary text-white">
              Search for Cars
            </Link>
          </div>
        </div>
        </div>
      </div>
        </div>
  );
}
