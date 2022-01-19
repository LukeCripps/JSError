import logo from './logo.svg';
import data from './data';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import HomeScreen from './HomeScreen.js';
import ProductScreen from './ProductScreen.js';

function App() {

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open")
  }

  return (
    <BrowserRouter>
    <div className="grid-container">
      <header className="header">
        <div className="brand">
          <button onClick={openMenu}>
            &#9776;
          </button>
          <a href="index.html">Store Name Place Holder</a>
        </div>
        <div className="header-links">
          <a href="cart.html">Cart</a>
          <a href="signin.html">Sign In</a>
        </div>
      </header>
      <aside className="sidebar">
          <div className="sidebar-text">
              <h3>Shopping Categories</h3>
              <button className="sidebar-close-button" onClick={closeMenu}>x</button>
              <ul>
                <li>
                  <a href="index.html">Pants</a>
                </li>
        
                <li>
                  <a href="index.html">Shirts</a>
                </li>
        
              </ul>
          </div>
      </aside>
      <main className="main">
        <div className="content">
          <ul className="products">
            {
              data.products.map(product =>
                <li>
                  <div className="product">
                    <a href='/product/:_id'>
                      <img className="product-image" src={product.image} alt={product.name} />
                      <div className="product-name">{product.name}</div>
                      <div className="product-brand">{product.brand}</div>
                      <div className="product-price">$ {product.price}</div>
                      <div className="product-rating">{product.rating} Stars ({product.numReviews} Reviews)</div>
                    </a>
                  </div>
                </li>
                )
            }
          </ul>
        </div>

      </main>
      <footer className="footer">
        All right reserved. &copy;2022
      </footer>
    </div>
  </BrowserRouter>
  );
}

export default App;
