import './App.css';
import GamePage from './components/GamePage/GamePage';
import HomePage from './components/HomePage/HomePage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/game/:gameId" element={<GamePage/>} />
      </Routes>
    </div>
  );
}

export default App;
