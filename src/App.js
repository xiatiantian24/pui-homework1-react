import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import data from "./components/data";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Detail from "./pages/Detail";

function App() {
  const cards = data.map((item) => {
    return <ProductCard 
    key={item.id} 
    item={item} />;
  });

  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <div class="product-gallery">
        <div class="cinnamon-rolls">
          <h2>Our hand-made cinnamon rolls</h2>
          {cards}
        </div>
      </div>
        <Routes>
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/detail" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
