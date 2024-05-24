import React, { useState } from 'react';
import Question from './questions';
import data from './data';
import './App.css';

function App() {
const [questions, setQuestion] = useState(data);
  return (
  <main>
    <div className='container'>
    <h3>Questions</h3>
    <section className='info'>
      {
        questions.map((question)=> {
          return <Question key={questions.id} {...question} />
        })
      }
    </section>
    </div>
  </main>
  );
}

export default App;
 