
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';

import LoginT from "./teachers/LoginT";
import LoginS from "./students/LoginS";
import Calendar from './pages/Calendar';
import Dashboard from './pages/Dashboard';
import Course from './pages/Course';
import Courses from "./pages/Courses";
import ScoreS from './students/Score';
import ScoreT from './teachers/scoreTeacher'
import Recursos from './pages/recursos';
import Error404 from './pages/Error404';
import Perfil from "./pages/Perfil";
import Ajustes from "./pages/Ajustes";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
    <Route path='/login-STEAM/' element={<Dashboard />}></Route>
     <Route path='/dashboard' element={<Navigate replace to={"/login-STEAM"}/>}></Route>
    <Route path='/calendar' element={<Calendar />}></Route>
    <Route path='/score' element={<ScoreS />}></Route>
    <Route path='/scoreTeacher' element={<ScoreT />}></Route>
    <Route path='/recursos' element={<Recursos />}></Route>
    <Route path='*' element={<Error404 />}></Route>
    <Route path='/courses' element={<Courses />}></Route>
    <Route path='/courses/:id' element={<Course />}></Route>
    <Route path='/profesores' element={<LoginT />}></Route>
    <Route path='/estudiantes' element={<LoginS />}></Route>
    <Route path='/dashboard/perfil' element={<Perfil />}></Route>
    <Route path='/dashboard/ajustes' element={<Ajustes/>}></Route>

    <Route path='/resources' element={<Recursos />}></Route>
  

    </Routes>
  </BrowserRouter>
 
);
