import React, { Component } from 'react';
import update from 'immutability-helper';

import TodoTitle from './TodoTitle';
import ItemList from './ItemList';
import '../ToDo.css';

const MOCK_DATA = [{ task: 'Go to the GYM', isCompleted: false }];

class ToDo extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      list: [],
    };
  }

  componentDidMount() {
    this.setState({
      list: MOCK_DATA,
    });
  }

  handleChange = e => {
    const { value } = e.target;
    this.setState({
      value,
    });
  };

  handleKeyPress = event => {
    if (event.key === 'Enter') {
      const { value } = event.target;
      this.setState(prevState => ({
        list: [
          ...prevState.list,
          {
            task: value,
            isCompleted: false,
          },
        ],
        value: '',
      }));
    }
  };

  removeItem = (e, itemIndex) => {
    if (e.target.checked) {
      const newList = this.state.list.filter(
        (item, index) => index !== itemIndex
      );
      this.setState({
        list: newList,
      });
    }
  };

  updateItem = (event, itemIndex) => {
    const { value } = event.target;
    this.setState(prevState => ({
      list: update(prevState.list, { [itemIndex]: { task: { $set: value } } }),
    }))
  }

  render() {
    return (
      <div className="ToDo">
        <TodoTitle>Kristopher's ToDo List</TodoTitle>
        <input
          value={this.state.value}
          onChange={e => this.handleChange(e)}
          onKeyPress={e => this.handleKeyPress(e)}
        />
        <ItemList removeItem={this.removeItem} updateItem={this.updateItem} items={this.state.list} />
      </div>
    );
  }
}

export default ToDo;
