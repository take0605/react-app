import React from 'react';
import './Card.css';


const Card = (props) => {

    return (

        <table>

            <tr>
                <th>{props.id}</th>
                <th>{props.name}</th>
                <th>{props.date}</th>
            </tr>
        </table>
    );
};

export default Card;
