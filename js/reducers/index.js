
import { combineReducers } from 'redux';

import drawer from './drawer';
import cardNavigation from './cardNavigation';
import user from './user';
import list from './list';
import language from './language';

export default combineReducers({
  language,
  drawer,
  user,
  list,
  cardNavigation,

});
