import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";


import TodoTitle from './TodoTitle';
import ItemList from './ItemList';
import { initializeList, addToList, removeFromList, updateList } from "../actions/listActions";
import { updateValue } from "../actions/valueActions";
import '../ToDo.css';

const MOCK_DATA = [{ task: 'Go to the GYM', isCompleted: false }];

class ToDo extends Component {

  componentWillMount() {
    this.props.initializeList(MOCK_DATA);
  }

  handleChange = (event) => {
    const { value } = event.target;
    this.props.updateValue(value);
  };

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      const { value } = event.target;
      this.props.addToList({task: value, isCompleted: false});
      this.props.updateValue("");
    }
  };

  removeItem = (event, itemIndex) => {
    if (event.target.checked) {
      this.props.removeFromList(itemIndex);
    }
  };

  updateItem = (event, itemIndex) => {
    const { value } = event.target;
    this.props.updateList([value, itemIndex]);
  }

  render() {
    return (
      <div className="ToDo">
        <TodoTitle>Kristopher's ToDo List</TodoTitle>
        <input
          value={this.props.value}
          onChange={event => this.handleChange(event)}
          onKeyPress={event => this.handleKeyPress(event)}
        />
        <ItemList removeItem={this.removeItem} updateItem={this.updateItem} items={this.props.list} />
      </div>
    );
  }
}

const mapStoreToProps = (store) => {
  return {
    value: store.value.value,
    list: store.list.list,
  }
}

const mapDispatchToProps = (dispatch) => ({
    initializeList: bindActionCreators(initializeList, dispatch),
    addToList: bindActionCreators(addToList, dispatch),
    removeFromList: bindActionCreators(removeFromList, dispatch),
    updateList: bindActionCreators(updateList, dispatch),
    updateValue: bindActionCreators(updateValue, dispatch)
})

export default connect(mapStoreToProps, mapDispatchToProps)(ToDo);