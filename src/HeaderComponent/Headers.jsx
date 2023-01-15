import React from 'react';


function Headers() {

    return (
        <div>
            <div className='container'>
            <nav className="navbar navbar-expand-lg  bg-dark">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" width="65" height="50" className="d-inline-block align-top" alt="" />
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                    <a className="nav-item nav-link active text-light" href="/">Активные дела</a>
                    </div>
                </div>
                </nav>
            </div>
        </div>
    )
}

export default Headers;