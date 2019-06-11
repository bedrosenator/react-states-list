import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLocation } from './actions/index';
import LocationsList from "./LocationsList";

class CityForm extends Component {

  handleRequest(id) {
    this.props.dispatch(fetchLocation(id));
  }
  
  setZipCode(event) {
    this.props.dispatch({ type: 'SET_ZIP_CODE', payload: event.target.value  });
  }
  
  render() {
    const { loading, zipCode } = this.props.place;

    return (
      <div>
       example valid zipcodes * 93455, 93454, 90415, 12345, 91325, 90210<br/>
        
        <input value={zipCode} onChange={this.setZipCode.bind(this)} />
        <button onClick={this.handleRequest.bind(this, zipCode)}>go</button>
        
        {loading ? <div>Loading...</div> : ''}
        
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

export default connect(mapStateToProps)(CityForm);
