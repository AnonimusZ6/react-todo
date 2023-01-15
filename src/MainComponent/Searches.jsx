import React from "react";
import { useState } from "react";
import MainComp from "./MainComp";


function Searches() {
    //crate states
    const [title, setTitle] = useState('');
    const [value, setValue] = useState('');
    const [datarr, setDatarr] = useState([]);


    //get value of title
    const changeHandler = (event) => {
        setTitle(event.target.value);
    }

    //get value of textarea
    const changeTextarea = (event) => {
        setValue(event.target.value);
    }

    let count = 1;
    
    //pushed array of objects
    const arrPushed = () => {
        const copy = Object.assign([], datarr);
        copy.push({
            title: title,
            value: value,
            id: count++,
        });
        setDatarr(copy);
    }

    //render
    return (
        <div>
        <div className="container">
            <div className="col-12">
          <label htmlFor="address" className="form-label">Список дел</label>
          <input type="text" className="form-control" id="address" placeholder="Введите дело" required="" onChange={changeHandler} />
          <br />
          <div className="mb-3">
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Введите описание" onChange={changeTextarea}></textarea>
            </div>
            <button type="button" className="btn btn-primary" onClick={() => {
                arrPushed();
            }}>Добавить</button>
        </div>
        <br />
        <>
        <MainComp datarr={ datarr } setDatarr={ setDatarr }/>
        </>
        </div>
    </div>
    )
}

export default Searches;