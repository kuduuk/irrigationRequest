/*global define*/
/*jshint laxcomma:true*/
define([
    'esri/layers/FeatureLayer',
    'esri/renderers/SimpleRenderer',
    'utils/symbolUtil'
], function(FeatureLayer, SimpleRenderer, symbolUtil) {

    function loadServices(config) {
        var layers = [],
        // layers
            reservedRightsLayer = new FeatureLayer('https://wygiscservices10-3.wygisc.org/arcgis/rest/services/WRIR/ReservedRights/MapServer/0'),
            consentDecreeLayer = new FeatureLayer('https://wygiscservices10-3.wygisc.org/arcgis/rest/services/WRIR/ConsentDecree/MapServer/0'),
            waltonAwardLayer = new FeatureLayer('https://wygiscservices10-3.wygisc.org/arcgis/rest/services/WRIR/WaltonAwards/MapServer/0'),
            remandWaltonLayer = new FeatureLayer('https://wygiscservices10-3.wygisc.org/arcgis/rest/services/WRIR/RemandWalton/MapServer/0'),
            irrigUnitLayer = new FeatureLayer('https://wygiscservices10-3.wygisc.org/arcgis/rest/services/WRIR/IrrigationUnits/MapServer/0'),


       // renderers
            reservedRightsRenderer = new SimpleRenderer(symbolUtil.reservedRightSymbol()),
            consentDecreeRenderer = new SimpleRenderer(symbolUtil.consentDecreeSymbol()),
            waltonAwardRenderer = new SimpleRenderer(symbolUtil.waltonAwardSymbol()),
            remandWaltonRenderer = new SimpleRenderer(symbolUtil.remandWaltonSymbol()),
            irrigUnitRenderer = new SimpleRenderer(symbolUtil.irrigUnitSymbol());


        reservedRightsLayer.setRenderer(reservedRightsRenderer);
        consentDecreeLayer.setRenderer(consentDecreeRenderer);
        waltonAwardLayer.setRenderer(waltonAwardRenderer);
        remandWaltonLayer.setRenderer(remandWaltonRenderer);
        irrigUnitLayer.setRenderer(irrigUnitRenderer);



        layers.push(reservedRightsLayer, consentDecreeLayer, waltonAwardLayer, remandWaltonLayer, irrigUnitLayer);

        return layers;
    }

    return {
        loadServices: loadServices
    };

});
