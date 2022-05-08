import './App.css';

import { BrowserRouter } from 'react-router-dom';
import DashboardLayout from './components/dashboard/dashboard-layout';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <DashboardLayout />
      </div>
    </BrowserRouter>
  );
}

export default App;
