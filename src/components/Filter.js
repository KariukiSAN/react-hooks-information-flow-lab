import React from "react";
import React, {useState} from "react";

function Filter ({onCategoryChange}){
    return (
        <div className="filter">
            <select name= "filter" onChange= {onCategoryChange}>
                <option value="All">Filter by Category</option>
                <option value="Dairy">Dairy</option>
                <option value="Dessert">Dessert</option>
                <option value = "Produce"> Produce</option>
            </select>
            </div>
    );

}

export default  Filter;
