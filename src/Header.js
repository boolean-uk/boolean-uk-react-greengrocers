import React from 'react'
import StoreItem from './StoreItem'
const Header = (props) => {
  return (
    <header id="store">
      <h1>Greengrocers</h1>
      <ul class="item-list store--item-list"></ul>
    </header>
  )
}

export default Header