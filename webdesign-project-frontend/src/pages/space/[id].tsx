/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { useRouter } from "next/router";
import Link from "next/link"
import { trpc } from "../../utils/trpc";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import { useEffect, useState } from "react";
import type { TimeSlot } from "@prisma/client";
import dateFormat, { masks } from "dateformat";

const OfficeSpace: NextPage = () => {

    const router = useRouter();

    const { id } = router.query;

    const id_string: string = id?.toString() || ""

    const { data } = trpc.catalog.getSpaceById.useQuery({ id: id_string })

    const [date, setDate] = useState(null)
    const [timeSlot, setTimeSlot] = useState<TimeSlot>();
    const [hours, setHours] = useState(0)
    const [filteredTimeSlots, setFilteredTimeSlots] = useState([] as TimeSlot[])

    const handleSelectDate = (e: any) => {
        console.log(e);
        setDate(e)
    }

    const handleSelectHours = (e: any) => {
        console.log(e);
        setHours(e)
    }

    const timeSlots = trpc.catalog.getTimeSlots.useQuery()

    console.log({ timeSlots: timeSlots.data })

    const dateSet = new Set<string>()

    timeSlots.data?.timeSlots.forEach(time => {
        dateSet.add(time?.date?.toDateString())
    })

    console.log({ dateSet })

    useEffect(() => {
        if (!date) {
            return setFilteredTimeSlots([])
        }

        setFilteredTimeSlots(timeSlots.data?.timeSlots.filter(time => time.date.toDateString() == date) as TimeSlot[])
    }, [date, timeSlots.data?.timeSlots])

    function formatTimeSlotAsTime(timeSlot: TimeSlot): string {
        const date = timeSlot.date

        return dateFormat(date, "hh:MM TT")
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
                <p className="card-text">{data?.space?.location.name}</p>

            </div>

            <div className="d-flex">
                <DropdownButton
                    title={date ? date : "Select Date"}
                    id="dropdown-menu-align-right"
                    onSelect={handleSelectDate}
                >
                    {[...dateSet].map((date, idx) => {
                        return <Dropdown.Item key={idx} eventKey={date}>{date}</Dropdown.Item>
                    })}

                </DropdownButton>&nbsp;
                <DropdownButton
                    title={timeSlot ? formatTimeSlotAsTime(timeSlot) : "Select Time Slot"}
                    id="dropdown-menu-align-right"
                >
                    {filteredTimeSlots ? filteredTimeSlots.map((ts, idx) => {
                        return <Dropdown.Item key={idx} eventKey={ts.date.toString()} onClick={() => setTimeSlot(ts)}>{formatTimeSlotAsTime(ts)}</Dropdown.Item>
                    }) : <></>}
                </DropdownButton>&nbsp;
                <DropdownButton
                    title={hours ? hours : "Select number of hours"}
                    id="dropdown-menu-align-right"
                    onSelect={handleSelectHours}
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