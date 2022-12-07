import type { NextPage } from "next";
import ProductCatalogCard from "../../components/ProductCatalogCard";
import { trpc } from "../../utils/trpc";
import { useState } from "react";

const Catalog: NextPage = () => {

    const allSpaces = trpc.catalog.getAllSpaces.useQuery();

    const [search, setSearch] = useState(null);

    const searchSpace = (e: any) => {
        let keyword = e.target.value;
        setSearch(keyword);
        console.log(search)
    }

    return <div className="catalog-bg">
        <br />
        <div className="max-w-2xl mx-auto">

            <div className="container">

                <div className="row height d-flex justify-content-center align-items-center">

                    <div className="col-md-8">

                        <div className="search">

                            <input type="text" className="form-control" placeholder="Search Office Spaces" onChange={(e) => searchSpace(e)} />
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

export default Catalog