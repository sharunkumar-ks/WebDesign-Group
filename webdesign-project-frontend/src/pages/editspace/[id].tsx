import type { NextPage } from "next";
import { useRouter } from "next/router";
import { trpc } from "../../utils/trpc";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const OfficeSpace: NextPage = () => {

    const router = useRouter();

    const { id } = router.query;

    const id_string: string = id?.toString() || ""

    const { data } = trpc.catalog.getSpaceById.useQuery({ id: id_string })

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
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
                    <Form.Control type="text" defaultValue={data?.space?.title} />
                    {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" defaultValue={data?.space?.description} />
                </Form.Group>
            </Form></Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
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