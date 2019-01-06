import {combineReducers} from 'redux';
import FormReducer  from './FormReducer';
import TableReducer from './TableReducer';

const reducers = combineReducers({
    FormReducer,
    TableReducer
})

export default reducers;