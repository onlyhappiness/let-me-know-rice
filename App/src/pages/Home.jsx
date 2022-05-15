import React from 'react';

import HomeContent from '../components/home/home-content';
import DashboardLayout from '../components/dashboard/dashboard-layout';

function Home() {
  return <DashboardLayout component={<HomeContent />} />;
}

export default Home;
