import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import axios from "axios";
import logger from 'redux-logger';

const loginForm = [{
    id: ''
}]

const initform = [{
    name: '',
    weight: 0,
    img: ''
}]

export const bearActions = {

    getBears: () => async (dispatch) => {
        const response = await axios.get(`http://localhost/api/bears`)
        const responseBody = await response.data;
        console.log('response: ', responseBody)
        dispatch({ type: "GET_BEARS", bears: responseBody });
    },
    AddBear: (bears) => async (dispatch) => {
        await axios.post(`http://localhost/api/bears/`, bears);
        console.log(bears);
        dispatch({ type: 'ADD_BEARS', bear: bears })
    },
    deleteBear: (b) => async (dispatch) => {
        await axios.delete(`http://localhost/api/bears/${b.id}`)
        console.log(b);
        dispatch({ type: 'DELETE_BEARS', id: b.id })
    },
    updateBear: (b) => async (dispatch) => {
        await axios.put(`http://localhost/api/bears/${b.id}`, b)
        dispatch({ type: 'UPDATE_BEARS', bear: b, id: b.id })
    },
    change_weight: (w) => (dispatch) => {
        dispatch({ type: 'CHANGE_WEIGHT', weight: w })
    },
    change_name: (n) => ({ type: 'CHANGE_NAME', name: n }),
    change_img: (i) => ({ type: 'CHANGE_IMG', img: i }),


    loginPsu: (login) => async (dispatch) => {
        const result = await axios.post(`http://localhost/api/`, {...login});
        console.log(result.data.GetUserDetailsResult.string[0]);
        dispatch({ type: 'LOGIN', id: result.data.GetUserDetailsResult.string[0] })

    },
    logoutPsu : () => ({type : "LOGOUT"})

}

const loginReducer = (data = loginForm, action) => {
    
    
    switch (action.type) {
        case "LOGIN":
            return {
                ...data,
                id: action.id
            }
        case "LOGOUT":
            return {
                ...data,
                id: ""
            }
    }
    return data
}


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
    form: formReducer,
    psuPass: loginReducer,

})

const store = createStore(rootReducer, applyMiddleware(logger, thunk))

export default store