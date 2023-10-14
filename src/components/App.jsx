import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Shop/Shop";
import Home from "./Home/Home";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (!res.ok) throw new Error(res.status);
        return res.json();
      })
      .then((json) => setProducts(json))
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }, []);

  if (error) return <div>{error}</div>;
  if (isLoading) return <div>Loading...</div>;
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
