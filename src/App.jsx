import "./App.scss";
import { Navbar } from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Home } from "./Pages/Home";
import { Products } from "./Pages/Products";
import { Cart } from "./Pages/Cart";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <main className="content container">
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
