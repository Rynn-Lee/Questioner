import './App.sass';
import { Create } from './pages/Create';
import { Show } from './pages/Show';
import { Sidebar } from './components/Sidebar';
import { TestHistory } from './pages/TestHistory';
import { About } from './pages/About';
import {Routes, Route} from 'react-router-dom'
import { Testing } from './pages/Testing';
import { Login } from './pages/Login';
import { ErrorPage } from './pages/ErrorPage';
import { MyTestsHistory } from './pages/MyTestsHistory';
import { OpenTests } from './pages/OpenTests';

const App = () => {
  return (
    <div className="App">
        <Sidebar />
        <Routes>
          <Route index element={<Show />} />
          <Route path="/login" element={<Login />} />
          <Route path="/opentests" element={<OpenTests />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="/create" element={<Create />} />
          <Route path="/testhistory" element={<TestHistory />} />
          <Route path="/mytest" element={<MyTestsHistory />} />
          <Route path="/about" element={<About />} />
          <Route path="/testing/:testId" element={<Testing />} />
        </Routes>
    </div>
  );
}


//todo Добавить отображение какие вопросы отвечены правильно в результатах
//todo Открытие результата на всю страницу
//todo Запрет на Share тестом
//todo Поиск по результатам с фильтром


export default App;
