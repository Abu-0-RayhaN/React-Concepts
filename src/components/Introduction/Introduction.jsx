import React from "react";
import first from "../../assets/images/first.jpg"
export default function Introduction(){
    return (
        <div className="aligning">
            <h1>Welcome to Cumilla Polytechnic.</h1>
            <p>This Is An Institute Base In Cumilla, Bangladesh. Total Campus Area Is 26 Acre And Has Several buildings.
                Two Boys Hostals and One Girls Hostal. We Have Almost 5 Thousands Students Studying In This Institute With Close To Hundred 
                Of Teacher And Instructors.
            </p><br />
            <img src={first} alt="Cumilla Polytechnic Institute" className="imgStyle" />
        </div>
    )
}