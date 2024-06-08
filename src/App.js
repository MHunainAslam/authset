import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Privateroutes from './redux/Privateroutes';
import Dashboard from './pages/Dashboard';
import { useDispatch, useSelector } from 'react-redux';
import { login, loginp } from './redux/authslice';
import Login from './pages/Login';

function App() {
  const dispatch = useDispatch()
  const { isauth } = useSelector((item => item.login))
  if (localStorage.getItem('loginuser')) {
    dispatch(loginp())
  }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<Privateroutes />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
