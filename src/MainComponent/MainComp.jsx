import React from "react";

function MainComp({ datarr, setDatarr }) {

    //delete arr
    function deleteCard(i) {
        setDatarr([...datarr.slice(0, i), ...datarr.slice(i + 1)]);
    }

    //renders result
    const result = datarr.map((text, index) => {

        return (
            <>
            <div className="card">
                <div className="card-body">
                <h1 key={text.id}>{ text.title }</h1>
                <p key={text.id}>{ text.value }</p>
                <button className="btn btn-danger" onClick={() => deleteCard(index)}>Удалить</button>
                </div>
            </div>
            <br />
            </>
            )
    });


    return (
        <div>
            <div className="container">
                { result }
            </div>
        </div>
    );
}


export default MainComp;