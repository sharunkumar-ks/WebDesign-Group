import type { NextPage } from "next";
import ProductCatalogCard from "../../components/ProductCatalogCard";
import { trpc } from "../../utils/trpc";

const Catalog: NextPage = () => {

    const allSpaces = trpc.catalog.getAllSpaces.useQuery();

    console.log({ allSpaces })

    return <>
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
        <div className="d-flex justify-content-center">
            {allSpaces.data?.spaces.map(space => <ProductCatalogCard key={space.id} image="carousel-2.png" space={space} />)}
        </div>
    </>
}

export default Catalog