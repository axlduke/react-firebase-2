import './App.css';
import Home from './components/Home';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Student from './components/Student';
import Faculty from './components/Faculty';
import News from './components/News';
import ViewNews from './components/view/ViewNews';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/student_list' element={<Student/>}/>
        <Route path='/faculty_list' element={<Faculty/>}/>
        <Route path='/annoucement_list' element={<News/>}/>
        <Route path='/view/view_information' element={<ViewNews/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
