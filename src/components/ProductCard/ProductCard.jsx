import "./ProductCard.css";

function ProductCard({ product }) {
  const rating = Math.round(product.rating.rate);

  return (
    <button className="card">
      <img src={product.image} alt="" />
      <div>{product.title}</div>
      <div className="rating">
        <span className={rating >= 1 && "checked"}>★</span>
        <span className={rating >= 2 && "checked"}>★</span>
        <span className={rating >= 3 && "checked"}>★</span>
        <span className={rating >= 4 && "checked"}>★</span>
        <span className={rating >= 5 && "checked"}>★</span>
        <span>({product.rating.count})</span>
      </div>
      <div className="price">${product.price}</div>
    </button>
  );
}

export default ProductCard;
