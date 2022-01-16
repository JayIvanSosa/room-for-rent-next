import { TITLE_DECRIPTION_HOST_INPUT } from "../actionTypes";
const coordinates = {
  titleValue: "",
  descriptionValue: "",
};
const ninthpageReducer = (state = coordinates, action) => {
  switch (action.type) {
    case TITLE_DECRIPTION_HOST_INPUT:
      return {
        ...state,
        titleValue: action.payload.titleValue,
        descriptionValue: action.payload.descriptionValue,
      };
    default:
      return state;
  }
};
export default ninthpageReducer;
