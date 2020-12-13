import React from 'react';
import './Card.css';

const Card = (props) => {

    return (
        <div className="wrapper">
            <h1>id:{props.id}</h1>
            <h1>id:{props.name}</h1>
            <h1>id:{props.date}</h1>
        </div>
    );
};

export default Card;
