import React, {useState} from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../redux/actions';

const Product = ({ product, addToCart, updateCartCount, cart }) => {
  const [quantity, setQuantity] = useState(1);
  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
    updateCartCount(cart.length + 1); // Update the cart count after adding an item
  };

  return (
    <div style={{ border: '1px solid #ddd', padding: '16px', margin: '16px', textAlign: 'center' }}>
      <img src={product.image} alt={product.name} style={{ width: '150px', height: '150px' }} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <input 
        type="number" 
        value={quantity} 
        onChange={(e) => setQuantity(Number(e.target.value))}
        min="1"
        style={{ width: '50px', marginBottom: '10px' }}
      />
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
