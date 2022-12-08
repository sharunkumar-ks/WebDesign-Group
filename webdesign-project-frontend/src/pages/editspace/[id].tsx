import type { NextPage } from "next";
import { useRouter } from "next/router";
import { trpc } from "../../utils/trpc";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Location } from "@prisma/client";
import Dropdown from 'react-bootstrap/Dropdown'


const OfficeSpace: NextPage = () => {

    const locations = trpc.catalog.getLocations.useQuery();

    type ComponentState = {
        showModal: boolean;
        newLocationName: string;
        selectedLocation: Location | null;
        name: string;
        description: string;
    }

    const router = useRouter();

    const { id } = router.query;

    const id_string: string = id?.toString() || ""

    const { data, refetch: refetchSpace } = trpc.catalog.getSpaceById.useQuery({ id: id_string })

    const [show, setShow] = useState(false);

    const { mutate: editSpace } = trpc.catalog.editSpace.useMutation({
        onSuccess: (params) => {
            refetchSpace()
            // router.push(`/space/${params.id}`)
        }
    })

    const [state, setState] = useState<ComponentState>({
        showModal: false,
        newLocationName: "",
        selectedLocation: null,
        name: "",
        description: "",
    });

    const handleSaveChanges = async () => {
        editSpace({
            id: id_string,
            title: state.name,
            description: state.description,
            locationId: state.selectedLocation?.id + ""
        })
        setShow(false)
    }

    const handleClose = () => {
        setShow(false)
    };
    const handleShow = () => setShow(true);

    const [showRemove, setShowRemove] = useState(false);

    const handleCloseRemove = () => setShowRemove(false);
    const handleShowRemove = () => setShowRemove(true);

    return <>
        <div className="card container my-5">
            <img src="../carousel-2.png" className="card-img-top img-thumbnail" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{data?.space?.title}</h5>
                <p className="card-text">{data?.space?.description}</p>

            </div>

            <div className="d-flex">
                <Button variant="primary" onClick={handleShow}>
                    Edit
                </Button>
                &nbsp;
                <Button variant="primary" onClick={handleShowRemove}>
                    Remove
                </Button>
            </div>
            <br />
        </div>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body><Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" defaultValue={data?.space?.title} onChange={(e) => setState({ ...state, name: e.target.value })} />
                    {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" defaultValue={data?.space?.description} onChange={(e) => setState({ ...state, description: e.target.value })} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Location</Form.Label>
                    {/* <Form.Control type="text" defaultValue={data?.space?.location} onChange={(e) => setState({ ...state, description: e.target.value })} /> */}
                    <Dropdown>
                        <Dropdown.Toggle variant="success">{state.selectedLocation ? state.selectedLocation.name : "Select Location"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {locations.data?.locations?.map((item, idx) => (
                                <Dropdown.Item key={idx} onClick={() => {
                                    setState({ ...state, selectedLocation: item });
                                }
                                }>
                                    {item.name}
                                </Dropdown.Item>
                            ))}

                        </Dropdown.Menu>
                    </Dropdown>
                </Form.Group>
            </Form></Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button type="submit" variant="primary" onClick={handleSaveChanges}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>

        <Modal show={showRemove} onHide={handleCloseRemove}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Remove Details</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseRemove}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleCloseRemove}>
                    Ok
                </Button>
            </Modal.Footer>
        </Modal>

    </>
}

export default OfficeSpace