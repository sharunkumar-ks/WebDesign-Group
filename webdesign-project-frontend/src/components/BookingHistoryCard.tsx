/* eslint-disable @next/next/no-img-element */
import type { Location, Space } from "@prisma/client";
import Link from "next/link"

// type BookingHistoryProps = {
//     image: string;
//     space: (Space & {
//         location: Location;
//     })
// }
const mystyle = {
    height: "150px",
    width: "235px"
};

const BookingHistoryCard = () =>

    <div className="container card flex-row flex-wrap my-3">
        <div className="card-header border-0">
            <img src="assets/img/demo-image-01.jpg" style={mystyle} alt="" />
        </div>
        <div className="card-block px-2">
            <h4 className="card-title">Title</h4>
            <p className="card-text">Description</p>
            {/* <a href="#" className="btn btn-primary">BUTTON</a> */}
        </div>
    </div>

export default BookingHistoryCard