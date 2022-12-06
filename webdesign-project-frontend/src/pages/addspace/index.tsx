import type { NextPage } from "next";

const AddOfficeSpace: NextPage = () => {

    return <>
        <h1>Add new workspace</h1>
        <form className="row g-3">
            <div className="col-md-6">
                {/* <label for="inputEmail4" class="form-label">Email</label> */}
                <input type="text" className="form-control" id="inputtext4" />
                <p className="text mb-1">Name</p>
            </div>
            <div className="col-md-6">
                {/* <label for="inputPassword4" class="form-label">Password</label> */}
                <input type="email" className="form-control" id="inputEmail4" />
                <p className="text mb-1">Email</p>
            </div>
            <div className="col-12">
                {/* <label for="inputAddress" class="form-label">Address</label> */}
                <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                <p className="text mb-1">Address</p>
            </div>
            <div className="col-12">
                {/* <label for="inputAddress2" class="form-label">Address 2</label> */}
                <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                <p className="text mb-1">Address 2</p>
            </div>
            <div className="col-md-6">
                {/* <label for="inputCity" class="form-label">City</label> */}
                <input type="text" className="form-control" id="inputCity" />
                <p className="text mb-1">City</p>
            </div>
            {/* <div className="col-md-4">
                
                <select id="inputState" className="form-select">
                    <option selected>Choose...</option>
                    <option>...</option>
                </select>
                <p className="text mb-1">Choose...</p>
            </div> */}
            <div className="col-md-2">
                {/* <label for="inputZip" clasclassNames="form-label">Zip</label> */}
                <input type="text" className="form-control" id="inputZip" />
                <p className="text mb-1">Zip</p>
            </div>
            {/* <div className="col-12">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="gridCheck" />
                    <label className="form-check-label" for="gridCheck">
                            Check me out
                        </label>
                    <p className="text mb-1">Check me out</p>
                </div>
            </div> */}
            <div className="col-12">
                <button type="submit" className="btn btn-primary">Add</button>
            </div>
        </form>
    </>
}

export default AddOfficeSpace