import React, { useEffect } from 'react';
import BearCard from './BearCard';
import axios from 'axios'
import './BearList.css';
import { useDispatch, useSelector } from 'react-redux'


const BearList = props => {

    const bears = useSelector(state => state.bear) //ดึงข้อมูล
    const dispatch = useDispatch() //แก้ไขข้อมูลใน store

    const getBears = async () => {
        const result = await axios.get(`http://localhost/api/bears`)
        const action = {
            type: 'GET_BEARS',
            bears: result.data
        }  // actionที่เรากำหนด ดึงข้อมูลมา
        dispatch(action) //ส่งค่ามาจาก store
        console.log(result.data);
        
    }

    useEffect(() => {
        getBears()
    }, [])

    if (!bears || !bears.length)
        return (<h2>No bears</h2>)

    return (
        <div className='bearlist-container'>
            {
                bears.map((bear, index) => (
                    <div key={index} style={{ margin: 5 }}>
                        <BearCard  {...bear} />
                    </div>
                ))
            }
        </div>

    )
}

export default BearList;