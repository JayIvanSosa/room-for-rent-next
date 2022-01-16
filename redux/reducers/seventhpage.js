import { IMAGE_HOST_INPUT } from "../actionTypes";
const initialState = {
  imageValue: [],
};
const seventhpageReducer = (state = initialState, action) => {
  switch (action.type) {
    case IMAGE_HOST_INPUT:
      return {
        ...state,
        imageValue: action.payload.imageValue,
      };

    default:
      return state;
  }
};

export default seventhpageReducer;
