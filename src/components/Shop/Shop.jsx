import "./Shop.css";
import Navbar from "../Navbar/Navbar";
import ProductCard from "../ProductCard/ProductCard";
import { useState } from "react";
import Cart from "../Cart/Cart";

function Shop({ products }) {
  const [selectedSort, setSelectedSort] = useState("popularity");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchValue, setSearchValue] = useState("");
  const filteredProducts = createFilteredProducts();

  const [cart, setCart] = useState([]);
  const [cartVisible, setCartVisible] = useState(false);

  function createFilteredProducts() {
    let filteredProducts =
      selectedCategory === "all"
        ? products
        : products.filter((product) => product.category === selectedCategory);

    filteredProducts = sortProducts(filteredProducts);

    filteredProducts = filteredProducts.filter((product) =>
      searchValue ? new RegExp(searchValue, "i").test(product.title) : true
    );

    return filteredProducts;
  }

  function sortProducts(filteredProducts) {
    switch (selectedSort) {
      case "popularity":
        return filteredProducts.toSorted((a, b) => b.rating.count - a.rating.count);
      case "rating":
        return filteredProducts.toSorted((a, b) => b.rating.rate - a.rating.rate);
      case "priceAscending":
        return filteredProducts.toSorted((a, b) => a.price - b.price);
      case "priceDescending":
        return filteredProducts.toSorted((a, b) => b.price - a.price);
      case "alphabeticalAscending":
        return filteredProducts.toSorted((a, b) => b.title < a.title);
      case "alphabeticalDescending":
        return filteredProducts.toSorted((a, b) => b.title > a.title);
    }
  }

  function handleClick(e) {
    const li = e.target;

    if (li.className !== "active") {
      for (const li of document.querySelectorAll("main > aside li")) li.className = "";
      li.className = "active";

      setSelectedCategory(li.textContent.toLowerCase());
    }
  }

  return (
    <>
      {cartVisible && <Cart setCartVisible={setCartVisible} cart={cart} setCart={setCart} />}

      <Navbar setSearchValue={setSearchValue} setCartVisible={setCartVisible} cart={cart} />
      <div className="backgroundImage"></div>
      <main>
        <aside>
          <h1>Categories</h1>
          <ul>
            <li className="active" onClick={handleClick}>
              All
            </li>
            <li onClick={handleClick}>Men&apos;s Clothing</li>
            <li onClick={handleClick}>Women&apos;s Clothing</li>
            <li onClick={handleClick}>Jewelery</li>
            <li onClick={handleClick}>Electronics</li>
          </ul>
        </aside>
        <section>
          <div>
            <div>{filteredProducts.length} items</div>
            <div>
              Sort by{" "}
              <select onChange={(e) => setSelectedSort(e.target.value)}>
                <option value="popularity">Popularity</option>
                <option value="rating">Rating</option>
                <option value="priceAscending">Price (low to high)</option>
                <option value="priceDescending">Price (high to low)</option>
                <option value="alphabeticalAscending">A - Z</option>
                <option value="alphabeticalDescending">Z - A</option>
              </select>
            </div>
          </div>
          <div id="cards">
            {filteredProducts.length ? (
              filteredProducts.map((product) => (
                <ProductCard
                  product={product}
                  key={product.id}
                  setCartVisible={setCartVisible}
                  cart={cart}
                  setCart={setCart}
                />
              ))
            ) : (
              <div>No items found, please try again.</div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}

export default Shop;
