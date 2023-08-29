import React from 'react';
import '../styles/Card.css'

const Card = (props) => {
    const handleCardClick = () => {
        props.onClick();
    };

    return (
        <div  className="card" onClick={handleCardClick}>
            <img className='imgCard' src={props.image}/>
            {/* <p>{props.name}</p> */}
        </div>
    )

}

export default Card;
