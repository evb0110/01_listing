import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ color, item }) => (
  <figure className={`snip1171 ${color}`}>
    <img src={item.pic} alt={item.title} />
    <div className="price">${item.price.toFixed(2)}</div>
    <figcaption>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <a href="https://netology.ru">Add to Cart</a>
    </figcaption>
  </figure>
);

Item.propTypes = {
  color: PropTypes.string,
  item: PropTypes.shape({
    pic: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
  }),
};

export default Item;
