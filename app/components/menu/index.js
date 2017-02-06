import React from 'react';

import MenuItem from './item';

const menuItems = [
  { type: 'box', typeName: 'Box' },
  { type: 'circle', typeName: 'Circle' },
];

export default function Menu() {
  return (
    <aside className="menu box b-menu">
      <ul className="menu-list">
        {menuItems.map((item, i) => (
          <MenuItem {...item} key={i} />
        ))}
      </ul>
    </aside>
  );
}
