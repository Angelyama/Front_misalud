// redux/reducers/sampleReducer.js

const initialState = {
  data: []
};

export default function sampleReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_DATA_SUCCESS':
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
}
