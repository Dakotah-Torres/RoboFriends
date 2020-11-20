import { 
    CHANGE_SEARCH_FIELD, 
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED, 
    SEARCH_EMAIL
} from './constants'


//This is the code for searching the robotes by Name or Email
export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD, 
    payload: text
})

export const setSearchEmail = (text) => ({
    type: SEARCH_EMAIL,
    payload: text
})

//This is the code for requesting the robots from the API
export const requestRobots = () => (dispatch) => {
    dispatch({type : REQUEST_ROBOTS_PENDING});
    fetch('http://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => dispatch({type: REQUEST_ROBOTS_SUCCESS, payload: data}))
        .catch( error => dispatch({type: REQUEST_ROBOTS_FAILED, payload: error}))
}

