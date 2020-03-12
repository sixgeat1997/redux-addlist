import React from "react";
import "./InputForm.css";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { bearActions } from "../redux/store";


const InputForm = props => {
    const { data, onChange } = props;

    const form = useSelector(state => state.form);
    const bears = useSelector(state => state.bear);
    const bearAction = bindActionCreators(bearActions, useDispatch());
    const dispatch = useDispatch();

    const addBear = async () => {

        bearAction.AddBear({ ...form, id: bears.length > 0 ? bears[bears.length - 1].id + 1 : 0 })
        // dispatch({
        //     type: "ADD_BEARS",
        //     bear: {
        //         ...form,
        //         id: bears.length > 0 ? bears[bears.length - 1].id + 1 : 0
        //     } //จริง return หน้า
        // });
    };

    return (
        <div className="form-container">
            <h2>Add bear</h2>
            <table>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>
                            <input
                                className="inpt"
                                type="text"
                                onChange={e =>
                                    bearAction.change_name(e.target.value)
                                }
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Weight</td>
                        <td>
                            <input
                                className="inpt"
                                type="number"
                                onChange={e =>
                                    bearAction.change_weight(e.target.value)
                                }
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Image</td>
                        <td>
                            <input
                                className="inpt"
                                type="text"
                                onChange={e =>
                                    bearAction.change_img(e.target.value)
                                }
                            />{" "}
                            <br />
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <button className="btn" onClick={() => addBear()}>
                                CREATE
              </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default InputForm;
