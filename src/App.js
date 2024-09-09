import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Cart from "./pages/cart";
import Detail from "./pages/detail";
import Home from "./pages/home";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/detail" element={<Detail />} />
          {/* <Route path="/detail/:id" element={<Detail />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
