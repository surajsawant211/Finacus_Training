import React from 'react'
import './App.css';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HookCounterThree from './components/HookCounterThree';
import HookCounterTwo from './components/HookCounterTwo';
import SimpleToDo from './components/SimpleToDo';
import UseStateArray from './components/UseStateArray';
import UseStateObject from './components/UseStateObject';

function App() {
  return (
    <div className="App">
      {/* <ClassCounter /> */}
      {/* <HookCounter /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounterThree /> */}
      {/* <UseStateArray /> */}
      {/* <UseStateObject /> */}
      <SimpleToDo />
    </div>
  );
}

export default App;
