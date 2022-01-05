import { Link } from "react-router-dom"


export default function SearchBox() {
    return (
        <div className="row d-flex searching">
              <div className="col-3 seareching">
                <label for="inputState" className="form-label">PICK UP LOCATION</label>
                <select id="inputState" className="form-select">
                <option >Select Location</option>
                <option>...</option>
                </select>
            </div>
            <div className="col-3 seareching">
                <label for="inputState" className="form-label">PICK UP DATE</label>
                <select id="inputState" className="form-select">
                <option >Select Date</option>
                <option>...</option>
                </select>
            </div>
            <div className="col-3 seareching">
                <label for="inputState" className="form-label">PICK UP DATE</label>
                <select id="inputState" className="form-select">
                <option >Select Date</option>
                <option>...</option>
                </select>
            </div>
            <div className="col">
                <Link className="btn btn-primary btnsw">Search for Cars</Link>
            </div>
        </div>
    )
}
