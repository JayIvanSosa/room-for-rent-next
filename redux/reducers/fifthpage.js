import {
  ADDGUEST_HOST_BTN,
  SUBTRACTGUEST_HOST_BTN,
  ADDBEDS_HOST_BTN,
  SUBTRACTBEDS_HOST_BTN,
  ADDBEDSROOMS_HOST_BTN,
  SUBTRACTBEDSROOMS_HOST_BTN,
  ADDBATHROOMS_HOST_BTN,
  SUBTRACTBATHROOMS_HOST_BTN,
} from "../actionTypes";
const initialState = {
  guestValue: 0,
  bedsValue: 0,
  bedroomsValue: 0,
  bathroomsValue: 0,
};
const fifthpageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDGUEST_HOST_BTN:
      return {
        ...state,
        guestValue: state.guestValue + 1,
      };

    case SUBTRACTGUEST_HOST_BTN:
      return {
        ...state,
        guestValue: state.guestValue - 1,
      };
    case ADDBEDS_HOST_BTN:
      return {
        ...state,
        bedsValue: state.bedsValue + 1,
      };
    case SUBTRACTBEDS_HOST_BTN:
      return {
        ...state,
        bedsValue: state.bedsValue - 1,
      };
    case ADDBEDSROOMS_HOST_BTN:
      return {
        ...state,
        bedroomsValue: state.bedroomsValue + 1,
      };
    case SUBTRACTBEDSROOMS_HOST_BTN:
      return {
        ...state,
        bedroomsValue: state.bedroomsValue - 1,
      };
    case ADDBATHROOMS_HOST_BTN:
      return {
        ...state,
        bathroomsValue: state.bathroomsValue + 1,
      };
    case SUBTRACTBATHROOMS_HOST_BTN:
      return {
        ...state,
        bathroomsValue: state.bathroomsValue - 1,
      };
    default:
      return state;
  }
};
export default fifthpageReducer;
