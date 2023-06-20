import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const api = {
  key:'6150031b4e9906582f3b4a3ab25a0d8e',
  base:'http://api.openweathermap.org/data/2.5/',
}

function App() {

  const[search, setSearch] = useState('');
  const[weather, setWeather]= useState('')
  const [error, setError] = useState(false)
  const searchchClick = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
    .then((res) => {
      if (res.ok){
        return res.json();
      }else {
        throw new Error('City Not Found')
      }
    })
    .then((result)=> {
      setWeather(result)
      console.log(result)
      console.log(result.name)
    })
    .catch((error) => {
      console.log(error);
      setWeather(null);
      setError(true);
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

        {error && !weather && <p>City Not Found</p>}
        
        {weather && (<div>
          {/* Location  */}
        <p>{weather.name}</p>


        {/* Temparature Celcius */}
        <p>{weather.main.temp} °C</p> 


        {/* Weather Condition - sunny, ... */}
        <p>{weather.weather[0].main}</p>
        </div>)}
        
        
      </header>
    </div>
  );
}

export default App;
