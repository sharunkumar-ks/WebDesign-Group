import type { NextPage } from "next";
import ProductCatalogCard from "../../components/ProductCatalogCard";

const Catalog: NextPage = () => {

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
        <table>
            <tbody>
                <tr><td><ProductCatalogCard title="Card Title" text="Description" image="carousel-2.png" />
                </td>
                    <td><ProductCatalogCard title="Card Title" text="Description" image="carousel-2.png" /></td>
                    <td><ProductCatalogCard title="Card Title" text="Description" image="carousel-2.png" />
                    </td>
                </tr>
                <tr><td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr><td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>

    </>
}

export default Catalog