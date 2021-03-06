import { combineReducers } from 'redux';
import errors from './login/errors.reducer';
import loginMode from './login/loginMode.reducer';
import user from './login/user.reducer';
import shooters from './shooters.reducer';
import traps from './traps.reducer';
import events from './events.reducer';
import squaddingData from './squaddingData.reducer';
import schedulingData from './schedulingData.reducer';
import selectedTrap from './selectedTrap.reducer';
import currentRound from './currentRound.reducer';

const rootReducer = combineReducers({
  errors,
  loginMode,
  user,
  shooters,
  traps,
  events,
  squaddingData,
  schedulingData,
  selectedTrap,
  currentRound,
});

export default rootReducer;
