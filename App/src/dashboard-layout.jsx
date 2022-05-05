/* eslint-disable */
import React from 'react';

import 'antd/dist/antd.css';
import './styles/dashboard-layout.css';
import { Layout, Menu } from 'antd';
import DashboardSidebar from './dashboard-sidebar';
import DashboardHeader from './dashboard-header';

const { Header, Sider, Content } = Layout;

function RootLayout() {
  return (
    <Layout className='dashboardLayout'>
      <DashboardSidebar />

      <Layout className='site-layout'>
        {/* <DashboardHeader /> */}
        <Content>
          <div className='layout-background'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            ipsa quasi recusandae error nesciunt itaque similique earum totam
            nostrum quaerat dolor, asperiores tenetur quis ipsam sed, quae
            corporis maiores tempore. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Amet voluptatibus doloremque earum aspernatur
            fuga, eaque quibusdam molestiae eos quae omnis porro iusto maxime
            voluptas quisquam repudiandae, in obcaecati maiores necessitatibus.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum,
            deserunt quod temporibus voluptatibus reprehenderit culpa cupiditate
            alias! Architecto, cum! Voluptas sint modi vel dolore, sequi ea!
            Ipsa molestias aperiam culpa. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Quod non blanditiis sequi nihil illo
            dicta nulla minima ex? Quo deleniti dolores debitis eum,
            voluptatibus maxime sapiente illum rerum iste dolorem! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Eius voluptas in
            eligendi at sunt, amet velit odio nostrum, qui perspiciatis nobis
            vero, sequi tempora quidem! Dolorum dignissimos reiciendis quasi
            atque! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Mollitia quis cupiditate totam dolores unde enim ea deleniti modi
            praesentium, quibusdam, laborum magni, commodi exercitationem esse
            qui asperiores magnam deserunt numquam.
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default RootLayout;
