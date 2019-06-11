import React, { Component } from 'react';
import { connect } from 'react-redux';
import LocationItem from './LocationItem';
import { setZipCode } from './actions';

class LocationsList extends Component {

  handleSelection (zipCode) {
    this.props.dispatch(setZipCode(zipCode));
  };

  render() {
    const { locations, zipCode } = this.props.place;
    
    const locationsList = locations.reduce((accumulator, locationItem) => {
      if (locationItem['post code']) {
        accumulator.push(
          <LocationItem
            location={locationItem}
            isItemSelected={this.props.place.zipCode === locationItem['post code'] }
            key={locationItem['post code']}
            handleSelection={ this.handleSelection.bind(this, locationItem['post code']) }
          />
          )
      }
      return accumulator;
    }, []);
    
    return (
      <ul>{locationsList}</ul>
    )
  }
}

function mapStateToProps(state) {
  return {
    place: state.place
  }
}

export default connect(mapStateToProps)(LocationsList);
