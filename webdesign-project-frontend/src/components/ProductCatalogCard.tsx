

type ProductCatalogProps = {
    image: string;
    title: string;
    text: string;
}

const ProductCatalogCard = (props: ProductCatalogProps) => <div className="card" style={{ maxWidth: "300px" }}>
    <img src={props.image} className="card-img-top" alt="..." />
    <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.text}</p>
        <a href="#" className="btn btn-primary">Book</a>
    </div>
</div>

export default ProductCatalogCard