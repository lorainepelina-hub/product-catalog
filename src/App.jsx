import { useState, useEffect } from "react";
import { products } from "./data/products";
import ProductCard from "./components/ProductCard";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [lastAdded, setLastAdded] = useState("");
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("default");
    const [debouncedSearch, setDebouncedSearch] = useState("");

  const handleAddToCart = (title) => {
    setCartCount((prev) => prev + 1);
    setLastAdded(title);
  };

  const handleClear = () => {
    setSearchText("");
    setCategory("All");
    setSortOrder("default");
        setDebouncedSearch("");
  };
    useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchText);
    }, 300);
    return () => clearTimeout(timer); // cleanup
  }, [searchText]);
  const filteredProducts = [...products]
        .filter((p) => p.title.toLowerCase().includes(debouncedSearch.toLowerCase()))
    .filter((p) => category === "All" || p.category === category)
    .sort((a, b) => {
      if (sortOrder === "low") return a.price - b.price;
      if (sortOrder === "high") return b.price - a.price;
      return 0;
    });
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

      <SearchBar
        searchText={searchText}
        onSearchChange={setSearchText}
        category={category}
        onCategoryChange={setCategory}
        sortOrder={sortOrder}
        onSortChange={setSortOrder}
        onClear={handleClear}
      />

      <main className="product-grid">
               {filteredProducts.map((product) => (
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