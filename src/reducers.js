import {
    CHANGE_SEARCH_FIELD, 
    REQUEST_ROBOTS_PENDING, 
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED, 
    SEARCH_EMAIL
} from './constants'
const initalState ={
    searchField: '',
    emailSearchField: '', 
    emailSearchActive: false 
}

export const searchRobots = (state= initalState, action={}) => {
    switch(action.type) {
        case CHANGE_SEARCH_FIELD:
            return {...state, searchField: action.payload, emailSearchActive: false}
        case SEARCH_EMAIL: 
            return {...state,  emailSearchField: action.payload, emailSearchActive: true,}
        default: 
            return state; 
    }
}

const initReqRoboState = {
    isPending: false,
    robots: [], 
    error: ''
}
export const requestRobots = (state= initReqRoboState, action={}) => {
    switch(action.type){
        case REQUEST_ROBOTS_PENDING:
            return {...state, isPending: true }
        case REQUEST_ROBOTS_SUCCESS:
            return {...state, robots:  action.payload , isPending: false}
        case REQUEST_ROBOTS_FAILED:
            return {...state, error: action.payload, isPending: false }
        default:
            return state;
    }
}

