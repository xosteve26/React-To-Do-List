import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return  (
    <div style={{backgroundColor:"#100e17"}}>
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark">
            <a className="navbar-brand" href="#"><img src="https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png" width="30" height="30" class="d-inline-block align-top" alt=""/></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
                </li>
                <li class="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                </li>
                <li class="nav-item">
                    <Link className="nav-link" to="/trash">Trash</Link>
                </li>
                
                </ul>
            </div>
            </nav>
            <h1 style={{color:"white",border:"05px solid #008080", margin:"50px"}} className="display-3 text-center">
                REACT TO-DO LIST
            </h1>
            
            
        </header>
    </div>
    )
}

export default Header;