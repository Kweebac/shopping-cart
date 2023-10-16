import "./Shop.css";
import Navbar from "../Navbar/Navbar";
import ProductCard from "../ProductCard/ProductCard";

function Shop({ products }) {
  return (
    <>
      <Navbar />
      <div className="backgroundImage"></div>
      <main>
        <div>{products.length} items</div>
        <section id="cards">
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </section>
      </main>
    </>
  );
}

export default Shop;
