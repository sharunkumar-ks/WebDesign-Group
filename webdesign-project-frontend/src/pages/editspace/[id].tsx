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

    const [date, setDate] = useState(null)
    const [timeSlot, setTimeSlot] = useState(null);
    const handleSelectTimeSlot = (e: any) => {
        console.log(e);
        setTimeSlot(e)
    }
    const handleSelectDate = (e: any) => {
        console.log(e);
        setDate(e)
    }

    return <>
        <div className="card container my-5">
            <img src="../carousel-2.png" className="card-img-top img-thumbnail" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{data?.space?.title}</h5>
                <p className="card-text">{data?.space?.description}</p>

            </div>

            <div className="d-flex">
                <Link className="btn btn-primary" href={"#"}>Edit</Link>&nbsp;
                <Link className="btn btn-primary" href={"#"}>Remove</Link>
            </div>
            <br />
        </div>

    </>
}

export default OfficeSpace