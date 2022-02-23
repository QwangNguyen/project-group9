import React from 'react';

export function InsertVehicle() {
    return(
        <form>
            <label for="WeeklyMiles" className="formInput labelForm">Miles Driven Per Day:</label><br/>
            <input type="text" name="WeeklyMiles" id="WeeklyMiles" className="textBox formInput"/><br/>
            <label for="MilesPerGallon" className="formInput labelForm">Miles Per Gallon of Vehicle:</label><br/>
            <input type="text" name="WeeklyMiles" id="MilesPerGallon" className="textBox formInput"/><br/>
            <label for="PublicTransportation" className="formInput labelForm">Hours Spent on Public Transportation Daily:</label><br/>
            <input type="text" name="WeeklyMiles" id="PublicTransportation" className="textBox formInput"/>
        </form>
    );
}