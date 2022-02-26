import React from 'react';

export function InsertEnergy() {
    return(
        <form>
          <div>
            <label for="NaturalGas" className="formInput labelForm">Natural Gas Usage:</label><br/>
            <input type="text" name="NaturalGas" id="NaturalGas" className="textBox formInput"/>
            <select className="selectForm">
              <option>Dollars</option>
              <option>Therms</option>
            </select>
          </div>
          <div>
            <label for="Electricity" className="formInput labelForm">Electricity:</label><br/>
            <input type="text" name="Electricity" id ="Electricity" className="textBox formInput"/>
            <select className="selectForm">
              <option>Dollars</option>
              <option>kWh</option>
            </select>
          </div>
          <div>
            <label for="FuelOil" className="formInput labelForm">Fuel Oil:</label><br/>
            <input type="text" name="FuelOil" id="FuelOil" className="textBox formInput"/>
            <select className="selectForm">
              <option>Dollars</option>
              <option>Gallons</option>
            </select>
          </div>
          <div>
            <label for="Propane" className="formInput labelForm">Propane:</label><br/>
            <input type="text" name="Propane" id="Propane" className="textBox formInput"/> 
            <select class="selectForm">
              <option>Dollars</option>
              <option>Gallons</option>
            </select>
          </div>
        </form>
    );
}


