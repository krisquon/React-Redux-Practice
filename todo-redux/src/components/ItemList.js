import React from 'react';
import Item from './Item';

const ItemList = props =>
  props.items.map((item, index) => (
    <Item
      key={item.task}
      index={index}
      item={item}
      removeItem={props.removeItem}
      updateItem={props.updateItem}
    />
  ));

export default ItemList;
