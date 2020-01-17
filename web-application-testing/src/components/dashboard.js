import React from "react";


const Dashboard = props => {
    console.log(props);

return (
    <div className='btn-cont'>
        <button className="count-btn" onClick={props.countStrikes}> Strike! </button>
        <button className="count-btn" onClick={props.countBalls}> Ball! </button>
        <button className="count-btn" onClick={props.countHits}> Hit! </button>
        <button className="count-btn" onClick={props.countFouls}> Foul! </button>
    </div>
);
};


export default Dashboard;