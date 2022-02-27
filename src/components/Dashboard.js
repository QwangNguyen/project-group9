import React from 'react'; 
import { Avatar } from './Avatar';
import ProgressBar from 'react-bootstrap/ProgressBar';

export function Dashboard() {


    return(
        <main>
            <h1>Hello User</h1>
            {/* Profile Picutre */}
            <div className='container spaceBetween'>
                <div className='dashboardCard'>
                    <p className='bold'>CO2 Generated in One year:</p>
                    <p>1350lbs</p>
                </div>
                <div className='dashboardCard'>
                    <p className='bold'>Sustainability Score:</p>
                    <p>40</p>
                </div>
                <div className='dashboardCard'>
                    <p className='bold'>Earths Used:</p>
                    <p>2.5</p>
                </div>
                <div className='dashboardCard'>
                    <p className='bold'>Earth Day:</p>
                    <p> March 25th</p>
                </div>
            </div>
            <p>Questions answered correct</p>
            <ProgressBar variant="primary" now={60} />
            <p>Improvement</p>
            <ProgressBar variant="dark" now={25} />
        </main>
    );
}

{/*return(
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
     
    ); */}