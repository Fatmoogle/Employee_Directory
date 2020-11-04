import React from "react";
import "../styles/jumbotron.css";

function Jumbotron() {
    return (
        <div className="jumbotron d-flex flex-column align-items-center p-4">
            <h1 className="display-4">Employee Directory</h1>
            <p className="lead">Search for employees by using the search bar provided.</p>
            <hr className="hr" />
        </div>
    );
}

export default Jumbotron;