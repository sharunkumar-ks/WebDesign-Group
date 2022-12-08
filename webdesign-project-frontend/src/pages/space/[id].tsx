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

    function handleBookButton(e: React.FormEvent<HTMLInputElement>) {
        console.log({ date, timeSlot, hours })

        if (!date || !timeSlot || !hours) {
            alert("Select the details")
            return e.preventDefault();
        }

    }

    return <>
        <div className="card container my-5">
            <img src="../carousel-2.png" className="card-img-top img-thumbnail" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{data?.space?.title}</h5>
                <p className="card-text">{data?.space?.description}</p>

            </div>

            <div className="d-flex">
                <DropdownButton
                    title={date ? date : "Select Date"}
                    id="dropdown-menu-align-right"
                    onSelect={handleSelectDate}
                >
                    <Dropdown.Item eventKey="option-1">option-1</Dropdown.Item>
                    <Dropdown.Item eventKey="option-2">option-2</Dropdown.Item>
                    <Dropdown.Item eventKey="option-3">option 3</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="some link">some link</Dropdown.Item>
                </DropdownButton>&nbsp;
                <DropdownButton
                    title={timeSlot ? timeSlot : "Select Time Slot"}
                    id="dropdown-menu-align-right"
                    onSelect={handleSelectTimeSlot}
                >
                    {[1, 2, 3, 4, 5].map(item => <Dropdown.Item key={item} eventKey={item}>{item}</Dropdown.Item>)}

                </DropdownButton>&nbsp;
                <Link className="btn btn-primary" href={`/payment/${id}`} onClick={handleBookButton}>Book</Link>
            </div>
            <br />
        </div>

    </>
}

export default OfficeSpace
