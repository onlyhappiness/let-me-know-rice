import React from 'react';
import {
  HomeOutlined,
  LikeOutlined,
  EnvironmentOutlined,
} from '@ant-design/icons';
import { Menu, Layout } from 'antd';
import { useRouter } from 'next/router';
// import Sider from "antd/lib/layout/Sider";

const { Sider } = Layout;

const DashBoardSider = ({ collapsed }) => {
  const router = useRouter();

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      style={{
        height: '100vh',
      }}
    >
      <div className='logo' />
      <Menu
        theme='dark'
        mode='inline'
        defaultSelectedKeys={['1']}
        // items={[
        //   {
        //     key: "1",
        //     icon: <HomeOutlined />,
        //     label: "nav 1",
        //   },
        //   {
        //     key: "2",
        //     icon: <LikeOutlined />,
        //     label: "nav 2",
        //   },
        //   {
        //     key: "3",
        //     icon: <EnvironmentOutlined />,
        //     label: "nav 3",
        //   },
        // ]}
      >
        {/* Home */}
        <Menu.Item
          key={'home'}
          onClick={() => {
            router.push('/home');
          }}
        >
          <HomeOutlined />
          <span>Home</span>
        </Menu.Item>

        {/* 추천 */}
        <Menu.Item
          key={'like'}
          onClick={() => {
            router.push('/like');
          }}
        >
          <LikeOutlined />
          <span>Like</span>
        </Menu.Item>

        {/* Map */}
        <Menu.Item
          key={'map'}
          onClick={() => {
            router.push('/map');
          }}
        >
          <EnvironmentOutlined />
          <span>Map</span>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default DashBoardSider;
