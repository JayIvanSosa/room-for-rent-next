import {
  RENTALUNIT_HOST_BTN,
  LOFT_HOST_BTN,
  CONDOMINIUM_HOST_BTN,
} from "../actionTypes";
const initialState = {
  secondpageValue: "",
};
const secondpageReducer = (state = initialState, action) => {
  switch (action.type) {
    case RENTALUNIT_HOST_BTN:
      return {
        ...state,
        secondpageValue: (state.secondpageValue = "Rental Unit"),
      };
    case LOFT_HOST_BTN:
      return {
        ...state,
        secondpageValue: (state.secondpageValue = "Loft"),
      };
    case CONDOMINIUM_HOST_BTN:
      return {
        ...state,
        secondpageValue: (state.secondpageValue = "Condominium"),
      };
    default:
      return state;
  }
};

export default secondpageReducer;
