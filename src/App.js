import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import AboutUs from './components/AboutUs'; // Import About Us component
import PrivacyPolicy from './components/PrivacyPolicy'; // Import Privacy Policy component
import TermsAndConditions from './components/TermsAndConditions'; // Import Terms and Conditions component
import Footer from './components/Footer';
import Badge from '@mui/material/Badge';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email'; // Import EmailIcon from Material-UI
import { connect } from 'react-redux';
import logo from './assets/logo.jpg'; // Import the logo image

const App = ({ cart }) => {
  const [cartCount, setCartCount] = useState(0);

  const updateCartCount = (count) => {
    console.log("Updating cart count:", count);
    setCartCount(count);
    console.log("Cart count after update:", cartCount);
  };

  useEffect(() => {
    updateCartCount(cart.length);
  }, [cart]);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="App-header-left">
            <img src={logo} alt="Logo" className="App-logo" /> {/* Add logo image */}
            <h1>Shopping Cart</h1>
          </div>
          <nav className="App-nav">
            <Link to="/">Products</Link>
            <Link to="/cart">
              <Badge badgeContent={cartCount} color="primary">
                Cart
              </Badge>
            </Link>
            <Link to="/checkout">Checkout</Link>
          </nav>
          <div className="App-contact">
            <IconButton color="inherit">
              <PhoneIcon />
            </IconButton>
            <Typography variant="body1" color="inherit">
              +1 (234) 567-890
            </Typography>
            <IconButton color="inherit">
              <EmailIcon />
            </IconButton>
            <Typography variant="body1" color="inherit">
              contact@example.com
            </Typography>
          </div>
        </header>
        <main className="App-main">
          <Routes>
            <Route path="/" element={<ProductList updateCartCount={updateCartCount} />} />
            <Route path="/cart" element={<Cart updateCartCount={updateCartCount} />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/about" element={<AboutUs />} /> {/* Add About Us route */}
            <Route path="/privacy" element={<PrivacyPolicy />} /> {/* Add Privacy Policy route */}
            <Route path="/terms" element={<TermsAndConditions />} /> {/* Add Terms and Conditions route */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(App);
