import { FETCH_EDIT_DATA, FETCH_EDIT_DATA_EXPLORE_ERROR, FETCH_EDIT_DATA_EXPLORE_SUCCESS, FETCH_EDIT_DATA_PROJECT_ERROR, FETCH_EDIT_DATA_PROJECT_SUCCESS, TOGGLE_MODAL_CREATE, TOGGLE_MODAL_EDIT } from './constants';

export const setToggleModalEdit = (payload: any) => ({
  type: TOGGLE_MODAL_EDIT,
  payload
});

export const setToggleModalCreate = (payload: any) => ({
  type: TOGGLE_MODAL_CREATE,
  payload
});

export const fetchEditData= () => ({
  type: FETCH_EDIT_DATA,
});

export const fetchEditDataProjectSuccess= (payload: any) => ({
  type: FETCH_EDIT_DATA_PROJECT_SUCCESS,
  payload
});

export const fetchEditDataProjectError= () => ({
  type: FETCH_EDIT_DATA_PROJECT_ERROR,
});


export const fetchEditDataExploreSuccess= (payload: any) => ({
  type: FETCH_EDIT_DATA_EXPLORE_SUCCESS,
  payload
});

export const fetchEditDataExploreError= () => ({
  type: FETCH_EDIT_DATA_EXPLORE_ERROR,
});
