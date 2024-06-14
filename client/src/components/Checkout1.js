import React, { useState } from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../redux/actions';
import { clearCart } from '../redux/actions'; // Add a new action to clear the cart
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './PaymentForm';
import './Checkout.css';

const stripePromise = loadStripe('your-stripe-public-key'); // Replace with your Stripe public key

const Checkout = ({ cart, removeFromCart, clearCart }) => {
  const [customer, setCustomer] = useState({
    name: '',
    address: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer({ ...customer, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cart.length === 0) {
      alert('Your cart is empty');
      return;
    }

    // Simulate a checkout process
    console.log('Customer Info:', customer);
    console.log('Cart Items:', cart);

    // Display a confirmation message
    alert('Checkout complete!');

    // Clear the cart
    clearCart();
  };

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <h2>Checkout</h2>
      <div>
        {cart.map((item) => (
          <div key={item.id}>
            <span>{item.name} - ${item.price}</span>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))}
      </div>
      <h3>Total: ${totalPrice}</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input type="text" name="name" value={customer.name} onChange={handleChange} required />
          </label>
        </div>
        <div>
          <label>
            Address:
            <input type="text" name="address" value={customer.address} onChange={handleChange} required />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input type="email" name="email" value={customer.email} onChange={handleChange} required />
          </label>
        </div>
        <Elements stripe={stripePromise}>
        <PaymentForm />
      </Elements>
        <button type="submit">Complete Checkout</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

const mapDispatchToProps = {
  removeFromCart,
  clearCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
