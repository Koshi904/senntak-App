import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'; // ← 今の内容を移す
import DecisionPage from './pages/Decision'; // ← すでにある or 作ったページ

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/select" element={<DecisionPage />} />
    </Routes>
  );
};



export default App;
