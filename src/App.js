import logo from './logo.svg';
import './App.css';
import React from 'react';
import TodoFeature from './features/Todo';
import AlbumFeature from './features/Album';

function App() {

  return (
    <div className="App">
      <header className="App-header">

        {/* {isMale && (
          // React.Fragment use this when no parent
          <>
            <p>U are man</p>
            <p>U are man</p>
            <p>U are man</p>
          </>
        )}
        {!isMale && <p>U are woman</p>} */}

        <TodoFeature />
        <AlbumFeature />
      </header>
    </div>
  );
}

export default App;
