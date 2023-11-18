import { TOGGLE_MODAL_EDIT } from "./constants";

export const initialState = {
  isOpenEditModal: false,
  formProjectDefaultValue: {
    project_name: "Võ Mạnh Đạt",
    project_tag: ["HCM", "report", "Dat dep trai"],
    project_year: 0,
    project_collection: ["https://firebasestorage.googleapis.com/v0/b/md-woaa-project.appspot.com/o/1-1%5B777x518%5D.jpg?alt=media&token=179d2d3d-ede3-4443-a505-30346e8946c7", "https://firebasestorage.googleapis.com/v0/b/md-woaa-project.appspot.com/o/1-1%5B777x518%5D.jpg?alt=media&token=179d2d3d-ede3-4443-a505-30346e8946c7" ,"https://firebasestorage.googleapis.com/v0/b/md-woaa-project.appspot.com/o/1-1%5B777x518%5D.jpg?alt=media&token=179d2d3d-ede3-4443-a505-30346e8946c7", "https://firebasestorage.googleapis.com/v0/b/md-woaa-project.appspot.com/o/1-1%5B777x518%5D.jpg?alt=media&token=179d2d3d-ede3-4443-a505-30346e8946c7"]
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
