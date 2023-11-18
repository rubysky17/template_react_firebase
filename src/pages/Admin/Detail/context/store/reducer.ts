import { TOGGLE_MODAL_EDIT } from "./constants";

export const initialState = {
  isOpenEditModal: false,
  formProjectDefaultValue: {
    project_name: "Võ Mạnh Đạt",
    project_tag: [],
    project_year: 0,
    project_collection: []
  }
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
