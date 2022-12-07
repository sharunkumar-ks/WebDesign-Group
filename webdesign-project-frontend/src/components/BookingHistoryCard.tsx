/* eslint-disable @next/next/no-img-element */
import type { BookedTimeSlot, Location, Space, TimeSlot } from "@prisma/client";
import Link from "next/link"
// @filename: client.ts
import type { inferRouterInputs, inferRouterOutputs } from '@trpc/server';
import { AppRouter } from "../server/trpc/router/_app";

type RouterInput = inferRouterInputs<AppRouter>;
type RouterOutput = inferRouterOutputs<AppRouter>;

type HistoryOutput = RouterOutput["catalog"]["getBookingsOfUser"]["spaces"]

type Unpacked<T> = T extends (infer U)[] ? U : T;

type BookingHistoryProps = {
    image: string;
    history: Unpacked<HistoryOutput>
}
const mystyle = {
    height: "150px",
    width: "235px"
};

const BookingHistoryCard = (props: BookingHistoryProps) =>

    <div className="container card flex-row flex-wrap my-3">
        <div className="card-header border-0">
            <img src={props.image} style={mystyle} alt="" />
        </div>
        <div className="card-block px-2">
            <h4 className="card-title">{props.history.space.title}</h4>
            <h6 className="card-text">{props.history.space.description}</h6>
            {/* <a href="#" className="btn btn-primary">BUTTON</a> */}
        </div>
    </div>

export default BookingHistoryCard