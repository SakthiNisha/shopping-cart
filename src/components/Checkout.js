import React, { useState } from 'react';
import { connect } from 'react-redux';
import { clearCart } from '../redux/actions';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Radio, RadioGroup, FormControlLabel } from '@mui/material';

const Checkout = ({ cart, clearCart }) => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [open, setOpen] = useState(false);
  const [address, setAddress] = useState({
    name: '',
    email: '',
    phone: '',
    street: '',
    city: '',
    state: '',
    zip: '',
  });

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleAddressChange = (event) => {
    const { name, value } = event.target;
    setAddress({ ...address, [name]: value });
  };

  const handlePlaceOrder = () => {
    if (paymentMethod === 'COD') {
      // Place the order with COD
      // Additional logic for order placement can go here

      // Clear the cart after placing the order
      clearCart();
      setOpen(true); // Open the success dialog
    } else {
      alert('Please select a payment method.');
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0); // Update to multiply price by quantity
  };

  return (
    <div>
      <h2>Checkout</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <h3>Cart Details:</h3>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>{item.quantity}</td>
                  <td>${item.price * item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h3>Total: ${calculateTotal()}</h3>

          <div>
            <h3>Delivery Address</h3>
            <form>
              <TextField
                label="Name"
                name="name"
                value={address.name}
                onChange={handleAddressChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Email"
                name="email"
                value={address.email}
                onChange={handleAddressChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Phone"
                name="phone"
                value={address.phone}
                onChange={handleAddressChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Street"
                name="street"
                value={address.street}
                onChange={handleAddressChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="City"
                name="city"
                value={address.city}
                onChange={handleAddressChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="State"
                name="state"
                value={address.state}
                onChange={handleAddressChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Zip"
                name="zip"
                value={address.zip}
                onChange={handleAddressChange}
                fullWidth
                margin="normal"
              />
            </form>
          </div>

          <div>
            <h3>Payment Method</h3>
            <RadioGroup value={paymentMethod} onChange={handlePaymentMethodChange}>
              <FormControlLabel value="COD" control={<Radio />} label="Cash on Delivery (COD)" />
            </RadioGroup>
          </div>

          <Button variant="contained" color="primary" onClick={handlePlaceOrder}>Place Order</Button>
        </div>
      )}

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Order Confirmation</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Order placed successfully! Your cart has been cleared.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

const mapDispatchToProps = {
  clearCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
