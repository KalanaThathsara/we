import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const api ={
    key : '6150031b4e9906582f3b4a3ab25a0d8e',
    base:'http://api.openweathermap.org/data/2.5/',
  }

  const[search, setSearch] = useState('');
  const searchchClick = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
    .then((res) => res.json())
    .then((result)=> {
      console.log(result)
    })
  }
  return (
    <div className="App">
      <header className="App-header">
        {/* {Header} */}
        <h1>Weather App</h1>

        {/* Search Box */}
        <div>
        <input type='text' 
        placeholder='Enter City / Town...'
        onChange={(e) => setSearch(e.target.value)}></input>
        <button onClick={searchchClick}>Search</button>
        </div>
        
        
        {/* Location  */}
        <p>Colombo</p>


        {/* Temparature Celcius */}
        <p>30 c</p>

        {/* Weather Condition - sunny, ... */}
        <p>Raining</p>
      </header>
    </div>
  );
}

export default App;
