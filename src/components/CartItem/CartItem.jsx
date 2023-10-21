import "./CartItem.css";

function CartItem({ cartItem, cart, setCart }) {
  return (
    <div className="productItem">
      <img src={cartItem.product.image} alt="" />
      <div className="content">
        <div className="title">
          <div>{cartItem.product.title}</div>
          <svg
            onClick={() => setCart(cart.filter((item) => item !== cartItem))}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <title>delete</title>
            <path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
          </svg>
        </div>
        <div className="price">
          <div>${cartItem.product.price}</div>
          <div>
            <svg
              onClick={() => {
                setCart(
                  [...cart].map((item) =>
                    item === cartItem
                      ? {
                          ...item,
                          quantity: item.quantity > 1 ? --item.quantity : item.quantity,
                        }
                      : item
                  )
                );
              }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <title>minus-box</title>
              <path d="M17,13H7V11H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" />
            </svg>
            <div>{cartItem.quantity}</div>
            <svg
              onClick={() => {
                setCart(
                  [...cart].map((item) =>
                    item === cartItem
                      ? {
                          ...item,
                          quantity: ++item.quantity,
                        }
                      : item
                  )
                );
              }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <title>plus-box</title>
              <path d="M17,13H13V17H11V13H7V11H11V7H13V11H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
