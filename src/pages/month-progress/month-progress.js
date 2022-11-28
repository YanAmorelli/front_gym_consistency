import axios from "axios";
import './month-progress.css'
import { useEffect, useState } from "react";

function MonthProgress() {
    const [response, setResponse] = useState({})

    const getCurrentMonth = () => {
        let url = `http://localhost:8080/getCurrentMonth`
        const options = {method: 'GET', url: url};
        axios.request(options).then(function (response) {
            setResponse(response.data);
        });
    }

    useEffect(() => {
        //TODO: Use axios in services not in the component
        getCurrentMonth();
    }, []);

    return(
        <main className="main">
            <h1 className="title">Your monthly frequency</h1>
            <p className="text">
                You went {response.presentDays} days
            </p>
            <p className="text">
                You missed {response.missedDays} days 
            </p>
        </main>
    ) 
}

export default MonthProgress