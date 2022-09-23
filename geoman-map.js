map.pm.addControls({  
    positions: {
     draw: 'topleft',
     edit: 'topright',
  },  
  drawText: false,
  drawPolyline: false,
  drawMarker: false,
 drawCircle: false,
drawCircleMarker: false,
 drawRectangle: false,
 drawCircle: false,

});
 map.pm.Toolbar.changeControlOrder([
  'drawPolygon',
  'drawPolyline',
  'drawMarker',
]);
map.pm.setLang('ua');

 map.pm.setPathOptions(
//    { color: 'orange', weight: 7, stripeColor:'black', renderer: L.canvas(), stripeId: "diagonal_left_down_to_right_up" } 
   {
      ignoreShapes: ['Line'],
    }
 );



 

function bindTooltip_geometry_info (layer) {
    console.log('bindtooltip called')
    
     if (layer.pm.getShape()==="Polygon"){
   
layer.bindTooltip(`<b style="font-size: 14px">Площа: ${(turf.area(layer.toGeoJSON())/10000).toFixed(4)} га</br>
      Периметр: ${(turf.length(layer.toGeoJSON(), {units: 'meters'})).toFixed(1)} м </b>`,)

}
    else if(layer.pm.getShape()==="Line") {

   layer.bindTooltip(`<b style="font-size: 14px">Довжина: ${turf.length(layer.toGeoJSON(), {units: 'meters'}).toFixed(1)} м </b>`,)
  }
}
 
 
   LayerDrawnByGeoman.on('pm:edit', e=> {
 
 setTimeout(()=>geoman_info_label=``, 1000)
  })
 
   
 var points, polygon_area, polygon_perimeter, line_length
map.on('pm:drawstart', ({ workingLayer }) => {
   workingLayer.on('pm:snapdrag', (e) => {
     
if (e.shape === "Polygon") {
 points = []
    for (var x in e.workingLayer._latlngs) {

     points.push([e.workingLayer._latlngs[x].lng, e.workingLayer._latlngs[x].lat])
     }
    if (e.workingLayer._latlngs.length == 1) {
    points.push([lng, lat])
  polygon_perimeter = turf.length(turf.lineString(points), {units: 'meters'}).toFixed(1)
    
  geoman_info_label = `<b style="font-size: 15px">Площа: 0,0000 га | Периметр: ${polygon_perimeter} м</b>`
    }
  else if (e.workingLayer._latlngs.length >= 2) {
  points.push([lng, lat])
  polygon_perimeter = turf.length(turf.lineString(points), {units: 'meters'}).toFixed(1)
  points.push([e.workingLayer._latlngs[0].lng, e.workingLayer._latlngs[0].lat])
  
  polygon_area = (turf.area(turf.polygon([points]))/10000).toFixed(4)
  
  geoman_info_label = `<b style="font-size: 15px">Площа: ${polygon_area} га | Периметр: ${polygon_perimeter} м</b>`
 }
 }
 
 else if (e.shape === "Cut") {
  e.layerInteractedWith.unbindTooltip()
 } 
 
else if (e.shape === "Line") {
 points = []
    for (var x in e.workingLayer._latlngs) {

     points.push([e.workingLayer._latlngs[x].lng, e.workingLayer._latlngs[x].lat])
     }
    if (e.workingLayer._latlngs.length >= 1) {
    points.push([lng, lat])
  line_length = turf.length(turf.lineString(points), {units: 'meters'}).toFixed(1)
  geoman_info_label = `<b style="font-size: 15px">Довжина = ${line_length} м</b>`
    }
    
 }
 
});

}); 

