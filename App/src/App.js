import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './pages/Login';

import DashboardLayout from './components/dashboard/dashboard-layout';
import Home from './pages/Home';
import Like from './pages/Like';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        {/* <DashboardLayout /> */}
        {/* FIXME: 일단 주석 */}
        {/* TODO: Auth를 통해 accessToken이 있다면 그대로
        만약 없다면 로그인 페이지로 */}
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Home />} />
          <Route path='/like' element={<Like />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
