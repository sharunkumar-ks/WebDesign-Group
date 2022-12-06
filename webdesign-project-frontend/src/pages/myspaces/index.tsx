import type { NextPage } from "next";

import ProductCatalogCard from "../../components/AdminCard";
import { trpc } from "../../utils/trpc";

const MyOfficeSpaces: NextPage = () => {

    const allSpaces = trpc.catalog.getAllSpaces.useQuery();


    return <div>
        <br />
        <div className="max-w-2xl mx-auto">

            <div className="container">

                <div className="row height d-flex justify-content-center align-items-center">

                    <div className="col-md-8">

                        <div className="search">

                            <input type="text" className="form-control" placeholder="Search Office Spaces" />
                        </div>

                    </div>

                </div>
            </div>
        </div>
        <br />
        <div className="d-flex flex-wrap justify-content-center">
            {allSpaces.data?.spaces.map(space => <ProductCatalogCard key={space.id} image="carousel-2.png" space={space} />)}
        </div>
    </div>
}

export default MyOfficeSpaces