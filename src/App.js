import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 style={{color: 'yellow', fontSize: '3em'}}>
          UPDATED VERSION - IT WORKS!
        </h1>
        <p style={{color: 'lime', fontSize: '1.5em'}}>
          Auto-deployment is working!
        </p>
        <p style={{color: 'cyan'}}>
          GitHub + Vercel + CI/CD = Success!
        </p>
        
          className="App-link"
          href="https://github.com/JeetRatanpara28/devops-project"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub
        </a>
      </header>
    </div>
  );
}

export default App;