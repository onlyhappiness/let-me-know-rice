import './App.css';
// import DashboardLayout from './components/dashboard/dashboard-layout';
import { Layout } from 'antd';

import Home from './pages/Home';
import Like from './pages/Like';
import DashboardSidebar from './components/dashboard/dashboard-sidebar';
import DashboardHeader from './components/dashboard/dashboard-header';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Layout style={{ width: '100%', height: '100vh' }}>
          <DashboardSidebar />

          <Layout>
            <DashboardHeader />
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/Like' element={<Like />}></Route>
            </Routes>
          </Layout>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
