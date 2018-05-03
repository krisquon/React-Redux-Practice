import React from 'react';

const ItemList = (props) =>
  props.items.map((item, index) => (
    <div key={item.task}>
      <input
        type="checkbox"
        checked={item.isCompleted}
        onChange={event => props.removeItem(event, index)}
      />
      <label>
        <input
          type="text"
          value={item.task}
          onChange={event => props.updateItem(event, index)}
        />
      </label>
    </div>
  ));

export default ItemList;