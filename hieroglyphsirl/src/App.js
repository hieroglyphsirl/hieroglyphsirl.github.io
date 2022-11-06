import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [signList, setSignList] = React.useState([]);

  const url = "https://hieroglyphsirl.npkn.net/signlist/";
  React.useEffect(() => {
    fetch(url)
    .then(resp => resp.json())
    .then(data => {
      console.log(data);
      setSignList(data.records);
    })
    .catch(err => console.log(err));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>HieroglyphsIRL</h1>
        <p>Coming soon...or not</p>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div className='signListContainer'>
          {signList.map(sign => (<p key={sign.id}>{sign.fields.unicode}</p>))}
        </div>
      </header>
    </div>
  );
}

export default App;

