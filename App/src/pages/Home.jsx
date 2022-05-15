import React from 'react';

// TODO: Antd
import 'antd/dist/antd.css';

import HomeContent from '../components/home/home-content';
import DashboardLayout from '../components/dashboard/dashboard-layout';

function Home() {
  return (
    // <Layout hasSider>
    //   <DashboardSidebar collapsed={collapsed} />
    //   <Layout
    //     style={
    //       collapsed
    //         ? {
    //             marginLeft: 80,
    //           }
    //         : { marginLeft: 200 }
    //     }
    //   >
    //     <DashboardHeader collapsed={collapsed} toggle={toggle} />
    //     <Content
    //       style={{
    //         overflow: 'initial',
    //         padding: '24px',
    //       }}
    //     >
    //       <HomeContent />
    //     </Content>
    //   </Layout>
    // </Layout>
    <DashboardLayout component={<HomeContent />} />
  );
}

export default Home;
