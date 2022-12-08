/* eslint-disable @next/next/no-img-element */
import dateFormat from "dateformat";
import type { RouterOutputs } from "../utils/trpc";
import type { Unpacked } from "../utils/typehelpers";

type HistoryOutput = RouterOutputs["catalog"]["getBookingsOfUser"]["spaces"]

type BookingHistoryProps = {
    image: string;
    history: Unpacked<HistoryOutput>
}
const mystyle = {
    height: "150px",
    width: "235px"
};

const BookingHistoryCard = (props: BookingHistoryProps) => {
    const toTime = new Date(props.history.timeSlot.date)

    toTime.setHours(toTime.getHours() + 1)

    return <div className="container card flex-row flex-wrap my-3">
        <div className="card-header border-0">
            <img src={props.image} style={mystyle} alt="" />
        </div>
        <div className="card-block px-2">
            <h4 className="card-title">{props.history.space.title}</h4>
            <h6 className="card-text">{props.history.space.description}</h6>
            <h6 className="card-text">{dateFormat(props.history.timeSlot.date, "hh:MM TT")} - {dateFormat(toTime, "hh:MM TT")}</h6>
        </div>
    </div>
}

export default BookingHistoryCard