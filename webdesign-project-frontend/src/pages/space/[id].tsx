import type { NextPage } from "next";
import { useRouter } from "next/router";

const OfficeSpace: NextPage = () => {

    const router = useRouter();

    const { id } = router.query;
    // TODO: check if the ID exists in the database, else return an element that says ID does not exist

    return <>
        <h1>Office Space of ID {id}</h1>
        <button type="button" className="btn btn-primary">Book</button>
    </>
}

export default OfficeSpace