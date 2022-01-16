import { LATITUDE_LONGITUDE_HOST_INPUT } from "../actionTypes";
const coordinates = {
  latitudeValue: 14.9543,
  longitudeValue: 120.91867,
};
const eightpageReducer = (state = coordinates, action) => {
  switch (action.type) {
    case LATITUDE_LONGITUDE_HOST_INPUT:
      return {
        ...state,
        latitudeValue: action.payload.latitudeValue,
        longitudeValue: action.payload.longitudeValue,
      };
    default:
      return state;
  }
};
export default eightpageReducer;
