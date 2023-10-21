import "./ProductCard.css";

function ProductCard({ product, setCartVisible, cart, setCart }) {
  const rating = Math.round(product.rating.rate);

  return (
    <div className="card">
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
      <div>
        <button
          onClick={() => {
            for (const cartItem of cart) {
              if (product === cartItem.product) return setCartVisible(true);
            }

            setCart([...cart, { product, quantity: 1 }]);
            setCartVisible(true);
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>cart-plus</title>
            <path d="M11 9H13V6H16V4H13V1H11V4H8V6H11M7 18C5.9 18 5 18.9 5 20S5.9 22 7 22 9 21.1 9 20 8.1 18 7 18M17 18C15.9 18 15 18.9 15 20S15.9 22 17 22 19 21.1 19 20 18.1 18 17 18M7.2 14.8V14.7L8.1 13H15.5C16.2 13 16.9 12.6 17.2 12L21.1 5L19.4 4L15.5 11H8.5L4.3 2H1V4H3L6.6 11.6L5.2 14C5.1 14.3 5 14.6 5 15C5 16.1 5.9 17 7 17H19V15H7.4C7.3 15 7.2 14.9 7.2 14.8Z" />
          </svg>
        </button>
        <div className="price">${product.price}</div>
      </div>
    </div>
  );
}

export default ProductCard;
