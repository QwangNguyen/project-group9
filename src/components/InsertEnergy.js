import React from 'react';

export function InsertEnergy() {
    return(
        <form>
          <div>
            <label for="NaturalGas" class="formInput labelForm">Natural Gas Usage:</label><br/>
            <input type="text" name="NaturalGas" id="NaturalGas" class="textBox formInput"/>
            <select class="selectForm">
              <option>Dollars</option>
              <option>Therms</option>
            </select>
          </div>
          <div>
            <label for="Electricity" class="formInput labelForm">Electricity:</label><br/>
            <input type="text" name="Electricity" id ="Electricity" class="textBox formInput"/>
            <select class="selectForm">
              <option>Dollars</option>
              <option>kWh</option>
            </select>
          </div>
          <div>
            <label for="FuelOil" class="formInput labelForm">Fuel Oil:</label><br/>
            <input type="text" name="FuelOil" id="FuelOil" class="textBox formInput"/>
            <select class="selectForm">
              <option>Dollars</option>
              <option>Gallons</option>
            </select>
          </div>
          <div>
            <label for="Propane" class="formInput labelForm">Propane:</label><br/>
            <input type="text" name="Propane" id="Propane" class="textBox formInput"/> 
            <select class="selectForm">
              <option>Dollars</option>
              <option>Gallons</option>
            </select>
          </div>
        </form>
    );
}


