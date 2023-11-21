import { FETCH_EDIT_DATA, TOGGLE_MODAL_EDIT, TOGGLE_MODAL_CREATE, PROJECT_DEFAULT, EXPLORE_DEFAULT, FETCH_EDIT_DATA_PROJECT_SUCCESS, FETCH_EDIT_DATA_PROJECT_ERROR, FETCH_EDIT_DATA_EXPLORE_SUCCESS, FETCH_EDIT_DATA_EXPLORE_ERROR } from "./constants";



export const initialState = {
  isOpenEditModal: false,
  isOpenCreateModal: false,
  formProjectDefaultValue: PROJECT_DEFAULT,
  formExploreDefaultValue: EXPLORE_DEFAULT,
  isLoadingEdit: false,
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case TOGGLE_MODAL_EDIT:
      return { ...state, isOpenEditModal: action.payload };
    
    case TOGGLE_MODAL_CREATE:
      return { ...state, isOpenCreateModal: action.payload, formProjectDefaultValue: PROJECT_DEFAULT};
    
    case FETCH_EDIT_DATA:
      return { ...state, isLoadingEdit: true };

    case FETCH_EDIT_DATA_PROJECT_SUCCESS:
      return { ...state, isLoadingEdit: false, formProjectDefaultValue: action.payload };
    
    case FETCH_EDIT_DATA_PROJECT_ERROR:
      return {
        ...state, isLoadingEdit: false, formProjectDefaultValue: PROJECT_DEFAULT
      };
    
    case FETCH_EDIT_DATA_EXPLORE_SUCCESS:
      return { ...state, isLoadingEdit: false, formExploreDefaultValue: action.payload };
    
    case FETCH_EDIT_DATA_EXPLORE_ERROR:
      return {
        ...state, isLoadingEdit: false, formExploreDefaultValue: EXPLORE_DEFAULT};
    
    default:
      throw new Error("Action invalid");
  }
};

export default reducer;
