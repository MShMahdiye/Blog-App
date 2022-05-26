import { createStore } from "redux";
import RootReducer from "../Reducers/Reducer";

const store = createStore(RootReducer);

export default store;