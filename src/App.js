// App.js
import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [hour, setHour] = useState('');
  const [minute, setMinutes] = useState('');
  const [second, setSeconds] = useState('');
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formattedHour = now.getHours().toString().padStart(2, '0');
      const formattedMinutes = now.getMinutes().toString().padStart(2, '0');
      const formattedSeconds = now.getSeconds().toString().padStart(2, '0');
      setHour(formattedHour);
      setMinutes(formattedMinutes);
      setSeconds(formattedSeconds);
    };

    updateTime(); // Chama a função para exibir o horário inicial

    const intervalId = setInterval(updateTime, 1000); // Atualiza o horário a cada segundo

    return () => {
      clearInterval(intervalId); // Limpa o intervalo quando o componente é desmontado
    };
  }, []);

  return (
    <div className="App">
      <h1>Relógio virtual usando React</h1>
      <div className='boxes'>
        <div className="box-hour"><p>{hour}</p></div>
        <div className="box-minute"><p>{minute}</p></div>
        <div className="box-second"><p>{second}</p></div>
    </div>
    </div>
  );
}

export default App;

