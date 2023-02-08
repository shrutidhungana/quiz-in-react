import React from 'react';
import './App.css';
import Quiz from './components/Quiz';
import { QuizProvider } from './context/quiz';

const App = () => {
  return (
    <div>
      <QuizProvider>
        <Quiz />
      </QuizProvider>
    </div>
  )
}

export default App
