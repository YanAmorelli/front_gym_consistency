import Yes from './assets/check-solid.svg';
import No from './assets/xmark-solid.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <main className="App-main">
        <h1>
          Did you went to the gym today?
        </h1>   
        <div className="Buttons">
          <button type="button" class="ok-button"><img src={Yes} alt="Yes"></img></button>
          <button type="button" class="button"><img src={No} alt="No"></img></button>
        </div>
        <p className='Text'>Veja seu progresso mensal</p>
      </main>
    </div>
  );
}

export default App;
