import './main.css';
import Action from './action'
import { useEffect, useState } from 'react';
import axios from "axios";

function Main() {
    const [response, setResponse] = useState({});

    const getToday = () => {
        let today = new Date();
        return today.toISOString().slice(0,10);
    }

    useEffect(() => {
        //TODO: Use axios in services not in the component
        let today = getToday();
        let url = `http://localhost:8080/getDate/${today}`
        const options = {method: 'GET', url: url};
        axios.request(options).then(function (response) {
            let obj = {status: response.status, wentToGym: response.data.Went}
            setResponse(obj);
        });
    }, []);
    

    return(
        <main className="main"> 
            <h1 className='title'>
                Did you went to the gym today?
            </h1>              
            <Action
                response={response}
            /> 
            <p className='text'>Click here to check your monthly frequency</p>
        </main>
    )
}

export default Main