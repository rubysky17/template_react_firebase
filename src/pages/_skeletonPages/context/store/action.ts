import { DEFAULT_ACTION } from './constants';

export const setDefaultAction = (payload: any) => ({
  type: DEFAULT_ACTION,
  payload
});
