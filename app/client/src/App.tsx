import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './logo.svg';

function App() {

  const navigate = useNavigate()

  // Veuillez supprimer cette commande pour eviter la redirection vers /login
  useEffect(() => {
    navigate('login')
  }, [navigate])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
