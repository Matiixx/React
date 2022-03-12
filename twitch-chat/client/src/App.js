import logo from './logo.svg';
import './App.css';
import GetFetch from './ChatLogs';
import { useEffect, useState } from 'react';

function App() {

    const [logEntries, setlogEntries] = useState([]);
    useEffect(() => {
      (async () => {
        const logEntries = await GetFetch();
        setlogEntries(logEntries);
      })();
    }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="chatBox">
      {
        logEntries.map((log, index) => (
          <div className="messageBox" key={index}>
            <span className="nickname">{`${log.nick}:`}&nbsp;</span>
            <span className="messageText">{`${log.message}`}</span>
          </div>
        ))
      }
      </div>
    </div>
  );
}

export default App;
