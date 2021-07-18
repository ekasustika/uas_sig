var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'Stamen Terrain',
    'type': 'base',
    source: new ol.source.Stamen({
        layer: 'terrain'
    })
})
]
});
var format_INDONESIA_KAB_0 = new ol.format.GeoJSON();
var features_INDONESIA_KAB_0 = format_INDONESIA_KAB_0.readFeatures(json_INDONESIA_KAB_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_INDONESIA_KAB_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_INDONESIA_KAB_0.addFeatures(features_INDONESIA_KAB_0);var lyr_INDONESIA_KAB_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_INDONESIA_KAB_0, 
                style: style_INDONESIA_KAB_0,
    title: 'INDONESIA_KAB<br />\
    <img src="styles/legend/INDONESIA_KAB_0_0.png" />  711.0000 - 1259.6000 <br />\
    <img src="styles/legend/INDONESIA_KAB_0_1.png" />  1259.6000 - 2133.2000 <br />\
    <img src="styles/legend/INDONESIA_KAB_0_2.png" />  2133.2000 - 3785.2000 <br />\
    <img src="styles/legend/INDONESIA_KAB_0_3.png" />  3785.2000 - 7498.8000 <br />\
    <img src="styles/legend/INDONESIA_KAB_0_4.png" />  7498.8000 - 16566.0000 <br />'
        });

lyr_INDONESIA_KAB_0.setVisible(true);
var layersList = [baseLayer,lyr_INDONESIA_KAB_0];
lyr_INDONESIA_KAB_0.set('fieldAliases', {'Kabupaten_': 'Kabupaten_', 'Ibukota': 'Ibukota', 'Provinsi': 'Provinsi', 'Industri': 'Industri', 'Tenaga_Krj': 'Tenaga_Krj', });
lyr_INDONESIA_KAB_0.set('fieldImages', {'Kabupaten_': 'TextEdit', 'Ibukota': 'TextEdit', 'Provinsi': 'TextEdit', 'Industri': 'TextEdit', 'Tenaga_Krj': 'TextEdit', });
lyr_INDONESIA_KAB_0.set('fieldLabels', {'Kabupaten_': 'inline label', 'Ibukota': 'inline label', 'Provinsi': 'inline label', 'Industri': 'inline label', 'Tenaga_Krj': 'inline label', });
lyr_INDONESIA_KAB_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});