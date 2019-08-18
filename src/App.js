import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


// Stateless functional component

import { Greet } from './Components/Greet'
import Hello from './Components/Hello'
import { Jsxhello } from './Components/jsxhello'
import FunctionClick from './Components/FunctionClick'
// Statefull Class Componet

import Welcome from './ClassComponents/Welcome'
import Message from './ClassComponents/State/Message'
import Counter from './ClassComponents/State/Counter'
import ClassClick from './ClassComponents/ClassClick'
import ParentComponent from './ClassComponents/ParentComponnet'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Hello World</h2>
        </div>
        {/* <Hello /> */}

        {/* <Greet name="Faheem" heroName="Superman" /> */}


        {/* <Greet name="Faheem" heroName="Superman">
            <p>this is childern props</p>
        </Greet>  */}


        {/* <Greet name="Fatima" heroName="Super Girl" >
          <button>this is a button</button>
        </Greet>
        <Greet name="Aysha" heroName="Super Lady" />

        <Jsxhello /> */}



        {/* <Welcome name="Faheem" heroName="Superman"></Welcome>
        <Welcome name="Faheem" heroName="Superman"></Welcome>
        <Welcome name="Faheem" heroName="Superman"></Welcome> */}



        {/* <div>
          <Message />
        </div> */}

        {/* <Counter /> */}

        {/* <FunctionClick> </FunctionClick> */}



        {/* <ClassClick></ClassClick> */}

        <ParentComponent></ParentComponent>
      </div >


    );
  }
}

export default App;
