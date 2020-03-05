import React from 'react';
import './InputForm.css';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'

const InputForm = props => {
    const { data, onChange } = props;

    const form = useSelector(state => state.form)
    const bears = useSelector(state => state.bear)
    const dispatch = useDispatch()


    const addBear = async () => {
        const result = await axios.post(`http://localhost/api/bears/`, form )
        // console.log(bears);
        
        dispatch({
            type: "ADD_BEARS",
            bear: { ...form, id: bears.length > 0 ? bears[bears.length - 1].id + 1 : 0 } //จริง return หน้า
        })
    }

    return (
        <div className='form-container'>
            <h2>Add bear</h2>
            <table>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>
                            <input className='inpt' type="text" onChange={(e) => dispatch({ type: "CHANGE_NAME", name: e.target.value })} />
                        </td>
                    </tr>
                    <tr>
                        <td>Weight</td>
                        <td>
                            <input className='inpt' type="number" onChange={(e) => dispatch({ type: "CHANGE_WEIGHT", weight: e.target.value })} />
                        </td>
                    </tr>
                    <tr>
                        <td>Image</td>
                        <td>
                            <input className='inpt' type="text" onChange={(e) => dispatch({ type: "CHANGE_IMG", img: e.target.value })} /> <br />
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <button className='btn' onClick={() => addBear()}>CREATE</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default InputForm