import React, { useState } from 'react';
import './Checkout.css';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './PaymentForm';
import { Typography, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Button, List, ListItem, ListItemText, Divider } from '@mui/material';
import { connect } from 'react-redux';

const stripePromise = loadStripe('your-stripe-public-key'); // Replace with your Stripe public key

const Checkout = ({ cart }) => {
  const [paymentMethod, setPaymentMethod] = useState('stripe');

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (paymentMethod === 'cod') {
      alert('Order placed with Cash on Delivery!');
      // Add further logic for processing COD orders here
    }
  };

  const calculateTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>

      <Typography variant="h6" gutterBottom>
        Order Summary
      </Typography>
      <List disablePadding>
        {cart.map((item) => (
          <ListItem key={item.id}>
            <ListItemText primary={item.name} secondary={`Quantity: ${item.quantity}`} />
            <Typography variant="body2">${(item.price * item.quantity).toFixed(2)}</Typography>
          </ListItem>
        ))}
        <Divider />
        <ListItem>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
            ${calculateTotal()}
          </Typography>
        </ListItem>
      </List>

      <FormControl component="fieldset">
        <FormLabel component="legend">Payment Method</FormLabel>
        <RadioGroup aria-label="payment-method" name="payment-method" value={paymentMethod} onChange={handlePaymentMethodChange}>
          <FormControlLabel value="stripe" control={<Radio />} label="Credit/Debit Card (Stripe)" />
          <FormControlLabel value="cod" control={<Radio />} label="Cash on Delivery" />
        </RadioGroup>
      </FormControl>

      {paymentMethod === 'stripe' ? (
        <Elements stripe={stripePromise}>
          <PaymentForm />
        </Elements>
      ) : (
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Place Order with Cash on Delivery
        </Button>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Checkout);
