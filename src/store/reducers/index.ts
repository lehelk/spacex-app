import { combineReducers } from 'redux'
import launcesReducer from './launchesReducer'

const reducers = combineReducers({
    launches: launcesReducer,
})

export default reducers

export type State = ReturnType<typeof reducers>
