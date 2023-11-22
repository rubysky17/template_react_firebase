import { APP_KEY_SEARCH } from "./constants";

export const initialState = {
  keySearch: "",
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case APP_KEY_SEARCH:
      return { ...state, keySearch: action.payload };
    
    default:
      throw new Error("Action invalid");
  }
};

export default reducer;
