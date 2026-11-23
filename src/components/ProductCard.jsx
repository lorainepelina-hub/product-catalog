import "./ProductCard.css";

const formatPrice = (amount) =>
  "₱" +
  amount.toLocaleString("en-PH", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

function ProductCard({
  title,
  price,
  category = "General",
  inStock,
  onAddToCart,
  children,
}) {
  return (
    <div className={`product-card ${inStock ? "in-stock" : "out-of-stock"}`}>
      {children && <div className="product-badge">{children}</div>}
      <span className="product-category">{category}</span>
      <h3 className="product-title">{title}</h3>
      <p className="product-price">{formatPrice(price)}</p>
      <p className={`product-status ${inStock ? "status-in" : "status-out"}`}>
        {inStock ? "In Stock" : "Out of Stock"}
      </p>
      <button
        className="add-btn"
        disabled={!inStock}
        onClick={() => onAddToCart(title)}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;