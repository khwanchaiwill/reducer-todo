import React from 'react';
import './App.css';
import TodoList from './component/TodoList'



class App extends React.Component {

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h2>
             My List Todo
          </h2>
        </header> 
        <div className="display">
          <TodoList />
        </div>
        
      </div>
    );
  }
}

export default App;
