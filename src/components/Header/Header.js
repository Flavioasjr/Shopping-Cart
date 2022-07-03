import React from 'react';
import { FaShoppingBag } from 'react-icons/fa';

export default function Header() {
  return (
    <header>
      <ul>
        <li>Shop</li>
        <li>About</li>
      </ul>
      <div>
        <h2>Title</h2>
      </div>
      <div>
        <FaShoppingBag />
      </div>
    </header>
  );
}
