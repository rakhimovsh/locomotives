import { Routes, Route } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './App.css';

import ProtectedRoute from './utils/ProtectedRoute';
import { checkExisting } from './redux/actions/auth';

//importing pages
import TeacherHome from './pages/Admin/TeacherHome';
import AdminTeachers from './pages/Admin/Teachers';
import AdminAdd from './pages/Admin/AddTeacher';
import AdminSubjects from './pages/Admin/Subject';
import Lectures from './pages/Admin/Lectures';
import Laboratories from './pages/Admin/Laboratories';
import Practices from './pages/Admin/Practices';
import Additional from './pages/Admin/Additional';
import AdminNews from './pages/Admin/News';
import AdminAddNews from './pages/Admin/AddNews';
import AdminEditNews from './pages/Admin/EditNews';
import AdminLectureInfo from './pages/Admin/LectureInfo';
import About from './pages/About';
import Teachers from './pages/Teachers';
import News from './pages/News';
import NewsInfo from './pages/NewsInfo';
import TeacherInfo from './pages/TeacherInfo.jsx';

//importing lazy loading pages
const UserLayout = lazy(() => import('./layouts/UserLayout'));
const Home = lazy(() => import('./pages/Home'));
const Admin = lazy(() => import('./pages/Admin/Admin'));
const AdminLayouts = lazy(() => import('./layouts/AdminLayout'));

// const AdminHome = lazy(() => import('./pages/Admin/Home'));

function App() {
  const dispatch = useDispatch();
  const { authorized } = useSelector(state => state.auth);


  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('TOKEN'));

    dispatch(checkExisting(token));
  }, []);

  return (
    <Routes>
      <Route path="/" element={<UserLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="teachers" element={<Teachers />} />
        <Route path="news" element={<News />} />
        <Route path="news/info/:newsId" element={<NewsInfo />} />
        <Route path='teacher/info/:teacherId' element={<TeacherInfo/>}/>
      </Route>
      <Route path="/admin" element={<Admin />} />
      <Route path="/panel" element={<ProtectedRoute authorized={authorized}>< AdminLayouts /></ProtectedRoute>}>
        <Route index element={<TeacherHome />} />
        <Route path="teachers">
          <Route index element={<AdminTeachers />} />
          <Route path="add2" element={<AdminAdd />} />
        </Route>
        <Route path="subject">
          <Route path="info/:courseId" element={<AdminSubjects />} />
          <Route path="lectures" element={<Lectures />} />
          <Route path="laboratories" element={<Laboratories />} />
          <Route path="practices" element={<Practices />} />
          <Route path="additional" element={<Additional />} />
          <Route path="lecture/info" element={<AdminLectureInfo />} />
        </Route>
        <Route path="news">
          <Route index element={<AdminNews />} />
          <Route path="add" element={<AdminAddNews />} />
          <Route path="edit/:newsId" element={<AdminEditNews />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
