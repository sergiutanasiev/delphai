export type Action = {
    type: "SEARCH_PRAHSE_SUCCESS",
    payload: Array<any>
}

export const setMatchedCollection = (collection: Array<any>):Action => {
    return {
        type: "SEARCH_PRAHSE_SUCCESS",
        payload: collection
    }
}