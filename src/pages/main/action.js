import Yes from '../../assets/check-solid.svg';
import No from '../../assets/xmark-solid.svg';
import './../main/main.css';
import React, { useState } from 'react';
import axios from "axios";

function Action(props) {
    const [confirmation, setConfirmation] = useState(false);

    const itWasClicked = (check) => {
        if (check === true) {
            setConfirmation(true);
        }
    }

    if (props.response.status === 204){
        return (
            <div className="row-buttons">
                <div className='column-button'>
                    <button 
                    type="button" 
                    className="ok-button"
                    onClick={() => itWasClicked(true)}
                    >
                        <img src={Yes} alt="Yes"></img>
                    </button>
                </div>
                <div className='column-button'>
                    <button 
                    type="button" 
                    className="button"
                    onClick={() => itWasClicked(false)}
                    >
                    <img src={No} alt="No"></img>
                    </button>
                </div> 
            </div>
        )
    }

    if (props.response.wentToGym === true){ 
        return (
            <p className='text'>
                Congrats champion, keep going!
            </p>
        )
    }

    if (props.response.wentToGym === false){ 
        return (
            <p className='text'>
                Oh no, go to gym immediately!
            </p>
        )
    }
}

export default Action;