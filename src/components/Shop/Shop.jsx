import "./Shop.css";
import Navbar from "../Navbar/Navbar";
import ProductCard from "../ProductCard/ProductCard";
import { useState } from "react";

function Shop({ products }) {
  const [selectedSort, setSelectedSort] = useState("popularity");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchValue, setSearchValue] = useState("");
  const filteredProducts = createFilteredProducts();

  function createFilteredProducts() {
    // make more readable
    return sortProducts(
      selectedCategory === "all"
        ? products
        : products.filter((product) => product.category === selectedCategory)
    ).filter((product) => {
      if (searchValue) return new RegExp(searchValue, "i").test(product.title);
      else return true;
    });
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
      <Navbar setSearchValue={setSearchValue} />
      <div className="backgroundImage"></div>
      <main>
        <aside>
          <h1>Categories</h1>
          <ul>
            <li className="active" onClick={handleClick}>
              All
            </li>
            <li onClick={handleClick}>Men's Clothing</li>
            <li onClick={handleClick}>Women's Clothing</li>
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
