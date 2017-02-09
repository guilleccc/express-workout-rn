
import type { Action } from './types';

export const SET_USER = 'SET_USER';
export const SET_LANGUAGE = 'SET_LANGUAGE';

export function setUser(user:string):Action {
  return {
    type: SET_USER,
    payload: user,
  };
}
export function setLanguage(language:string):Action {
  return {
    type: SET_LANGUAGE,
    payload: language,
  };
}

