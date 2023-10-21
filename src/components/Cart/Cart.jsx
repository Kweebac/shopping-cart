import CartItem from "../CartItem/CartItem";
import "./Cart.css";

function Cart({ setCartVisible, cart, setCart }) {
  let total = 0;
  for (const cartItem of cart) {
    total += cartItem.product.price * cartItem.quantity;
  }

  return (
    <>
      <div onClick={() => setCartVisible(false)} id="blur"></div>
      <div id="cart">
        <div id="header">
          <h1>Shopping Bag</h1>
          <button onClick={() => setCartVisible(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>window-close</title>
              <path d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z" />
            </svg>
          </button>
        </div>
        <div id="productItems">
          {cart.length ? (
            cart.map((cartItem) => (
              <CartItem
                cartItem={cartItem}
                cart={cart}
                setCart={setCart}
                key={cartItem.product.id}
              />
            ))
          ) : (
            <div>No items have been added to your bag.</div>
          )}
        </div>
        <div id="footer">
          <div>
            <div>Subtotal:</div>
            <div>${total.toFixed(2)}</div>
          </div>
          <button onClick={() => alert("This isn't a real store...")}>
            <div>CHECKOUT</div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>arrow-right</title>
              <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

export default Cart;
