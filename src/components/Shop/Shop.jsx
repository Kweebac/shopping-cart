import "./Shop.css";
import Navbar from "../Navbar/Navbar";
import ProductCard from "../ProductCard/ProductCard";
import { useState } from "react";

function Shop({ products }) {
  const [filteredProducts, setFilteredProducts] = useState(products);

  function handleClick(e) {
    const li = e.target;
    if (li.className !== "active") {
      for (const li of document.querySelectorAll("main > aside li")) li.className = "";
      li.className = "active";

      setFilteredProducts(
        li.textContent === "All"
          ? products
          : products.filter((product) => product.category === li.textContent.toLowerCase())
      );
    } else {
      return;
    }
  }

  return (
    <>
      <Navbar />
      <div className="backgroundImage"></div>
      <main>
        <aside>
          <h1>Categories</h1>
          <ul>
            <li className="active" onClick={(e) => handleClick(e)}>
              All
            </li>
            <li onClick={(e) => handleClick(e)}>Men's Clothing</li>
            <li onClick={(e) => handleClick(e)}>Women's Clothing</li>
            <li onClick={(e) => handleClick(e)}>Jewelery</li>
            <li onClick={(e) => handleClick(e)}>Electronics</li>
          </ul>
        </aside>
        <section>
          <div>
            <div>{filteredProducts.length} items</div>
            <div>
              Sort by{" "}
              <select name="" id="">
                <option value="">Popularity</option>
                <option value="">Rating</option>
                <option value="">Price (low to high)</option>
                <option value="">Price (high to low)</option>
                <option value="">A - Z</option>
                <option value="">Z - A</option>
              </select>
            </div>
          </div>
          <div id="cards">
            {filteredProducts.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default Shop;
