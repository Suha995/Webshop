import { useState } from 'react';
import './App.scss';

import Login from './components/Login';

function App() {
  const [ registered, setRegistered ] = useState(true);
  return (
    <div className="App">
      <Login registered={registered}/>
    </div>
  );
}

export default App;
