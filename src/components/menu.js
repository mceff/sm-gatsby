import React from 'react'
import { Link } from 'gatsby'

const Menu = () => (
  <div>
    <ul>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/services">Services</Link>
      </li>
    </ul>
  </div>
)

export default Menu
