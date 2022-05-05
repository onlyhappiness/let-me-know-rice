/* eslint-disable */
import React from 'react';

import 'antd/dist/antd.css';
import { Layout, Menu, Typography } from 'antd';

import './styles/dashboard-sider.css';

const { Sider } = Layout;
const { Title } = Typography;

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  HomeOutlined,
} from '@ant-design/icons';

function DashboardSidebar() {
  const routesItems = [
    {
      key: '1',
      icon: <HomeOutlined />,
      label: 'Home',
    },
    // {
    //   key: "2",
    //   icon: <VideoCameraOutlined />,
    //   label: "nav 2",
    // },
    // {
    //   key: "3",
    //   icon: <UploadOutlined />,
    //   label: "nav 3",
    // },
  ];

  return (
    <>
      <Sider className='sider'>
        {/* <div className='logo'>로고 넣넣</div> */}

        <div className='logo'>
          <Title level={4} className='logo_title'>
            밥 줘
          </Title>
        </div>

        <Menu
          // theme="dark"
          className='menu'
          mode='inline'
          defaultSelectedKeys={['1']}
          items={routesItems}
        />
      </Sider>
    </>
  );
}

export default DashboardSidebar;
