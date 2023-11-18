import { TOGGLE_MODAL_EDIT } from "./constants";

export const initialState = {
  isOpenEditModal: true,
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case TOGGLE_MODAL_EDIT:
      return { ...state, isOpenEditModal: action.payload };
    default:
      throw new Error("Action invalid");
  }
};

export default reducer;
