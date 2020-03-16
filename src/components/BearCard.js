import React from 'react';
// import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import './BearCard.css';
import { bindActionCreators } from "redux";
import { bearActions } from "../redux/store";


const BearCard = props => {

    const form = useSelector(state => state.form)
    const bearAction = bindActionCreators(bearActions, useDispatch());


    const deleteBear = async () => {
        // const result = await axios.delete(`http://localhost/api/bears/${props.id}`)
        bearAction.deleteBear({ id: props.id })
        // dispatch({
        //     type: "DELETE_BEARS",
        //     id: props.id
        // })
    }

    const updateBear = async () => {
        bearAction.updateBear({ ...form, id: props.id })
        // const result = await axios.put(`http://localhost/api/bears/${props.id}`, form)
        // dispatch({
        //     type: "UPDATE_BEARS",
        //     id: props.id,
        //     bear: { ...form, id: props.id }
        // })
    }


    return (
        <div className='bearcard-container'>
            <div className='bearcard' style={{ backgroundImage: `url('${props.img}')` }}>
                <p className='bearcard-weight'>{props.weight}</p>
                <p className='bearcard-name'>{props.name}</p>
            </div>
            <div className='bearcard-actions'>
                <div onClick={updateBear}>Update</div>
                <div onClick={deleteBear}>Delete</div>
            </div>
        </div>

    )
}

export default BearCard;