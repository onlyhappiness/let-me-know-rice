import React, { useEffect } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

function MapContent() {
  // useEffect(() => {
  //   var container = document.getElementById('map');
  //   var options = {
  //     center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
  //     level: 3,
  //   };
  //   var map = new kakao.maps.Map(container, options);
  // }, []);

  // return (
  //   <div>
  //     <div id='map' style={{ width: '500px', height: '400px' }}></div>
  //   </div>
  // );
  return (
    <Map
      center={{ lat: 33.5563, lng: 126.79581 }}
      style={{ width: '100%', height: '360px' }}
    >
      <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
        <div style={{ color: '#000' }}>Hello World!</div>
      </MapMarker>
    </Map>
  );
}

export default MapContent;
