
import type { Action } from '../actions/types';
import { SET_USER, SET_LANGUAGE } from '../actions/user';

export type State = {
    name: string,
    language: string,
}

const initialState = {
  name: '',
  language: '',
};

export default function (state:State = initialState, action:Action): State {
  if (action.type === SET_USER) {
    return {
      ...state,
      name: action.payload,
    };
  }
  if (action.type === SET_LANGUAGE) {
    return {
      ...state,
      language: action.payload,
    };
  }
  return state;
}
