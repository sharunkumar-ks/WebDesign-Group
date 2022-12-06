import type { NextPage } from "next";
import { useRouter } from "next/router";
import Link from "next/link"
import { trpc } from "../../utils/trpc";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import { useState } from "react";

const OfficeSpace: NextPage = () => {

    const router = useRouter();

    const { id } = router.query;

    const id_string: string = id?.toString() || ""

    const { data } = trpc.catalog.getSpaceById.useQuery({ id: id_string })

    const [value, setValue] = useState(null);
    const handleSelect = (e: any) => {
        console.log(e);
        setValue(e)
    }

    return <>
        <div className="card container my-5">
            <img src="../carousel-2.png" className="card-img-top my-0" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{data?.space?.title}</h5>
                <p className="card-text">{data?.space?.description}</p>
                <DropdownButton
                    title={value ? value : "Select Time Slot"}
                    id="dropdown-menu-align-right"
                    onSelect={handleSelect}
                >
                    <Dropdown.Item eventKey="option-1">option-1</Dropdown.Item>
                    <Dropdown.Item eventKey="option-2">option-2</Dropdown.Item>
                    <Dropdown.Item eventKey="option-3">option 3</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="some link">some link</Dropdown.Item>
                </DropdownButton>
            </div>
            <Link className="btn btn-primary" href={`/payment/${id}`}>Book</Link>
        </div>

    </>
}

export default OfficeSpace