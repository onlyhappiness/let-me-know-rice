var mapTypes = {
  terrain : kakao.maps.MapTypeId.TERRAIN,    
  traffic :  kakao.maps.MapTypeId.TRAFFIC,
  bicycle : kakao.maps.MapTypeId.BICYCLE,
  useDistrict : kakao.maps.MapTypeId.USE_DISTRICT
};

function setOverlayMapTypeId() {
  var chkTerrain = document.getElementById('chkTerrain'),  
      chkTraffic = document.getElementById('chkTraffic'),
      chkBicycle = document.getElementById('chkBicycle'),
      chkUseDistrict = document.getElementById('chkUseDistrict');
  
  // 지도 타입을 제거합니다
  for (var type in mapTypes) {
      map.removeOverlayMapTypeId(mapTypes[type]);    
  }

  // 지적편집도정보 체크박스가 체크되어있으면 지도에 지적편집도정보 지도타입을 추가합니다
  if (chkUseDistrict.checked) {
      map.addOverlayMapTypeId(mapTypes.useDistrict);    
  }
  
  // 지형정보 체크박스가 체크되어있으면 지도에 지형정보 지도타입을 추가합니다
  if (chkTerrain.checked) {
      map.addOverlayMapTypeId(mapTypes.terrain);    
  }
  
  // 교통정보 체크박스가 체크되어있으면 지도에 교통정보 지도타입을 추가합니다
  if (chkTraffic.checked) {
      map.addOverlayMapTypeId(mapTypes.traffic);    
  }
  
  // 자전거도로정보 체크박스가 체크되어있으면 지도에 자전거도로정보 지도타입을 추가합니다
  if (chkBicycle.checked) {
      map.addOverlayMapTypeId(mapTypes.bicycle);    
  }
  
}  