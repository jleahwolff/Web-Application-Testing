import React from 'react';
import Dashboard from './dashboard';

const Display = props => {
    const { hits, balls, fouls, strikes } = props.state;
    console.log(props);

return (
    <div className="cont">
        <h2 className="header"> Here, batter, batter, batter!</h2>
        <Dashboard
            countHits={props.countHits}
            countFouls={props.countFouls}
            countBalls={props.countBalls}
            countStrikes={props.countStrikes}
            state={props.state}
            />
            <div className="numbers">
                <div className="strikes">{strikes}</div>
                <div className="balls">{balls}</div>
                <div className="hits">{hits}</div>
                <div className="fouls">{fouls}</div>
            </div>
    </div>
    )
};

export default Display;