/*global define*/
define([
    'dojo/_base/Color',
    'esri/symbols/SimpleFillSymbol',
    'esri/symbols/SimpleLineSymbol'
], function(Color, SimpleFillSymbol, SimpleLineSymbol) {

    return {
        reservedRightSymbol: function() {
            return new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID,
                // outline of symbol
                new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new Color([255, 255, 255]), 1),
                // color of fill
                new Color([0, 0, 0, 0.5]));
        },
        consentDecreeSymbol: function() {
            return new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID,
                // outline of symbol
                new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new Color([255, 255, 255]), 1),
                // color of fill
                new Color([255, 205, 0, 0.5]));
        },
        waltonAwardSymbol: function() {
            return new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID,
                // outline of symbol
                new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new Color([255, 255, 255]), 1),
                // color of fill
                new Color([0, 205, 0, 0.5]));
        },
        remandWaltonSymbol: function() {
            return new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID,
                // outline of symbol
                new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new Color([255, 255, 255]), 1),
                // color of fill
                new Color([0, 205, 128, 0.5]));
        },
        irrigUnitSymbol: function() {
            return new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID,
                // outline of symbol
                new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new Color([0, 8, 5]), 0.2),
                // color of fill
                new Color([0, 128, 108, 0.3]));
        }
    };



});
