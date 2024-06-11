import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../redux/actions';

const Product = ({ product, addToCart, updateCartCount, cart }) => {
  const handleAddToCart = () => {
    addToCart(product); // Dispatch the addToCart action with the product
    updateCartCount(cart.length + 1); // Update the cart count after adding an item
  };

  return (
    <div style={{ border: '1px solid #ddd', padding: '16px', margin: '16px', textAlign: 'center' }}>
      <img src={product.image} alt={product.name} style={{ width: '150px', height: '150px' }} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
    cart: state.cart,
  });

const mapDispatchToProps = {
  addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
