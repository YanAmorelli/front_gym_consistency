import './main.css';
import { getToday } from '../../util/date';
import Action from './action'
import { useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Main() {
    const [response, setResponse] = useState({});
    const [refresh, setRefresh] = useState(false);

    const getTodayStatus = () => {
        let today = getToday();
        let url = `http://localhost:8080/getDate/${today}`
        const options = {method: 'GET', url: url};
        axios.request(options).then(function (response) {
            let obj = {status: response.status, wentToGym: response.data.Went}
            setResponse(obj);
        });
    }

    let navigate = useNavigate(); 
        const routeChange = () =>{ 
        let path = `monthlyStatus`; 
        navigate(path);
    }

    useEffect(() => {
        //TODO: Use axios in services not in the component
        getTodayStatus();
    }, []);
    
    useEffect(() => {
        if (refresh === true)
            getTodayStatus();

    }, [refresh])

    return(
        <main className="main"> 
            <h1 className='title'>
                Did you went to the gym today?
            </h1>              
            <Action
                response={response}
                onWasChecked={(e) => setRefresh(e)}
            /> 
            <p onClick={routeChange} className='link-text'>Click here to check your monthly frequency</p>
        </main>
    )
}

export default Main