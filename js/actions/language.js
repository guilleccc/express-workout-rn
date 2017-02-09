
import type { Action } from './types';

export const SET_LANGUAGE = 'SET_LANGUAGE';

export function setLanguage(language:string):Action {
  return {
    type: SET_LANGUAGE,
    payload: language,
  };
}
