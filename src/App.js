import React from 'react';

import Item from './Item';
import './css/main.css';

const colors = { unisex: 'black', male: 'blue', female: 'orange' };
const colorFunc = type => colors[type];

const App = ({ items }) => (
  <main>
    {items.map((item, i) => (
      <Item color={colorFunc(item.type)} item={item} key={i} />
    ))}
  </main>
);

export default App;
