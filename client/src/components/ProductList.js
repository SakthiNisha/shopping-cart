import React from 'react';
import { connect } from 'react-redux';
import Product from './Product';
import '../styles/ProductList.css'; // Import the CSS file

const ProductList = ({ products, updateCartCount }) => {
  return (
    <div className="product-list-container"> {/* Update the class name */}
      {products.map((product) => (
        <Product key={product.id} product={product} updateCartCount={updateCartCount} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.products,
});

export default connect(mapStateToProps)(ProductList);
