import './App.css';
import React from 'react';
import { useState } from "react";
import { Link }  from 'react-router-dom';

const test = [
  {id: 0, question: "question1", option1: "option1", option2: "option2", answer: "option1" },
  {id: 1, question: "question2", option1: "option1", option2: "option2", answer: "option2" },
  {id: 2, question: "question3", option1: "option1", option2: "option2", answer: "option2" }
];

export function App() {  
  return (
    <div className="App">
      <Header description="App for training"/>
      <Main />
    </div>
  );
}

export function Test() {
  const [result, setResult] = useState("");

  return(
    <div>
      <h1>Test</h1>
      <Questions 
        data={test}
        renderEmpty={<p>No questions</p>}
        renderItem={(item) => (
          <Question item={item} />
        )}
      />
      <button
        onClick={() => setResult("Result: 3/3")}
      >Check result</button>
      <p>{result}</p>
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
  return (
    <div className="App">
      <nav>
        <Link to='/test'>Start</Link>
      </nav>
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

function Question({item}) {
  return (
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
  );
}
