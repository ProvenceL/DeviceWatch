import { combineReducers} from 'redux';
import deviceWatch from './deviceWatch';
import device from './device';
import company from './company';
import check from './check';

export default combineReducers({
    deviceWatch,
    company,
    device,
    check
});
