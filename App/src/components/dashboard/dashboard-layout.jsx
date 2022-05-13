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
import Map from '../../pages/Map';

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

  console.log('나오자=====', collapsed);

  return (
    <Layout hasSider>
      <DashboardSidebar collapsed={collapsed} />
      <Layout
        style={
          collapsed
            ? {
                marginLeft: 80,
              }
            : { marginLeft: 200 }
        }
      >
        <DashboardHeader collapsed={collapsed} toggle={toggle} />
        <Content
          style={{
            overflow: 'initial',
            padding: '24px',
            // paddingTop: '24px',
            // height: '100vh',
          }}
        >
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/like' element={<Like />} />
            <Route path='/map' element={<Map />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
}

export default DashboardLayout;
