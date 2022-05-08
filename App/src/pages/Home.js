import React from 'react';

import 'antd/dist/antd.css';
import { Card, Layout, Menu, Typography } from 'antd';
import Meta from 'antd/lib/card/Meta';

const { Header, Sider, Content } = Layout;
const { Title } = Typography;

function Home() {
  return (
    <Layout style={{ padding: '24px' }}>
      <Content style={{}}>
        <Title level={3} style={{ padding: '12px' }}>
          Welcome to <br></br> Let me know Rice 🤤
        </Title>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '12px',
          }}
        >
          <div>All</div>
          <div>category1</div>
          <div>category2</div>
          <div>category3</div>
          <div>category4</div>
        </div>
      </Content>
      <Content style={{ display: 'flex' }}>
        {/* FIXME: Grid */}
        <div style={{ width: '60%' }}>item</div>
        <div style={{ width: '40%' }}>weather</div>
      </Content>
    </Layout>
  );
}

export default Home;
