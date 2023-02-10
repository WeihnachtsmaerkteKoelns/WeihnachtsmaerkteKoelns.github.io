var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_AusgangspunktHbf_1 = new ol.format.GeoJSON();
var features_AusgangspunktHbf_1 = format_AusgangspunktHbf_1.readFeatures(json_AusgangspunktHbf_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AusgangspunktHbf_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AusgangspunktHbf_1.addFeatures(features_AusgangspunktHbf_1);
var lyr_AusgangspunktHbf_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AusgangspunktHbf_1, 
                style: style_AusgangspunktHbf_1,
                interactive: true,
                title: '<img src="styles/legend/AusgangspunktHbf_1.png" /> Ausgangspunkt Hbf'
            });
var format_Heatmap2022_2 = new ol.format.GeoJSON();
var features_Heatmap2022_2 = format_Heatmap2022_2.readFeatures(json_Heatmap2022_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Heatmap2022_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Heatmap2022_2.addFeatures(features_Heatmap2022_2);
var lyr_Heatmap2022_2 = new ol.layer.Heatmap({
                declutter: true,
                source:jsonSource_Heatmap2022_2, 
                radius: 10 * 2,
                gradient: ['#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#a50f15', '#67000d'],
                blur: 15,
                shadow: 250,
                title: 'Heatmap 2022'
            });
var format_Weihnachtsmrkte2022_3 = new ol.format.GeoJSON();
var features_Weihnachtsmrkte2022_3 = format_Weihnachtsmrkte2022_3.readFeatures(json_Weihnachtsmrkte2022_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Weihnachtsmrkte2022_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Weihnachtsmrkte2022_3.addFeatures(features_Weihnachtsmrkte2022_3);
var lyr_Weihnachtsmrkte2022_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Weihnachtsmrkte2022_3, 
                style: style_Weihnachtsmrkte2022_3,
                interactive: true,
                title: '<img src="styles/legend/Weihnachtsmrkte2022_3.png" /> Weihnachtsmärkte 2022'
            });
var format_Heatmap2018_4 = new ol.format.GeoJSON();
var features_Heatmap2018_4 = format_Heatmap2018_4.readFeatures(json_Heatmap2018_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Heatmap2018_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Heatmap2018_4.addFeatures(features_Heatmap2018_4);
var lyr_Heatmap2018_4 = new ol.layer.Heatmap({
                declutter: true,
                source:jsonSource_Heatmap2018_4, 
                radius: 10 * 2,
                gradient: ['#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#a50f15', '#67000d'],
                blur: 15,
                shadow: 250,
                title: 'Heatmap 2018'
            });
var format_Weihnachtsmrkte2018_5 = new ol.format.GeoJSON();
var features_Weihnachtsmrkte2018_5 = format_Weihnachtsmrkte2018_5.readFeatures(json_Weihnachtsmrkte2018_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Weihnachtsmrkte2018_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Weihnachtsmrkte2018_5.addFeatures(features_Weihnachtsmrkte2018_5);
var lyr_Weihnachtsmrkte2018_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Weihnachtsmrkte2018_5, 
                style: style_Weihnachtsmrkte2018_5,
                interactive: true,
                title: '<img src="styles/legend/Weihnachtsmrkte2018_5.png" /> Weihnachtsmärkte 2018'
            });
var format_FamilienfreundlicheMrkte2022_6 = new ol.format.GeoJSON();
var features_FamilienfreundlicheMrkte2022_6 = format_FamilienfreundlicheMrkte2022_6.readFeatures(json_FamilienfreundlicheMrkte2022_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FamilienfreundlicheMrkte2022_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FamilienfreundlicheMrkte2022_6.addFeatures(features_FamilienfreundlicheMrkte2022_6);
var lyr_FamilienfreundlicheMrkte2022_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FamilienfreundlicheMrkte2022_6, 
                style: style_FamilienfreundlicheMrkte2022_6,
                interactive: true,
                title: '<img src="styles/legend/FamilienfreundlicheMrkte2022_6.png" /> Familienfreundliche Märkte 2022'
            });
var format_ATM20182022_7 = new ol.format.GeoJSON();
var features_ATM20182022_7 = format_ATM20182022_7.readFeatures(json_ATM20182022_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ATM20182022_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ATM20182022_7.addFeatures(features_ATM20182022_7);
var lyr_ATM20182022_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ATM20182022_7, 
                style: style_ATM20182022_7,
                interactive: true,
                title: '<img src="styles/legend/ATM20182022_7.png" /> ATM 2018 + 2022'
            });

