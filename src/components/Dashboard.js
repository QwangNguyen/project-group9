import React from 'react'; 
import { Avatar } from './Avatar';

export function Dashboard() {
    return(
        <div>
        
            <main>
                <div className="container">
                    < Avatar />
                </div>       

                <div className="dashboardContainer">
                    <p className="category bold">Net Emissions</p>
                    <p>130 CO2 Metrics Tons
                    </p>
                </div>
            </main>
        </div>       
    );
}