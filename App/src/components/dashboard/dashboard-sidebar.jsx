/* eslint-disable */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import 'antd/dist/antd.css';
import '../../styles/dashboard-sider.css';

import { Layout, Menu } from 'antd';
const { Sider } = Layout;

// TODO: icons
import { HomeOutlined, LikeOutlined } from '@ant-design/icons';

// import routes from '../../routes';

function DashboardSidebar({ collapsed }) {
  // const [routesItems, setRoutesItems] = useState(routes);
  let navigate = useNavigate();

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      style={{
        overflow: 'auto',
      }}
    >
      <div
        className='logo'
        style={{
          background: 'grey',
          padding: '30px 0px',
        }}
      >
        로고
      </div>

      <Menu
      // FIXME: Menu
      // defaultSelectedKeys={['home']}
      // items={routesItems}
      >
        <Menu.Item
          key={'home'}
          onClick={() => {
            navigate('/');
          }}
        >
          <HomeOutlined />
          <span>Home</span>
        </Menu.Item>
        <Menu.Item
          key={'like'}
          onClick={() => {
            navigate('/like');
          }}
        >
          <LikeOutlined />
          <span>Like</span>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default DashboardSidebar;
