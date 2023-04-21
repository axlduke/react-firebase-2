import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Sidebar/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
