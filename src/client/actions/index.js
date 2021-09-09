
import fetch from "cross-fetch"

/* 
-------------------------------
actions
-------------------------------
*/

export const SKETCHES_REQ = 'SKETCHES_REQ'
export const SKETCHES_SUCCESS = 'SKETCHES_SUCCESS'
export const SKETCHES_FAIL = 'SKETCHES_FAIL'

export const reqSketches = () => ({
	type: 'SKETCHES_REQ'
})
export const recSketches = (data) => ({
	type: 'SKETCHES_SUCCESS',
	data
})
export const errSketches = (error) => ({
	type: 'SKETCHES_FAIL',
	error
})

/*
-------------------------------
Thunk action creators
-------------------------------
*/

export const getSketches = () => {

    //thunk can dispatch actions itself
    //by passing the dispatch method as an argument to the function

    return (dispatch, getState) => {
            if(shouldFetchSketches(getState())){

            //first action : app state is updated - api call has begun
            dispatch( reqSketches() )

            //returning a value , in turn this value gets passed as the return value of the dispatch method
            //we are retruning a promise to wait for.. 
            return fetch('api/sketch-list')

            .then( 
                (res) => dispatch( recSketches(res) ),
                (err) => dispatch( errSketches('GET SKETCHES: ' + err[0].message) )
            )
        }
    }
}


/*
-------------------------------
functions
-------------------------------
*/

function shouldFetchSketches(state) {
    if (Object.keys(state.sketches).length > 0) {
        return false
    } else {
        return true
    }
}
