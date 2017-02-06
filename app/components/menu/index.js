import React from 'react';

export default function Menu() {
  return (
    <aside className="menu box b-menu">
      <ul className="menu-list">
        <li>
          <a className="b-menu__link">
            <span><i className="b-menu__icon b-menu__icon--box" /></span>
            <span>Box</span>
          </a>
        </li>
        <li>
          <a className="b-menu__link">
            <span><i className="b-menu__icon b-menu__icon--circle" /></span>
            <span>Circle</span>
          </a>
        </li>
      </ul>
    </aside>
  );
}
