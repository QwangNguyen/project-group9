import React from 'react'; 
import { Avatar } from './Avatar';

export function Dashboard() {
    return(
        <div>
        
            <main>
                <div class="container">
                    < Avatar />
                </div>       

                <div class="dashboardContainer">
                    <p class="category bold">Net Emissions</p>
                    <p>130 CO2 Metrics Tons
                    </p>
                </div>
            </main>
        </div>       
    );
}