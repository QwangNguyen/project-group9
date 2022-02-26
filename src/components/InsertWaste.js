import React from 'react';

export function InsertWaste() {
    return(
        <form>
          <h1 className="titleOfPage fontChanger">Check off the Items you currently Recycle</h1>
          <div>
            <input id="recyclePlastic" type="checkbox" name="recyclePlastic" className="checkbox"/>
            <label for="recyclePlastic" className="labelForm">Plastic</label>
          </div>
          <div>
            <input id="recycleGlass" type="checkbox" name="recycleGlass" className="checkbox"/>
            <label for="recycleGlass" className="labelForm">Glass</label>
          </div>
          <div>
            <input id="recycleAluminum" type="checkbox" name="recycleAluminum" className="checkbox"/>
            <label for="recycleAluminum" className="labelForm">Aluminum</label>
          </div>
          <div>
            <input id="recyclePaper" type="checkbox" name="recyclePaper" className="checkbox"/>
            <label for="recyclePaper" className="labelForm">Paper</label>
          </div>
        </form>
    );
}