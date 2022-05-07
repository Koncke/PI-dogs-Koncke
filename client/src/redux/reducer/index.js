import { orderDogs, filterDogs } from "./utils";

const initialState = {
  dogs: [],
  allDogs: [],
  temperaments: [],
  detail: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    /*~~~~~~~~~~~~~~GETS~~~~~~~~~~~~~~*/
    case "GET_DOGS":
      return {
        ...state,
        dogs: action.payload,
        allDogs: action.payload,
      };
    case "GET_TEMPERAMENTS":
      return {
        ...state,
        temperaments: action.payload,
      };

    case "GET_DETAIL":
      return {
        ...state,
        detail: action.payload,
      };
    /*~~~~~~~~~~~~~~POST~~~~~~~~~~~~~~*/
    case "POST_DOG":
      return {
        ...state,
      };

    /*~~~~~~~~~~~~~~ORDERS~~~~~~~~~~~~~~*/
    case "ORDER_DOGS":
      return {
        ...state,
        allDogs: orderDogs(action.payload, state.allDogs),
      };

    /*~~~~~~~~~~~~~~FILTERS~~~~~~~~~~~~~~*/
    case "FILTER_DOGS_TEMPS":
      return {
        ...state,
        allDogs: action.payload,
      };

    case "FILTER_CREATED":
      return {
        ...state,
        allDogs: filterDogs(action.payload, state.dogs),
      };

    /*~~~~~~~~~~~~~~SEARCH~~~~~~~~~~~~~~*/
    case "SEARCH_DOG":
      return {
        ...state,
        allDogs: action.payload,
      };

    default:
      return state;
  }
}

export default rootReducer;
