import React, { useState} from 'react';

const App = () => {
  const [temperatureValue, setTemperatureValue] = useState(12);
  const[temperatureColor, setTemperatureColor] = useState('hot');

  const increaseTemperature =() => {
    if (temperatureValue === 50) return;
    const newTemperature = temperatureValue + 1;

    if(newTemperature >= 15){
      setTemperatureColor('hot');
    }
    setTemperatureValue(newTemperature);

  };

  const discreaseTemperature =() => {
    if(temperatureValue === -30) return;
    const newTemperature = temperatureValue - 1;

    if(newTemperature < 15){
      setTemperatureColor('cold');
    }
    setTemperatureValue(newTemperature);

  };

  return (
    <div className='app-container'>
      <div className="temperature-display-container">
        <div className={`temperature-display ${temperatureColor}`}>{temperatureValue}&#176;c</div>
      </div>
      <div className="button-container">
        <button onClick={()=> increaseTemperature()}>+</button>
        <button onClick={()=> discreaseTemperature()}>-</button>
      </div>


    </div>
  )
}

export default App;