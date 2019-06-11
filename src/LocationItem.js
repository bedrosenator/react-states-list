import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setZipCode } from './actions';

class LocationItem extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      isItemSelected: false
    }
  }
  
  handleSelection (zipCode) {
    this.props.dispatch(setZipCode(zipCode) );
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
