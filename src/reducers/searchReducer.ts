import {Action} from '../actions/searchAction'
export type InitialState = {
    searchPrase?: string,
    machedCollection: Array<any>
}

const intialState = {
    searchPrase: '',
    machedCollection: []
}

export const reducer = (state:InitialState = intialState, action:Action) => {
    switch(action.type) {
        case "SEARCH_PRAHSE_SUCCESS":
            return {
                ...state,
                machedCollection: [...action.payload]
            }
        default:
            return state
    }
}