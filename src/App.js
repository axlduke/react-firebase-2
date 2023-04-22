import './App.css';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Student from './components/Student';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/student_list' element={<Student/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
