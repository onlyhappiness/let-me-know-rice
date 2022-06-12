import { Header } from 'antd/lib/layout/layout';
import React from 'react';

import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { AutoComplete, Input } from 'antd';

function DashboardHeader({ collapsed, toggle }) {
  return (
    <Header
      style={
        {
          // display: 'flex',
          // justifyContent: 'space-around',
          // alignItems: 'center',
          // width: '100%',
          // padding: '0px 14px',
        }
      }
    >
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',
        onClick: toggle,
      })}
      <AutoComplete style={{ marginLeft: '36px' }}>
        <Input.Search placeholder='Search here' enterButton />
      </AutoComplete>
    </Header>
  );
}

export default DashboardHeader;
