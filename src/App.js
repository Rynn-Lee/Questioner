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

//* В тест должен записываться автор
//* id должен выглядеть уникально по типу rynnlee_1231234534
//* Убрать ввод имени и группы при начале теста
//* Показать время при начале теста
//* показывать только свои тесты, сортировка по автору
//* Показывать результаты где есть имя
//* Добавить в результаты автора теста
//* открытие теста по нажатию на плитку вместо кнопки
//* страница ошибки если нет такого теста
//* отображение в тестах отдельно свои результаты, и результаты других
//* разделить вкладку "Моя история" на "История моих тестирований" и "Выполнение моих тестов" 
//* Сделать поисковую строку для ввода id теста
//* Перенести кнопку создания тестов во вкладку с тестами
//* Добавить в результаты статус теста open, отображение значка рядом
//* Сделать общедоступные тесты
//todo Добавить отображение какие вопросы отвечены правильно в результатах
//todo Открытие результата на всю страницу
//todo Запрет на Share тестом

//todo Поиск по результатам с фильтром

//todo
//!  ПЕРЕПИСАТЬ API С localStorage на SupaBase/FireBase  !//
//todo

export default App;
