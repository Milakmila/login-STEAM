
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';


import Calendar from './pages/Calendar';
import Dashboard from './pages/Dashboard';
import Course from './pages/Course';
import Courses from "./pages/Courses";
import ScoreS from './students/Score';
import ScoreT from './teachers/scoreTeacher'
import Recursos from './pages/recursos';
import Error404 from './pages/Error404';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
    <Route path='/' element={<Dashboard />}></Route>
    <Route path='/calendar' element={<Calendar />}></Route>
    <Route path='/score' element={<ScoreS />}></Route>
    <Route path='/scoreTeacher' element={<ScoreT />}></Route>
    <Route path='/recursos' element={<Recursos />}></Route>
    <Route path='/home' element={<Navigate replace to={"/"} />}></Route>
    <Route path='*' element={<Error404 />}></Route>
    <Route path='/courses' element={<Courses />}></Route>
    <Route path='/course/:id' element={<Course />}></Route>
    </Routes>
  </BrowserRouter>
 
);
