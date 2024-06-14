import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, Routes, Link, useLocation } from 'react-router-dom';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import AboutUs from './components/AboutUs';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsAndConditions from './components/TermsAndConditions';
import Footer from './components/Footer';
import Badge from '@mui/material/Badge';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { connect } from 'react-redux';
import logo from './assets/logo.jpg';
import CarouselComponent from './components/CarouselComponent'; // Import the carousel component

const App = ({ cart }) => {
  const [cartCount, setCartCount] = useState(0);

  const updateCartCount = () => {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    setCartCount(totalItems);
  };

  useEffect(() => {
    updateCartCount();
  }, [cart]);

  const location = useLocation();

  return (
    
      <div className="App">
        <header className="App-header">
          <div className="App-header-left">
            <img src={logo} alt="Logo" className="App-logo" />
            <h1>FreshFarmFinds</h1>
          </div>
          <nav className="App-nav">
            <Link to="/">Products</Link>
            <Link to="/cart">
              <Badge badgeContent={cartCount} color="primary">
                Cart
              </Badge>
            </Link>
            <Link to="/checkout">Checkout</Link>
            <Link to="/signup">Sign Up</Link>
            <Link to="/signin">Sign In</Link>
          </nav>
          <div className="App-contact">
            <IconButton color="inherit">
              <PhoneIcon />
            </IconButton>
            <Typography variant="body1" color="inherit">
              +91 9600836479
            </Typography>
            <IconButton color="inherit">
              <EmailIcon />
            </IconButton>
            <Typography variant="body1" color="inherit">
              snsntechno@gmail.com
            </Typography>
          </div>
        </header>

        {location.pathname === '/' && <CarouselComponent />} {/* Add the carousel component here */}

        <main className="App-main">
          <Routes>
            <Route path="/" element={<ProductList updateCartCount={updateCartCount} />} />
            <Route path="/cart" element={<Cart updateCartCount={updateCartCount} />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsAndConditions />} />
          </Routes>
        </main>
        <Footer />
      </div>
    
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(App);
