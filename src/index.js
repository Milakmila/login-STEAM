
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
<<<<<<< HEAD
import Courses from './pages/Courses';

=======
import Login from "./pages/Login";
>>>>>>> 8712c3d6a8c8627b63b73420c305467a16aff2fb


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
    <Route path='/login-STEAM/' element={<Dashboard />}></Route>
    <Route path='/calendar' element={<Calendar />}></Route>
    <Route path='/score' element={<ScoreS />}></Route>
    <Route path='/scoreTeacher' element={<ScoreT />}></Route>
    <Route path='/recursos' element={<Recursos />}></Route>
    <Route path='/home' element={<Navigate replace to={"/"} />}></Route>
    <Route path='*' element={<Error404 />}></Route>
    <Route path='/courses' element={<Courses />}></Route>
<<<<<<< HEAD
    <Route path='/courses/:id' element={<Course />}></Route>
   
=======
    <Route path='/course/:id' element={<Course />}></Route>
    <Route path='/login' element={<Login />}></Route>
  
>>>>>>> 8712c3d6a8c8627b63b73420c305467a16aff2fb
    </Routes>
  </BrowserRouter>
 
);
