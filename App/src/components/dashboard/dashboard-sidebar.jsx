/* eslint-disable */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import 'antd/dist/antd.css';
import '../../styles/dashboard-sider.css';

import { Layout, Menu } from 'antd';
const { Sider } = Layout;

// import routes from '../../routes';

function DashboardSidebar() {
  // const [routesItems, setRoutesItems] = useState(routes);

  let navigate = useNavigate();

  // const handleRoutesNavigation = (e) => {
  //   console.log(e?.domEvent?.target);
  // };

  return (
    <Sider>
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
      // onClick={handleRoutesNavigation}
      // defaultSelectedKeys={['home']}
      // items={routesItems}
      >
        <Menu.Item
          key={'home'}
          onClick={() => {
            // console.log('클릭함');
            navigate('/');
          }}
        >
          Home
        </Menu.Item>
        <Menu.Item
          key={'like'}
          onClick={() => {
            // console.log('클릭함222');
            navigate('/like');
          }}
        >
          Like
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default DashboardSidebar;
