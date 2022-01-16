import { PRICE_HOST_INPUT } from "../actionTypes";
const initialState = {
  priceValue: 0,
};
const tenthpageReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRICE_HOST_INPUT:
      return {
        ...state,
        priceValue: action.payload.priceValue,
      };
    default:
      return state;
  }
};
export default tenthpageReducer;
