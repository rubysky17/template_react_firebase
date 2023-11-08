import { DEFAULT_ACTION } from "./constants";
export const initialState = {
  defaultState: false,
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case DEFAULT_ACTION:
      return { ...state, defaultState: action.payload };
    default:
      throw new Error("Action invalid");
  }
};

export default reducer;