lyr_OSMStandard_0.setVisible(true);lyr_AusgangspunktHbf_1.setVisible(true);lyr_Heatmap2022_2.setVisible(true);lyr_Weihnachtsmrkte2022_3.setVisible(true);lyr_Heatmap2018_4.setVisible(true);lyr_Weihnachtsmrkte2018_5.setVisible(true);lyr_FamilienfreundlicheMrkte2022_6.setVisible(true);lyr_ATM20182022_7.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_AusgangspunktHbf_1,lyr_Heatmap2022_2,lyr_Weihnachtsmrkte2022_3,lyr_Heatmap2018_4,lyr_Weihnachtsmrkte2018_5,lyr_FamilienfreundlicheMrkte2022_6,lyr_ATM20182022_7];
lyr_AusgangspunktHbf_1.set('fieldAliases', {'Id': 'Id', 'Name': 'Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Weihnachtsmrkte2022_3.set('fieldAliases', {'ID': 'ID', 'Name': 'Name', 'Anschrift': 'Anschrift', 'Postleitzahl': 'Postleitzahl', 'Stadtteil': 'Stadtteil', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Startdatum': 'Erster Öffnungstag', 'Enddatum': 'Letzter Öffnungstag', 'Oeffnungszeiten': 'Öffnungszeiten', 'Anzahl Staende': 'Anzahl Staende', 'Beschreibung': 'Beschreibung', 'Quelle': 'Quelle', });
lyr_Weihnachtsmrkte2018_5.set('fieldAliases', {'ID': 'ID', 'Name': 'Name', 'Anschrift': 'Anschrift', 'Postleitzahl': 'Postleitzahl', 'Stadtteil': 'Stadtteil', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Startdatum': 'Erster Öffnungstag', 'Enddatum': 'Letzter Öffnungstag', 'Oeffnungszeiten': 'Öffnungszeiten', 'Anzahl Staende': 'Anzahl Staende', 'Beschreibung': 'Beschreibung', 'Quelle': 'Quelle', 'field_14': 'field_14', 'field_15': 'field_15', 'field_16': 'field_16', 'field_17': 'field_17', 'field_18': 'field_18', 'field_19': 'field_19', 'field_20': 'field_20', 'field_21': 'field_21', 'field_22': 'field_22', 'field_23': 'field_23', 'field_24': 'field_24', 'field_25': 'field_25', });
lyr_FamilienfreundlicheMrkte2022_6.set('fieldAliases', {'ID': 'ID', 'Name': 'Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Kinderfreundlichkeit': 'Kinderfreundlichkeit', 'field_6': 'field_6', });
lyr_ATM20182022_7.set('fieldAliases', {'ID': 'ID', 'ATM Name': 'ATM Name', 'Anschrift': 'Anschrift', 'Postleitzahl': 'Postleitzahl', 'Stadtteil': 'Stadtteil', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Oeffnungszeiten': 'Oeffnungszeiten', });
lyr_AusgangspunktHbf_1.set('fieldImages', {'Id': 'CheckBox', 'Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_Weihnachtsmrkte2022_3.set('fieldImages', {'ID': 'Hidden', 'Name': 'TextEdit', 'Anschrift': 'TextEdit', 'Postleitzahl': 'Hidden', 'Stadtteil': 'TextEdit', 'Latitude': 'Hidden', 'Longitude': 'Hidden', 'Startdatum': 'TextEdit', 'Enddatum': 'TextEdit', 'Oeffnungszeiten': 'TextEdit', 'Anzahl Staende': 'Hidden', 'Beschreibung': 'TextEdit', 'Quelle': 'Hidden', });
lyr_Weihnachtsmrkte2018_5.set('fieldImages', {'ID': 'Hidden', 'Name': 'TextEdit', 'Anschrift': 'TextEdit', 'Postleitzahl': 'Hidden', 'Stadtteil': 'TextEdit', 'Latitude': 'Hidden', 'Longitude': 'Hidden', 'Startdatum': 'TextEdit', 'Enddatum': 'TextEdit', 'Oeffnungszeiten': 'TextEdit', 'Anzahl Staende': 'Hidden', 'Beschreibung': 'TextEdit', 'Quelle': 'Hidden', 'field_14': 'Hidden', 'field_15': 'Hidden', 'field_16': 'Hidden', 'field_17': 'Hidden', 'field_18': 'Hidden', 'field_19': 'Hidden', 'field_20': 'Hidden', 'field_21': 'Hidden', 'field_22': 'Hidden', 'field_23': 'Hidden', 'field_24': 'Hidden', 'field_25': 'Hidden', });
lyr_FamilienfreundlicheMrkte2022_6.set('fieldImages', {'ID': 'Range', 'Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Kinderfreundlichkeit': 'TextEdit', 'field_6': 'TextEdit', });
lyr_ATM20182022_7.set('fieldImages', {'ID': 'Range', 'ATM Name': 'TextEdit', 'Anschrift': 'TextEdit', 'Postleitzahl': 'Range', 'Stadtteil': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Oeffnungszeiten': 'TextEdit', });
lyr_AusgangspunktHbf_1.set('fieldLabels', {'Id': 'no label', 'Name': 'header label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_Weihnachtsmrkte2022_3.set('fieldLabels', {'Name': 'header label', 'Anschrift': 'inline label', 'Stadtteil': 'inline label', 'Startdatum': 'inline label', 'Enddatum': 'inline label', 'Oeffnungszeiten': 'inline label', 'Beschreibung': 'inline label', });
lyr_Weihnachtsmrkte2018_5.set('fieldLabels', {'Name': 'header label', 'Anschrift': 'inline label', 'Stadtteil': 'inline label', 'Startdatum': 'inline label', 'Enddatum': 'inline label', 'Oeffnungszeiten': 'inline label', 'Beschreibung': 'inline label', });
lyr_FamilienfreundlicheMrkte2022_6.set('fieldLabels', {'ID': 'no label', 'Name': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Kinderfreundlichkeit': 'no label', 'field_6': 'no label', });
lyr_ATM20182022_7.set('fieldLabels', {'ID': 'no label', 'ATM Name': 'no label', 'Anschrift': 'no label', 'Postleitzahl': 'no label', 'Stadtteil': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Oeffnungszeiten': 'no label', });
lyr_ATM20182022_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});