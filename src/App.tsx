import React from 'react';
import { Provider } from 'react-redux';
import "./assets/styles/main.scss";
import DrumMachine from './components/DrumMachine';
import store from './store/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <DrumMachine />
      </Provider>
    </div>
  );
}

export default App;
