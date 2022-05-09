import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Layout } from 'antd';

import DashboardHeader from './dashboard-header';
import DashboardSidebar from './dashboard-sidebar';
import Home from '../../pages/Home';
import Like from '../../pages/Like';
import { Content } from 'antd/lib/layout/layout';

function DashboardLayout() {
  // TODO: Toggle
  const [collapsed, setcollapsed] = useState(true);
  const toggle = () => {
    setcollapsed(!collapsed);
  };

  return (
    <Layout style={{ width: '100%', height: '100vh' }} hasSider>
      <DashboardSidebar collapsed={collapsed} />

      <Layout>
        <DashboardHeader collapsed={collapsed} toggle={toggle} />

        <Content
          style={{
            margin: '16px ',
            overflow: 'initial',
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
