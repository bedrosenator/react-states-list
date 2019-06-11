import React, { Component } from 'react';
import { connect } from 'react-redux';

class LocationItem extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      isItemSelected: false
    }
  }
  
  handleSelection (zipCode) {
    this.props.dispatch({ type: 'SET_ZIP_CODE', payload: zipCode });
  };
  
  render() {
    const { location, isItemSelected } = this.props;
    
    return (
      <li className={isItemSelected ? 'selected_item' : ''} onClick={this.props.handleSelection}>
        {location.places[0]['state abbreviation']}, {location.places[0]['place name']}
      </li>
    )
  }
}

export default connect()(LocationItem);
