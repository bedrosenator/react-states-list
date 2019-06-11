import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLocation } from './actions/index';
import LocationsList from "./LocationsList";
import { setZipCode } from './actions';

class LocationsForm extends Component {

  handleRequest(id) {
    this.props.dispatch(fetchLocation(id));
  }
  
  setZipCode(event) {
    this.props.dispatch(setZipCode(event.target.value));
  }
  
  render() {
    const { loading, zipCode, error } = this.props.place;

    return (
      <div>
        <div>example valid zipcodes * 93455, 93454, 90415, 12345, 91325, 90210</div>
        
        <input value={zipCode} onChange={this.setZipCode.bind(this)} />
        {loading ? <span>Loading...</span> : <button onClick={this.handleRequest.bind(this, zipCode)}>go</button>}
        
        <div>{error}</div>
        
        <LocationsList />
        
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    place: state.place
  }
}

export default connect(mapStateToProps)(LocationsForm);
