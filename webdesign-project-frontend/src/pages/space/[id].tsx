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
                <div className="dropdown">
                    <button
                        type="button"
                        className="btn btn-primary dropdown-toggle"
                        data-bs-toggle="dropdown"
                    >
                        Dropdown button
                    </button>
                    <ul className="dropdown-menu">
                        <li>
                            <a className="dropdown-item" href="#">
                                Link 1
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="#">
                                Link 2
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="#">
                                Link 3
                            </a>
                        </li>
                    </ul>
                </div>

                <Link className="btn btn-primary" href={`/payment/${id}`}>Book</Link>
            </div>
        </div>

    </>
}

export default OfficeSpace