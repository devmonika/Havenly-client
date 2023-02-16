export const SEARCH = "SEARCH";

export const search = (location) => {
  return async (dispatch) => {
    const response = await fetch(
      `http://localhost:5000/properties?location=${location}`
    );
    const results = await response.json();

    dispatch({
      type: SEARCH,
      payload: {
        results,
      },
    });
  };
};
