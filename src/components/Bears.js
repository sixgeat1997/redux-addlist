import React, { useEffect } from 'react'
import BearList from './BearList'
import InputForm from './InputForm'
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { bearActions } from "../redux/store";


const Bears = (props) => {


    const bearAction = bindActionCreators(bearActions, useDispatch());
    const psuPass = useSelector(state => state.psuPass);

    const logout = () => {
        bearAction.logoutPsu()
        props.history.push('/api/')
    }

    useEffect(()=>{
        if (psuPass.id != null) {
            props.history.push("/api/bears")
        }
        else {
            alert("LOGIN FAIL")
            props.history.push("/api/")
            
        }
    },[])


    return (

        <div>

            <BearList />
            <InputForm />

            <button onClick={logout}>logout </button>
        </div>
    )
}

export default Bears