import { createContext, useContext, useEffect, useState } from 'react';
import './App.sass';
import { Create } from './components/Create';
import { Show } from './components/Show';
import { Sidebar } from './components/Sidebar';
import { Test } from './components/TestHistory';
import { DBservice } from './api/DataStorage'
import { About } from './components/About';

export const pageHandler = createContext()

function PageRender(props){
  const pageName = props.page;
  switch(pageName){
    case "Create": return <Create />;
    case "Show": return <Show />;
    case "Test": return <Test />;
    case "About": return <About />;
    default: return <Show />
  }
}

function App() {
  const [step, setStep] = useState(1)
  const [page, setPage] = useState("Create")
  const [questionsList, setQuestionsList] = useState([])
  const [addQuestion, setAddQuestion] = useState([])

  useEffect(() => {
    setQuestionsList(DBservice.fetchAll())
  }, [])

  return (
    <div className="App">
      <pageHandler.Provider value={{page, setPage, questionsList, setQuestionsList, step, setStep, addQuestion, setAddQuestion}}>
        <Sidebar />
        <PageRender page={page} />
      </pageHandler.Provider>
    </div>
  );
}

export default App;
