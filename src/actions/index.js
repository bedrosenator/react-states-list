export function fetchLocationSuccess(location) {
  return { type: "FETCH_LOCATION_SUCCESS", payload: location }
}

export function fetchLocationLoading() {
  return { type: "FETCH_LOCATION_LOADING" }
}

export function fetchLocationError(error) {
  return { type: "FETCH_LOCATION_ERROR", payload: { error } }
}

export const fetchLocation = (id) => (dispatch) => {
  dispatch(fetchLocationLoading());
  return fetch(`https://api.zippopotam.us/us/${id}`)
    .then(handleErrors)
    .then(res => res.json())
    .then(json => {
      dispatch(fetchLocationSuccess(json));
      return json;
    })
    .catch(error => dispatch(fetchLocationError(error)));
};

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}