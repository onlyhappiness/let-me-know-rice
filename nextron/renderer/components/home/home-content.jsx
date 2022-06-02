import { Button, Grid } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import Title from 'antd/lib/skeleton/Title';
import React from 'react';

import Image from 'next/image';
import TestIcon from '../../../resources/tracking.svg';
import HomeLike from './homeLike';

function HomeContent() {
  return (
    <div>
      {/* <Content
        style={{
          width: '100%',
        }}
      >
        <Title level={3} style={{ padding: '12px' }}>
          Welcome back, Bread 👋
        </Title>
        <div
          style={{
            // height: '20%',
            border: `1px solid black`,
            height: '100px',
          }}
        >
          추천하는 곳으로 이동
        </div>
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
      </Content>
      <Content style={{ display: 'flex', marginTop: '40px' }}>
        <HomeLike />
        <div style={{ width: '40%' }}>날씨</div>
      </Content> */}

      <Content>
        <Row></Row>
      </Content>
    </div>
  );
}

export default HomeContent;
