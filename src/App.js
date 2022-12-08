import logo from './logo.svg';
import './App.css';
import React from 'react';
import TodoFeature from './features/Todo';
import AlbumFeature from './features/Album';

function App() {
  const age = 23;
  const isMale = true;
  const student = {
    name: 'Ununin'
  }
  const colorList = ['red', 'green', 'yellow']

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Xin chao {student.name} - {age} - {isMale ? 'Male' : 'Female'}
        </p>
        {isMale && (
          // React.Fragment use this when no parent
          <>
            <p>U are man</p>
            <p>U are man</p>
            <p>U are man</p>
          </>
        )}
        {!isMale && <p>U are woman</p>}

        <ul>
          {colorList.map((color, index) => (
            <li key={index} style={{ color }}>{color}</li>
          ))}
        </ul>
        <TodoFeature />
        <AlbumFeature />
      </header>
    </div>
  );
}

export default App;
