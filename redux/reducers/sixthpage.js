import { AMENITIES_FAVORITES_SAFETYITEMS_HOST_INPUT } from "../actionTypes";
const initialState = {
  amenitiesValue: "",
  favoritesValue: "",
  safetyitemsValue: "",
};
const sixthpageReducer = (state = initialState, action) => {
  switch (action.type) {
    case AMENITIES_FAVORITES_SAFETYITEMS_HOST_INPUT:
      return {
        ...state,
        amenitiesValue: action.payload.amenitiesValue,
        favoritesValue: action.payload.favoritesValue,
        safetyitemsValue: action.payload.safetyitemsValue,
      };
    default:
      return state;
  }
};
export default sixthpageReducer;
