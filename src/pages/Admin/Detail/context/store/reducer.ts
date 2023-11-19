import { FETCH_EDIT_DATA,FETCH_EDIT_DATA_SUCCESS, FETCH_EDIT_DATA_ERROR , TOGGLE_MODAL_EDIT, TOGGLE_MODAL_CREATE, PROJECT_DEFAULT } from "./constants";



export const initialState = {
  isOpenEditModal: false,
  isOpenCreateModal: false,
  formProjectDefaultValue: PROJECT_DEFAULT,
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

    case FETCH_EDIT_DATA_SUCCESS:
      console.log('reducer', action.payload )
      return { ...state, isLoadingEdit: false, formProjectDefaultValue: action.payload };
    
    case FETCH_EDIT_DATA_ERROR:
      return {
        ...state, isLoadingEdit: false, formProjectDefaultValue: PROJECT_DEFAULT};
    
    default:
      throw new Error("Action invalid");
  }
};

export default reducer;
