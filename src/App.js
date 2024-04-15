import { useState } from 'react';
import Home from './Home';
import { Login } from './Login';

function App() {
  const [loadHome, setLoadHome] = useState(true)
  return <div>
    {loadHome ? <Home name="Sammy"/> : <Login />}
    <button onClick={() => {
      setLoadHome(prev => !prev)
    }}>Toggle View</button>
  </div>
}

export default App;