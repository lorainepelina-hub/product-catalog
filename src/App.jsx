import { useState } from "react";
import { products } from "./data/products";
import ProductCard from "./components/ProductCard";
import "./App.css";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [lastAdded, setLastAdded] = useState("");

  // Callback passed down to every ProductCard; the child calls it with the title
  const handleAddToCart = (title) => {
    setCartCount((prev) => prev + 1);
    setLastAdded(title);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>CvSU Mini Store</h1>
      </header>

      <p className="cart-message">
        {cartCount === 0
          ? "Your cart is empty."
          : `Items added to cart: ${cartCount} (Last added: ${lastAdded})`}
      </p>

      <main className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            category={product.category}
            inStock={product.inStock}
            onAddToCart={handleAddToCart}
          >
            {product.badge && <span>{product.badge}</span>}
          </ProductCard>
        ))}
      </main>
    </div>
  );
}

export default App;