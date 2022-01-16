import {
  ANENTIREPLACE_HOST_BTN,
  APRIVATEROOM_HOST_BTN,
  ASHAREDROOM_HOST_BTN,
} from "../actionTypes";
const initialState = {
  thirdpageValue: "",
};
const thirdpageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ANENTIREPLACE_HOST_BTN:
      return {
        ...state,
        thirdpageValue: (state.thirdpageValue = "An Entire Place"),
      };
    case APRIVATEROOM_HOST_BTN:
      return {
        ...state,
        thirdpageValue: (state.thirdpageValue = "A Private Room"),
      };
    case ASHAREDROOM_HOST_BTN:
      return {
        ...state,
        thirdpageValue: (state.thirdpageValue = "A Shared Room"),
      };
    default:
      return state;
  }
};

export default thirdpageReducer;
