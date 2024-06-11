import { combineReducers } from 'redux';
import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from './actions';

const initialState = {
    products: [
      { id: 1, name: 'Tomato', price: 50, quantity: 3, image: 'img/products/product-1.jpg' },
      { id: 2, name: 'Carrot', price: 30, quantity: 3,  image: 'img/products/product-2.jpg' },
      { id: 3, name: 'Broccoli', price: 20, quantity: 3, image: 'img/products/product-3.jpg' },
      { id: 4, name: 'Tomato', price: 50,  quantity: 3, image: 'img/products/product-1.jpg' },
      { id: 5, name: 'Carrot', price: 30, quantity: 3,  image: 'img/products/product-2.jpg' },
     /* { id: 6, name: 'Broccoli', price: 20, image: 'img/products/product-3.jpg' },
      { id: 7, name: 'Tomato', price: 50, image: 'img/products/product-1.jpg' },
      { id: 8, name: 'Carrot', price: 30, image: 'img/products/product-2.jpg' },
      { id: 9, name: 'Broccoli', price: 20, image: 'img/products/product-3.jpg' },
      { id: 10, name: 'Tomato', price: 50, image: 'img/products/product-1.jpg' },
      { id: 11, name: 'Carrot', price: 30, image: 'img/products/product-2.jpg' },
      { id: 12, name: 'Broccoli', price: 20, image: 'img/products/product-3.jpg' },
      { id: 13, name: 'Tomato', price: 50, image: 'img/products/product-1.jpg' },const initialState = {
  cart: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.cart.find(item => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item
          )
        };
      }
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };
    case 'UPDATE_CART_ITEM':
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        )
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload)
      };
    default:
      return state;
  }
};

export default cartReducer;

      { id: 14, name: 'Carrot', price: 30, image: 'img/products/product-2.jpg' },
      { id: 15, name: 'Broccoli', price: 20, image: 'img/products/product-3.jpg' },*/
      
    ],
    cart: [],
  };

const productReducer = (state = initialState.products, action) => {
  return state;
};

const cartReducer = (state = initialState.cart, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];
    case REMOVE_FROM_CART:
      return state.filter((item) => item.id !== action.payload);
    case CLEAR_CART:
      return [];
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
});

export default rootReducer;
