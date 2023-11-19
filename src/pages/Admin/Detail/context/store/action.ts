import { FETCH_EDIT_DATA, FETCH_EDIT_DATA_ERROR, FETCH_EDIT_DATA_SUCCESS, TOGGLE_MODAL_CREATE, TOGGLE_MODAL_EDIT } from './constants';

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

export const fetchEditDataSuccess= (payload: any) => ({
  type: FETCH_EDIT_DATA_SUCCESS,
  payload
});

export const fetchEditDataError= () => ({
  type: FETCH_EDIT_DATA_ERROR,
});
