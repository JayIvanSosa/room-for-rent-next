import { createStore, combineReducers } from "redux";

import firstpageReducer from "./reducers/firstpage";
import secondpageReducer from "./reducers/secondpage";
import thirdpageReducer from "./reducers/thirdpage";
import fourthpageReducer from "./reducers/fourthpage";
import fifthpageReducer from "./reducers/fifthpage";
import sixthpageReducer from "./reducers/sixthpage";
import seventhpageReducer from "./reducers/seventhpage";
import eightpageReducer from "./reducers/eightpage";
import ninthpageReducer from "./reducers/ninthpage";
import tenthpageReducer from "./reducers/tenthpage";

const rootReducer = combineReducers({
  firstpage: firstpageReducer,
  secondpage: secondpageReducer,
  thirdpage: thirdpageReducer,
  fourthpage: fourthpageReducer,
  fifthpage: fifthpageReducer,
  sixthpage: sixthpageReducer,
  seventhpage: seventhpageReducer,
  eightpage: eightpageReducer,
  ninthpage: ninthpageReducer,
  tenthpage: tenthpageReducer,
});
export const store = createStore(
  rootReducer,
  typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);
