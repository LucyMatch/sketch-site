import { combineReducers } from 'redux'
import { 
    SKETCHES_REQ ,
    SKETCHES_SUCCESS,
    SKETCHES_FAIL
} from '../actions'

const defaultApp = {
    error : undefined,
    sketches : []   // @TODO: should make this a OBJ - with ids -> reformat data with normalizer on server
}

const app = ( state = defaultApp, action) => {
    switch(action.type) {
        case SKETCHES_REQ :
            return {...state, isFetching: true}
        case SKETCHES_SUCCESS :
            return{...state, isFetching: false, sketches: action.data}
        case SKETCHES_FAIL :
            return{...state, isFetching: false, error : action.error}
        default :
            return state
    }
}

const rootReducer = combineReducers({
    app
})

export default rootReducer