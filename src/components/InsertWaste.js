import React from 'react';

export function InsertWaste() {
    return(
        <form>
          <h1 class="titleOfPage fontChanger">Check off the Items you currently Recycle</h1>
          <div>
            <input id="recyclePlastic" type="checkbox" name="recyclePlastic" class="checkbox"/>
            <label for="recyclePlastic" class="labelForm">Plastic</label>
          </div>
          <div>
            <input id="recycleGlass" type="checkbox" name="recycleGlass" class="checkbox"/>
            <label for="recycleGlass" class="labelForm">Glass</label>
          </div>
          <div>
            <input id="recycleAluminum" type="checkbox" name="recycleAluminum" class="checkbox"/>
            <label for="recycleAluminum" class="labelForm">Aluminum</label>
          </div>
          <div>
            <input id="recyclePaper" type="checkbox" name="recyclePaper" class="checkbox"/>
            <label for="recyclePaper" class="labelForm">Paper</label>
          </div>
        </form>
    );
}