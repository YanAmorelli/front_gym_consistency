import Yes from '../../assets/check-solid.svg';
import No from '../../assets/xmark-solid.svg';
import './../main/main.css';
import React, { useEffect } from 'react';
import { getToday } from '../../util/date';
import axios from "axios";

function Action(props, onWasChecked) {

    useEffect(() => {
    }, [props.response.wentToGym])

    const sendPost = (check) => {       
        let today = getToday();
        axios.post('http://localhost:8080/', {
            date: today,
            ok: check
          })
          .then(function (response) {
            window.location.reload(true)
          })
          .catch(function (error) {
            console.error(error);
        });
    }

    if (props.response.status === 204){
        return (
            <div className="row-buttons">
                <div className='column-button'>
                    <button 
                    type="button" 
                    className="ok-button"
                    onClick={() => sendPost(true)}
                    >
                        <img src={Yes} alt="Yes"></img>
                    </button>
                </div>
                <div className='column-button'>
                    <button 
                    type="button" 
                    className="button"
                    onClick={() => sendPost(false)}
                    >
                    <img src={No} alt="No"></img>
                    </button>
                </div> 
            </div>
        );
    }

    if (props.response.wentToGym === true){ 
        return (
            <p className='text'>
                Congrats champion, keep going!
            </p>
        );
    }

    if (props.response.wentToGym === false){ 
        return (
            <p className='text'>
                Oh no, that's a shame!
            </p>
        );
    }
}

export default Action;