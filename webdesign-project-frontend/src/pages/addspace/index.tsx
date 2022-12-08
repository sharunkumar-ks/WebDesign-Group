import type { NextPage } from "next";
import { trpc } from "../../utils/trpc";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import { useEffect, useState } from "react";
import { Location } from "@prisma/client";

const AddOfficeSpace: NextPage = () => {

    const locations = trpc.catalog.getLocations.useQuery().data?.locations;

    const [selectedItem, setSelectedItem] = useState<Location>();

    return <div className="container">
        <br />
        <h1>Add new workspace</h1>
        <br />
        <form className="row g-3">
            <div className="col-md-8">
                {/* <label for="inputEmail4" class="form-label">Email</label> */}
                <input type="text" className="form-control" id="inputtext4" placeholder="Enter Name" />
                {/* <p className="text mb-1">Name</p> */}
            </div>

            <div className="col-md-8">
                {/* <label for="inputAddress" class="form-label">Address</label> */}
                <input type="text" className="form-control" id="inputAddress" placeholder="Enter Description" />
                {/* <p className="text mb-1">Description</p> */}
            </div>
            {/* <DropdownButton
                options={categories}
                onChange={handleChange}
                name="category"
                id="search-select"
            ></DropdownButton> */}

            <div className="col-md-8">
                <div>
                    <div><span>Select Location</span></div>
                    <Dropdown>
                        <Dropdown.Toggle variant="success">{selectedItem ? selectedItem.name : "Select Location"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {locations?.map((item, idx) => (
                                <Dropdown.Item key={idx} onClick={(e) => setSelectedItem(item)}>
                                    {item.name}
                                </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown><br />
                </div>
            </div>

            {/* <div className="col-md-4">
                
                <select id="inputState" className="form-select">
                    <option selected>Choose...</option>
                    <option>...</option>
                </select>
                <p className="text mb-1">Choose...</p>
            </div> */}
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
    </div>
}

export default AddOfficeSpace