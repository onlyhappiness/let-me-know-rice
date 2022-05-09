import React from 'react';

import 'antd/dist/antd.css';
import { Button, Card, Col, Layout, Menu, Row, Typography } from 'antd';
import Meta from 'antd/lib/card/Meta';

const { Header, Sider, Content } = Layout;
const { Title } = Typography;

function Home() {
  return (
    <div>
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
          <Button type='primary' shape='round'>
            All
          </Button>
          <Button type='primary' shape='round'>
            Category1
          </Button>
          <Button type='primary' shape='round'>
            Category2
          </Button>
          <Button type='primary' shape='round'>
            Category3
          </Button>
          <Button type='primary' shape='round'>
            Category4
          </Button>
        </div>

        <Row gutter={[16, 16]} style={{ marginTop: '16px' }}>
          <Col span={6}>
            <Card
              hoverable
              cover={
                <img
                  alt='example'
                  height={220}
                  src='https://i.pinimg.com/564x/1d/f1/bb/1df1bb675b3bd2ab585b7358a0793bd8.jpg'
                />
              }
            >
              <Meta
                title='Europe Street beat'
                description='www.instagram.com'
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card
              hoverable
              cover={
                <img
                  alt='example'
                  height={220}
                  src='https://i.pinimg.com/564x/1d/f1/bb/1df1bb675b3bd2ab585b7358a0793bd8.jpg'
                />
              }
            >
              <Meta
                title='Europe Street beat'
                description='www.instagram.com'
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card
              hoverable
              cover={
                <img
                  alt='example'
                  height={220}
                  src='https://i.pinimg.com/564x/1d/f1/bb/1df1bb675b3bd2ab585b7358a0793bd8.jpg'
                />
              }
            >
              <Meta
                title='Europe Street beat'
                description='www.instagram.com'
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card
              hoverable
              cover={
                <img
                  alt='example'
                  height={220}
                  src='https://i.pinimg.com/564x/1d/f1/bb/1df1bb675b3bd2ab585b7358a0793bd8.jpg'
                />
              }
            >
              <Meta
                title='Europe Street beat'
                description='www.instagram.com'
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card
              hoverable
              cover={
                <img
                  alt='example'
                  height={220}
                  src='https://i.pinimg.com/564x/1d/f1/bb/1df1bb675b3bd2ab585b7358a0793bd8.jpg'
                />
              }
            >
              <Meta
                title='Europe Street beat'
                description='www.instagram.com'
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card
              hoverable
              cover={
                <img
                  alt='example'
                  height={220}
                  src='https://i.pinimg.com/564x/1d/f1/bb/1df1bb675b3bd2ab585b7358a0793bd8.jpg'
                />
              }
            >
              <Meta
                title='Europe Street beat'
                description='www.instagram.com'
              />
            </Card>
          </Col>
        </Row>
      </Content>
      <Content style={{ display: 'flex', marginTop: '24px' }}>
        {/* FIXME: Grid */}
        <div style={{ width: '60%' }}>추천 메뉴?</div>
        <div style={{ width: '40%' }}>weather</div>
      </Content>
    </div>
  );
}

export default Home;
