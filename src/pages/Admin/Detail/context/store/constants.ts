import moment from "moment";

const scope = 'adminDetail/';
export const TOGGLE_MODAL_EDIT = scope  + 'TOGGLE_MODAL_EDIT';
export const TOGGLE_MODAL_CREATE = scope  + 'TOGGLE_MODAL_CREATE';
export const FETCH_EDIT_DATA = scope  + 'FETCH_EDIT_DATA';
export const FETCH_EDIT_DATA_PROJECT_SUCCESS = scope  + 'FETCH_EDIT_DATA_PROJECT_SUCCESS';
export const FETCH_EDIT_DATA_PROJECT_ERROR = scope  + 'FETCH_EDIT_DATA_PROJECT_ERROR';
export const FETCH_EDIT_DATA_EXPLORE_SUCCESS = scope  + 'FETCH_EDIT_DATA_EXPLORE_SUCCESS';
export const FETCH_EDIT_DATA_EXPLORE_ERROR = scope  + 'FETCH_EDIT_DATA_EXPLORE_ERROR';

export const PROJECT_DEFAULT = {
    project_name: "",
    project_tag: [],
    project_year: moment().unix() * 1000,
    project_collection: [],
  }


export const EXPLORE_DEFAULT = {
  explore_banner: "",
  explore_tag: [],
  explore_name: "",
  explore_description: "",
  explore_collection: [],
}