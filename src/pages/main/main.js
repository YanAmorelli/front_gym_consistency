import Yes from '../../assets/check-solid.svg';
import No from '../../assets/xmark-solid.svg';
import './main.css';
import { useState } from 'react';

function Main() {
    // const [confirmation, setConfirmation] = useState(false);

    return(
        <main className="main">
            <h1 className='title'>
            Did you went to the gym today?
            </h1>   
            <div className="row-buttons">
            <div className='column-button'>
                <button 
                type="button" 
                className="ok-button"
                // onClick={setConfirmation(true)}
                >
                    <img src={Yes} alt="Yes"></img>
                </button>
            </div>
            <div className='column-button'>
                <button 
                type="button" 
                className="button"
                // onClick={setConfirmation(false)}
                >
                <img src={No} alt="No"></img>
                </button>
            </div> 
            </div>
            <p className='text'>Veja seu progresso mensal</p>
        </main>
    )
}

export default Main