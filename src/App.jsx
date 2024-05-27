import { useState } from "react";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";
import Cart from "./components/Cart";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <div className="nav-shop">
        <Navbar />
        <Shop />
      </div>
      <Cart />
    </main>
  );
}

export default App;
