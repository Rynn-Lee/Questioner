import './App.sass';
import { Create } from './pages/Create';
import { Show } from './pages/Show';
import { Sidebar } from './components/Sidebar';
import { TestHistory } from './pages/TestHistory';
import { About } from './pages/About';
import {Routes, Route} from 'react-router-dom'
import { Testing } from './pages/Testing';
import { Login } from './pages/Login';

const App = () => {
  return (
    <div className="App">
        <Sidebar />
        <Routes>
          <Route index element={<Show />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create" element={<Create />} />
          <Route path="/testhistory" element={<TestHistory />} />
          <Route path="/about" element={<About />} />
          <Route path="/testing/:testId" element={<Testing />} />
        </Routes>
    </div>
  );
}

export default App;
