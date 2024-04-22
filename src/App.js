import React, { useState, useEffect } from 'react';

function App() {
  const [response, setResponse] = useState('');

  const handleClick = () => {
    const requestBody = {
      "a2f_player": "/World/Graphs/LazyGraph/Player"
    };

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    };

    console.log('Request Options:', requestOptions);

    fetch('/A2F/Player/Play', requestOptions)
      .then(res => res.json())
      .then(data => setResponse(JSON.stringify(data)))
      .catch(error => setResponse(`Error: ${error}`));
  };

  useEffect(() => {
    handleClick();
  }, []);

  return (
    <div>
      <button onClick={handleClick}>Send API Request</button>
      <pre>{response}</pre>
    </div>
  );
}

export default App;