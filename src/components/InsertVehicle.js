import React from 'react';

export function InsertVehicle() {
    return(
        <form>
            <label htmlFor="WeeklyMiles" className="formInput labelForm">Miles Driven Per Day:</label><br/>
            <input type="text" name="WeeklyMiles" id="WeeklyMiles" className="textBox formInput"/><br/>
            <label htmlFor="MilesPerGallon" className="formInput labelForm">Miles Per Gallon of Vehicle:</label><br/>
            <input type="text" name="WeeklyMiles" id="MilesPerGallon" className="textBox formInput"/><br/>
            <label htmlFor="PublicTransportation" className="formInput labelForm">Hours Spent on Public Transportation Daily:</label><br/>
            <input type="text" name="WeeklyMiles" id="PublicTransportation" className="textBox formInput"/>
        </form>
    );
}