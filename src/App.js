import './App.css';
import React from 'react';
import { useState, useReducer } from "react";

const test = [
  {id: 0, question: "question1", option1: "option1", option2: "option2", answer: "option1" },
  {id: 1, question: "question2", option1: "option1", option2: "option2", answer: "option2" },
  {id: 2, question: "question3", option1: "option1", option2: "option2", answer: "option2" }
];

function App() {  
  return (
    <div className="App">
      <Header description="App for training"/>
      <Main />
      <Questions 
        data={test}
        renderEmpty={<p>No questions</p>}
        renderItem={(item) => (
        <ul>
          <p>{item.question}</p>
            <li>
            <input type="checkbox" />
            <label>{item.option1}</label>
            </li>
            <li>
            <input type="checkbox" />
            <label>{item.option2}</label>
            </li>
        </ul>
        )}
      />
    </div>
  );
}

function Header({description}) {
  return (       
    <header>
      <h1>{description}</h1>
    </header>
  );
}

function Main() {
  const [status, setStatus] = useState("Are you ready?");

  return (
    <div className="App">
      <p>{status}</p>
      <button onClick={() => setStatus("Let's start!")}>Start</button>
    </div>
  );
}

function Questions({ data, renderItem, renderEmpty }) {
  return !data.length ? ( renderEmpty ) :
  (
    <ul>
      {data.map((item) => (
        <li key={item.id}>
          {renderItem(item)}
        </li>
      ))}
    </ul>
  );
}

export default App;
