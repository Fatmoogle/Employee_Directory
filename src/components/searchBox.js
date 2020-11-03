import React from "react";
import "../styles/searchBox.css";

function SearchBox(props) {
    return (
        <form>
            <div className="searchbar">
                <input 
                name="searchbox"
                value=""
                className="form-control" 
                type="text" 
                placeholder="Employee Name" 
                aria-label="Search" 
                onChange=""
                />
            </div>
            <button type="button" onClick="" class="btn btn-primary">Search</button>
        </form>
    );
}

export default SearchBox;