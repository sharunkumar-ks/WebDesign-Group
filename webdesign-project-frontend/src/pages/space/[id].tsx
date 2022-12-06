import type { NextPage } from "next";
import { useRouter } from "next/router";
import Link from "next/link"
import { trpc } from "../../utils/trpc";

const OfficeSpace: NextPage = () => {

    const router = useRouter();

    const { id } = router.query;

    const id_string: string = id?.toString() || ""

    const { data } = trpc.catalog.getSpaceById.useQuery({ id: id_string })

    return <>
        <div className="card container my-5">
            <img src="../carousel-2.png" className="card-img-top my-0" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{data?.space?.title}</h5>
                <p className="card-text">{data?.space?.description}</p>
                <Link className="btn btn-primary" href={`/payment/${id}`}>Book</Link>
            </div>
        </div>

    </>
}

export default OfficeSpace