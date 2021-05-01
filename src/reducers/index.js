import formVisibleReducer from './form-visible-reducer';
import kegListReducer from './keg-list-reducer';
import editVisibleReducer from './edit-visible-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterKegList: kegListReducer,
  editing: editVisibleReducer
});

export default rootReducer;