export function initializeList(data) {
    return {
        type: "INITIALIZE_LIST",
        payload: data,
    }
}

export function addToList(data) {
    return {
        type: "ADD_TO_LIST",
        payload: data,
    }
}

export function removeFromList(index) {
    return {
        type: "REMOVE_FROM_LIST",
        payload: index,
    }
}

export function updateList(data) {
    return {
        type: "UPDATE_LIST",
        payload: data
    }
}