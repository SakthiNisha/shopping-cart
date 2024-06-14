import { combineReducers } from 'redux';
import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from './actions';

const initialState = {
  products: [
    { id: 1, name: 'Tomato', price: 50, image: 'img/products/tomatoes.jpg' },
    { id: 2, name: 'Onion', price: 30, image: 'img/products/onion.jpg' },
    { id: 3, name: 'Potato', price: 20, image: 'img/products/pototo.jpg' },
    { id: 4, name: 'Brinjal', price: 50, image: 'img/products/brinjal.jpg' },
    { id: 5, name: 'Carrot', price: 30, image: 'img/products/carrot.jpg' },
    { id: 6, name: 'CauliFlower', price: 50, image: 'img/products/cauliflower.jpg' },
    { id: 7, name: 'Ladies Finger', price: 30, image: 'img/products/ladies-finger.jpg' },
    { id: 8, name: 'Ridge Gourd', price: 20, image: 'img/products/ridge-gourd.jpg' },
    { id: 9, name: 'Bitter Gourd', price: 50, image: 'img/products/bitter-Gourd.jpg' },
    { id: 10, name: 'DrumStick', price: 30, image: 'img/products/drumsticks.jpg' },
  ],
  cart: [],
};

const productReducer = (state = initialState.products, action) => {
  return state;
};

const cartReducer = (state = initialState.cart, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const existingItem = state.find(item => item.id === action.payload.id);
      if (existingItem) {
        return state.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
      } else {
        return [...state, { ...action.payload, quantity: action.payload.quantity }];
      }
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
