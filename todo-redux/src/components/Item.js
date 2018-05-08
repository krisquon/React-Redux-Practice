import React, { Component } from 'react';

class Item extends Component {
  state = {
    value: this.props.item.task,
  };

  onInputChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    const { item, index, removeItem, updateItem } = this.props;
    const { value } = this.state;
    return (
      <div>
        <input
          type="checkbox"
          checked={item.isCompleted}
          onChange={event => removeItem(event, index)}
        />
        <label>
          <input
            type="text"
            value={value}
            onBlur={event => updateItem(value, index)}
            onChange={e => this.onInputChange(e)}
          />
        </label>
      </div>
    );
  }
}

export default Item;
