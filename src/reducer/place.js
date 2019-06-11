import { SET_ZIP_CODE, FETCH_LOCATION_ERROR, FETCH_LOCATION_LOADING, FETCH_LOCATION_SUCCESS, SET_SELECTION } from '../constants'

const initialState = {
  locations: [],
  loading: false,
  error: null,
  zipCode: '',
  selection: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ZIP_CODE:
      return {
        ...state,
        loading: false,
        error: null,
        zipCode: action.payload,
      };
  
    case SET_SELECTION:
      return {
        ...state,
        zipCode: state.zipCode && state.zipCode === action.payload ? '' : action.payload,
        selection: state.selection && state.selection === action.payload ? '' : action.payload,
      };
    
    case FETCH_LOCATION_LOADING:
      return {
        ...state,
        loading: true,
        error: null
      };
      
    case FETCH_LOCATION_SUCCESS:
      const isLocationExists = state.locations.find(location => location['post code'] === action.payload['post code']);
      let locations;
      
      if (!isLocationExists && !state.selection) {
        locations = [...state.locations, ...[action.payload]];
      } else if (state.selection) {
        locations = state.locations.map((item) => {
          if (item['post code'] === state.selection) {
            return action.payload
          }
  
          return item
        });
      }
      else {
        locations = state.locations;
      }
      
      return {
        ...state,
        loading: false,
        locations,
        zipCode: '',
        selection: ''
      };
  
    case FETCH_LOCATION_ERROR:
      return {
        ...state,
        loading: false,
        zipCode: '',
        error: "Zipcode doesn't exist"
      };

    default:
      return state
  }
}
