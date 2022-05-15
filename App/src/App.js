import './App.css';

import { BrowserRouter } from 'react-router-dom';

// import Login from './pages/Login';

// import Home from './pages/Home';
// import Like from './pages/Like';
// import Map from './pages/Map';
import Router from './routes';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        {/* <DashboardLayout /> */}
        {/* FIXME: 일단 주석 */}
        {/* TODO: Auth를 통해 accessToken이 있다면 그대로
        만약 없다면 로그인 페이지로 */}
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;
