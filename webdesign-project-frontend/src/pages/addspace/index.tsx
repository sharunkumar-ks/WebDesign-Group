import type { NextPage } from "next";
import { trpc } from "../../utils/trpc";
import Dropdown from 'react-bootstrap/Dropdown'
import { useState } from "react";
import type { Location } from "@prisma/client";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


type ComponentState = {
    showModal: boolean;
    newLocationName: string;
}

const AddOfficeSpace: NextPage = () => {

    const locations = trpc.catalog.getLocations.useQuery();
    // const ctx = trpc.useContext();


    const { mutate } = trpc.catalog.addLocation.useMutation({
        onSuccess: () => {
            locations.refetch();

            setState({ ...state, showModal: false, newLocationName: "" });
        }
    })

    const [selectedItem, setSelectedItem] = useState<Location>();

    const [state, setState] = useState<ComponentState>({
        showModal: false,
        newLocationName: "",
    });

    const handleModelOkClick = async () => {
        setState({ ...state, showModal: false });
        mutate({ name: state.newLocationName })
    }

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
                            {locations.data?.locations?.map((item, idx) => (
                                <Dropdown.Item key={idx} onClick={() => setSelectedItem(item)}>
                                    {item.name}
                                </Dropdown.Item>
                            ))}
                            <Dropdown.Divider />
                            <Dropdown.Item onClick={() => setState({ ...state, showModal: true })}>Add New Location</Dropdown.Item>
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

        <Modal show={state.showModal} onHide={() => { setState({ ...state, showModal: false }) }}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Location Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Location Name"
                            value={state.newLocationName}
                            onChange={(e) => setState({ ...state, newLocationName: e.target.value })}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => { setState({ ...state, showModal: false }) }}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleModelOkClick}>
                    Ok
                </Button>
            </Modal.Footer>
        </Modal>
    </div>
}

export default AddOfficeSpace