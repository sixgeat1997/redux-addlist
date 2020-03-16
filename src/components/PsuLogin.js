import React, { useState } from 'react'
import './psu.css'
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { bearActions } from "../redux/store";

const PsuLogin = (props) => {
    console.log(props);

    const bearAction = bindActionCreators(bearActions, useDispatch());
    const psuPass = useSelector(state => state.psuPass);

    const [psu, setPsu] = useState({
        username: "",
        password: ""
    })


    const sentPsu = async () => {
        
        bearAction.loginPsu(psu)
        console.log(psuPass.id);

        if (psuPass.id != null) {
            props.history.push("/api/bears")
        }
        else {
            alert("LOGIN FAIL")
            props.history.push("/api/")
            
        }

    }

    console.log(psu);
   

        return (
            <div className="psucard" >
                <div  >
                    <h1>PSU PASSPORT</h1>
                    <input type="text" onChange={(e) => setPsu({ ...psu, username: e.target.value })} /> <br />
                    <input type="password" onChange={(e) => setPsu({ ...psu, password: e.target.value })} /><br />
                    <button onClick={sentPsu}>Click</button>
                </div>


            </div>
        )
  

}

export default PsuLogin;