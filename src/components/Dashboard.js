import React from 'react'; 
import { Avatar } from './Avatar';
import ProgressBar from 'react-bootstrap/ProgressBar';

export function Dashboard() {


    return(
        <main>
            <h1 className='text-center bold greeting'>Hello User</h1>
            {/* Profile Picutre */}
            <div className='container spaceBetween centerElement'>
                <div className='dashboardCard'>
                    <p className='bold titleCard'>CO2 Generated in One year:</p>
                    <p className='dataDisplay'>1350lbs</p>
                </div>
                <div className='dashboardCard'>
                    <p className='bold titleCard'>Sustainability Score:</p>
                    <p className='dataDisplay'>40</p>
                </div>
                <div className='dashboardCard'>
                    <p className='bold titleCard'>Equivalent Earths Used:</p>
                    <p className='dataDisplay'>2.5</p>
                </div>
                <div className='dashboardCard'>
                    <p className='bold titleCard'>Earth Day:</p>
                    <p className='dataDisplay'> March 25th</p>
                </div>
            </div>
            <p className='bold titleCard firstTitleCard'>Questions answered correct:</p>
            <ProgressBar variant="success" animated now={60} label={60 + '%'} className='barChart'/>
            <p className='bold titleCard'>Improvement:</p>
            <ProgressBar variant="primary" animated now={25}  label={40 + '%'}className='barChart'/>
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