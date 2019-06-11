const initialState = {
  locations: [],
  loading: false,
  error: null,
  zipCode: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ZIP_CODE':
      return {
        ...state,
        loading: false,
        error: null,
        zipCode: state.zipCode && state.zipCode === action.payload ? '' : action.payload,
      };
    
    case 'FETCH_LOCATION_LOADING':
      return {
        ...state,
        loading: true,
        error: null
      };
    case 'FETCH_LOCATION_SUCCESS':
      const isLocationExists = state.locations.find(location => location['post code'] === action.payload['post code']);
      let locations;
      
      if (!isLocationExists) {
        locations = [...state.locations, ...[action.payload]];
      } else locations = state.locations;
      
      return {
        ...state,
        loading: false,
        locations,
        zipCode: ''
      };
  
    case 'FETCH_LOCATION_ERROR':
      return {
        ...state,
        loading: false,
        zipCode: action.payload.zipCode,
        state, error: action.error
      };

    default:
      return state
  }
}
