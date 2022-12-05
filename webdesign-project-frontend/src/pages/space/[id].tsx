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
        <h1>Office Space of ID {data?.space?.id}</h1>
        <h1>Office Space of Name {data?.space?.title}</h1>
        <button type="button" className="btn btn-primary"><Link href={`/payment/${id}`}>Book</Link></button>
    </>
}

export default OfficeSpace