import './styles/reset.css'
import './styles/index.css'

import initialStoreItems from './store-items'
import { Fragment } from 'react'
import { useState } from 'react'

/*
Here's what a store item should look like
{
  id: '001-beetroot',
  name: 'beetroot',
  price: 0.35
}
*/

function App() {
  const [cart, setCart] = useState([])

  const addItemToCart = item => {
    if (findCartItem(item)) {
      alert(`${item.name} is already in the cart`)
      return
    }
    setCart([...cart, item])
  }

  const findCartItem = cartItem => {
    return cart.find(item => item === cartItem)
  }

  const renderCartItem = cartArray => {
    return cartArray.map(cartItem => {
      return (
        <li>
          <img
            class="cart--item-icon"
            src={`/assets/icons/${cartItem.id}.svg`}
            alt="beetroot"
          />
          <p>{cartItem.name}</p>
          <button class="quantity-btn remove-btn center">-</button>
          <span class="quantity-text center">1</span>
          <button class="quantity-btn add-btn center">+</button>
        </li>
      )
    })
  }

  const renderStoreItems = storeItemsArray => {
    return initialStoreItems.map(storeItem => {
      return (
        <li>
          <div class="store--item-icon">
            <img
              src={`/assets/icons/${storeItem.id}.svg`}
              alt={storeItem.name}
            />
          </div>
          <button onClick={() => addItemToCart(storeItem)}>Add to cart</button>
        </li>
      )
    })
  }

  return (
    <Fragment>
      <header id="store">
        <h1>Greengrocers</h1>
        <ul className="item-list store--item-list">
          {renderStoreItems(initialStoreItems)}
        </ul>
      </header>
      <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">{renderCartItem(cart)}</ul>
        </div>
        <div className="total-section">
          <div>
            <h3>Total</h3>
          </div>
          <div>
            <span className="total-number">£0.00</span>
          </div>
        </div>
      </main>
    </Fragment>
  )
}

export default App
