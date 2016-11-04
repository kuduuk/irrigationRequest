/*global require*/
require([
  'controllers/appcontroller',
  'services/mapservices',
  'dojo/domReady!'
], function (appCtrl, mapServices) {

  console.debug('DEBUG - Starting application');
  appCtrl.init({
    elem: 'map-div',
    mapOptions: {
      basemap: 'topo',
      center: [-108.7041,43.30542],
      zoom: 10
    },
    layers: mapServices.loadServices()
  });

});
