import {
  APARTMENT_HOST_BTN,
  HOUSE_HOST_BTN,
  SECONDARYUNIT_HOST_BTN,
  BEDNBREAKFAST_HOST_BTN,
  BOUTIQUEHOTEL_HOST_BTN,
} from "../actionTypes";
const initialState = {
  firstpageValue: "",
};
const firstpageReducer = (state = initialState, action) => {
  switch (action.type) {
    case APARTMENT_HOST_BTN:
      return {
        ...state,
        firstpageValue: (state.firstpageValue = "Apartment"),
      };
    case HOUSE_HOST_BTN:
      return {
        ...state,
        firstpageValue: (state.firstpageValue = "House"),
      };
    case SECONDARYUNIT_HOST_BTN:
      return {
        ...state,
        firstpageValue: (state.firstpageValue = "Secondary Unit"),
      };

    case BEDNBREAKFAST_HOST_BTN:
      return {
        ...state,
        firstpageValue: (state.firstpageValue = "Bed and Breakfast"),
      };
    case BOUTIQUEHOTEL_HOST_BTN:
      return {
        ...state,
        firstpageValue: (state.firstpageValue = "Boutique Hotel"),
      };

    default:
      return state;
  }
};

export default firstpageReducer;
