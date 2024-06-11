import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../redux/actions';
import { Link } from 'react-router-dom';

const Cart = ({ cart, removeFromCart, updateCartCount }) => {
  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
    updateCartCount(cart.length - 1); // Update the cart count after removing an item
  };

const calculateTotal = () => {
return cart.reduce((total, item) => total + item.price, 0);
};


return (
    <div>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id}>
              <span>{item.name} - ${item.price}</span>
              <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <h3>Total: ${calculateTotal()}</h3>
          <Link to="/checkout">
            <button>Proceed to Checkout</button>
          </Link>
        </div>
      )}
    </div>
  );
};


const mapStateToProps = (state) => ({
  cart: state.cart,
});

const mapDispatchToProps = {
  removeFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
