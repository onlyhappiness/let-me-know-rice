// import React, { useState } from 'react';
// import { Route, Routes } from 'react-router-dom';

// import { Layout } from 'antd';

// import DashboardHeader from './dashboard-header';
// import DashboardSidebar from './dashboard-sidebar';
// import Home from '../../pages/Home';
// import Like from '../../pages/Like';
// import { Content } from 'antd/lib/layout/layout';

// function DashboardLayout() {
//   // TODO: Toggle
//   const [collapsed, setcollapsed] = useState(true);
//   const toggle = () => {
//     setcollapsed(!collapsed);
//   };

//   return (
//     <Layout style={{ width: '100%', height: '100vh' }} hasSider>
//       <DashboardSidebar collapsed={collapsed} />

//       <Layout>
//         <DashboardHeader collapsed={collapsed} toggle={toggle} />

//         <Content
//           style={{
//             margin: '16px ',
//             overflow: 'initial',
//           }}
//         >
//           <Routes>
//             <Route path='/' element={<Home />} />
//             <Route path='/like' element={<Like />} />
//           </Routes>
//         </Content>
//       </Layout>
//     </Layout>
//   );
// }

// export default DashboardLayout;

import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../../pages/Home';
import Like from '../../pages/Like';

// TODO: Antd
import 'antd/dist/antd.css';
import { Layout } from 'antd';

import DashboardSidebar from './dashboard-sidebar';
import DashboardHeader from './dashboard-header';
const { Content } = Layout;

function DashboardLayout() {
  // TODO: Toggle
  const [collapsed, setcollapsed] = useState(true);
  const toggle = () => {
    setcollapsed(!collapsed);
  };

  return (
    <Layout hasSider>
      <DashboardSidebar />
      <Layout
        style={{
          marginLeft: 200,
        }}
      >
        <DashboardHeader />
        <Content
          style={{
            overflow: 'initial',
            padding: '24px',
          }}
        >
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/like' element={<Like />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
}

export default DashboardLayout;
