import React, { useEffect } from "react";
import BearCard from "./BearCard";
// import axios from "axios";
import "./BearList.css";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { bearActions } from "../redux/store";


const BearList = props => {
  const bearAction = bindActionCreators(bearActions, useDispatch());
  const bears = useSelector(state => state.bear); //ดึงข้อมูล

  // const dispatch = useDispatch() //แก้ไขข้อมูลใน store
  useEffect(() => {
    bearAction.getBears();
    // getBears();
  }, []);


  if (!bears || !bears.length) return <h2>No bears</h2>;

  return (
    <div className="bearlist-container">
      {bears.map((bear, index) => (
        <div key={index} style={{ margin: 5 }}>
          <BearCard {...bear} />
        </div>
      ))}
    </div>
  );
};

export default BearList;
