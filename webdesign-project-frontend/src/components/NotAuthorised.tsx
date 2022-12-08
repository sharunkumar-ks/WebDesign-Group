/* eslint-disable @next/next/no-img-element */
import type { Location, Space } from "@prisma/client";
import Link from "next/link"
import { useRouter } from "next/router";


const NothAuthorised = () => {

    const router = useRouter();

    setTimeout(() => {
        router.replace("/catalog")
    }, 1000);

    return <div className="d-flex justify-content-center flex-nowrap my-5">
        <h1> You are not authorised to view this page. </h1>
    </div>
}


export default NothAuthorised