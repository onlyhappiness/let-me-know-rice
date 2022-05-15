import React from 'react';
import DashboardLayout from '../components/dashboard/dashboard-layout';
import MapContent from '../components/map/map-content';

function Map() {
  return <DashboardLayout component={<MapContent />} />;
}

export default Map;
