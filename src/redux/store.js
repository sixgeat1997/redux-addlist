import { createStore, combineReducers } from 'redux'

const initform = [{
    name: '',
    weight: 0,
    img: ''
}]

const formReducer = (data = initform, action) => {
    switch (action.type) {
        case "CHANGE_NAME":
            return {
                ...data,
                name: action.name
            }
        case "CHANGE_WEIGHT":
            return {
                ...data,
                weight: action.weight
            }
        case "CHANGE_IMG":
            return {
                ...data,
                img: action.img
            }
    }
    return data

}


const bearReducer = (bears = [], action) => {
    switch (action.type) {
        case "GET_BEARS":
            return action.bears
        case "ADD_BEARS":
            return [...bears, action.bear]
        case "DELETE_BEARS":
            return bears.filter(bear => +action.id !== +bear.id)
        case "UPDATE_BEARS":
            return bears.map(bear => {
                if (+bear.id === +action.id)
                    return action.bear;
                else
                    return bear;
            })
    }

    return bears

}

const rootReducer = combineReducers({
    bear: bearReducer,
    form: formReducer
})

export const store = createStore(rootReducer)