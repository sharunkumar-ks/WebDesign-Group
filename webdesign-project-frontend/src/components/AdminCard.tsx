/* eslint-disable @next/next/no-img-element */
import type { Location, Space } from "@prisma/client";
import Link from "next/link";

type AdminCardProps = {
    image: string;
    space: (Space & {
        location: Location;
    })
}


const AdminCard = (props: AdminCardProps) => <div className="card mx-2 my-2" style={{ maxWidth: "300px" }}>
    <img src={props.image} className="card-img-top" alt="..." />
    <div className="card-body">
        <h5 className="card-title">{props.space.title}</h5>
        <p className="card-text">{props.space.description}</p>
        <p className="card-text">{props.space.location.name}</p>
        <Link href={"#"} className="btn btn-primary" >Remove</Link>
        {/* <Link href={"/space/" + props.space.id} className="btn btn-primary" >Remove</Link> */}
    </div>
</div >

export default AdminCard