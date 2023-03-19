import './App.css';
import React from 'react';
import { useState } from "react";
import { Link }  from 'react-router-dom';

const test = [
  {id: 0, question: "question1", option1: "option1", option2: "option2", answer: "option1", isValid: false },
  {id: 1, question: "question2", option1: "option1", option2: "option2", answer: "option2", isValid: false },
  {id: 2, question: "question3", option1: "option1", option2: "option2", answer: "option2", isValid: false }
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
          <Question 
            item={item}
          />
        )}
      />
      <button
        onClick={() => setResult(() => GetResult())}
      >Check result</button>
      <p>{result}</p>
    </div>
  );
}

function GetResult() {
  return "Result: " + test.length + "/" + test.filter(x => x.isValid == true).length
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
  const [validResponse, setValidResponse] = useState(false);

  const [checkedState, setCheckedState] = useState(
      new Array(2).fill(false)
  );

  const handleOnChange = (position, answer, questionId) => {
    const updatedCheckedState = checkedState.map((state, index) =>
      index === position ? !state : state
    );
    
    setCheckedState(updatedCheckedState);

    const isValid = updatedCheckedState[position] === true && 
                    test.find(x => x.id === questionId && 
                                   x.answer === answer) !== undefined;

    setValidResponse(isValid);
    item.isValid = isValid;
  };

  return (
    <ul>
      <p>{item.question}</p>
      <li>
      <input type="checkbox" onChange={() => handleOnChange(0, item.option1, item.id)} />
      <label>{item.option1}</label>
      <label>
        {checkedState[0] ? " checked" : " not checked"}
      </label>
      </li>
      <li>
      <input type="checkbox" onChange={() => handleOnChange(1, item.option2, item.id)}/>
      <label>{item.option2}</label>
      <label>
        {checkedState[1] ? " checked" : " not checked"}
      </label>
      </li>
      <p>{validResponse ? "OK" : "Wrong"}</p>
    </ul>
  );
}
