var productivoStyle = new ol.style.Style({
    image: new ol.style.Circle({
    radius:6,
	fill: new ol.style.Fill({color:'green'})
    })
});
var improductivoStyle = new ol.style.Style({
    image: new ol.style.Circle({
    radius:6,
	fill: new ol.style.Fill({color:'brown'})
    })
});
		var vectorSource = new ol.source.Vector();
		var vectorLayer = new ol.layer.Vector({
			  source: vectorSource
			});
	
        olMap = new ol.Map({
            layers: [
                new ol.layer.Tile({
                    source: new ol.source.OSM()
                }),vectorLayer
            ],
            view: new ol.View({
				projection: "EPSG:4326",
                center: ol.proj.transform([-48152.168504, 4783763.015893], 'EPSG:3857', 'EPSG:4326'),
                zoom: 12
            }),
			target: document.getElementById('olMap')
        });


	
 var lat = null;
 var lon = null;
 
	function REQUEST(){
		
	var len_table = document.getElementById('table').rows.length;
	if (document.getElementById('table').rows.length != 1){
		for (var j=len_table - 1; j>0; j--) {
			document.getElementById('table').deleteRow(j);
		}
	} 
	
		var request = "SELECT";
		var feature = "id,tipo,ST_AsGeoJSON(geom)";
		var layer = document.getElementById("layer").value;
	window.open('http://13.59.68.202:5050/?REQUEST='+request+'&ATR='+feature+'&FROM='+layer+'','popUpWindow','height=400,width=600,left=10,top=10,scrollbars=yes,menubar=no');

	
	$.getJSON('http://13.59.68.202/node/public/Select.json', { get_param: 'id,tipo,st_asgeojson' }, function(data) {	
	var tr;
	console.log(data);
	for (var i=0;i<data.length;i++){
	lat = JSON.parse(data[i].st_asgeojson).coordinates[0];
	lon = JSON.parse(data[i].st_asgeojson).coordinates[1];
	console.log(lat,lon);
	var feature = new ol.Feature(
			new ol.geom.Point([parseFloat(lon),parseFloat(lat)])
		);
		if (data[i].tipo == "productivo"){
	feature.setStyle(productivoStyle);
	}
	else {
		feature.setStyle(improductivoStyle);
	}
    vectorSource.addFeature(feature);
	
		tr = $('<tr/>');
        tr.append("<td class='text-left'>" + data[i].id + "</td>");
        tr.append("<td class='text-left'>" + data[i].tipo + "</td>");
        tr.append("<td class='text-left'>" + lat + "</td>");
		tr.append("<td class='text-left'>" + lon + "</td>");
        $('table').append(tr);
	}
 	
	
});
}
		
		
	function IrMapa(){
		
		
		
		
	}
		//insert into cultivos(id,tipo,geom) values (3,'improductivo',ST_GeomFromText('POINT(39.4814 -0.3286)',4326));
	function REQUEST2(){
		var request = "INSERT";
		var campos = document.getElementById("campos").value;
		var id = document.getElementById("id").value;
		var tipo = document.getElementById("tipo").value;
		var coor = "ST_GeomFromText('POINT("+coordinates[1]+" "+coordinates[0]+")',4326)";
		var valores = ""+id+",'"+tipo+"',"+coor+"";
		var capa = document.getElementById("layer").value;
		window.open('http://13.59.68.202:5050/?REQUEST='+request+'&CAMPOS='+campos+'&VALORES='+valores+'&FROM='+capa+'','popUpWindow','height=400,width=600,left=10,top=10,scrollbars=yes,menubar=no');

		return false;
		}
		
	function ReadSelect(){
		
$.getJSON('http://13.59.68.202/node/public/Select.json', { get_param: 'code, title, kind' }, function(data) {
	console.log(data);
	var tr;
	for (var i=0;i<data.length;i++){
		tr = $('<tr/>');
        tr.append("<td class='text-left'>" + data[i].code + "</td>");
        tr.append("<td class='text-left'>" + data[i].title + "</td>");
        tr.append("<td class='text-left'>" + data[i].kind + "</td>");
        $('table').append(tr);		
	}

	
});
		 	

	}
	
        var description;



		
		 /*GEOLOCATE*/
		 var view = olMap.getView();
		 var geolocation = new ol.Geolocation({
        projection: view.getProjection()
      });

      function el(id) {
        return document.getElementById(id);
      }

      el('track').addEventListener('change', function() {
        geolocation.setTracking(this.checked);
		var pos = geolocation.getPosition();
		
      });

      // update the HTML page when the position changes.
      geolocation.on('change', function() {
        
		
		
		
      });

      // handle geolocation error.
      geolocation.on('error', function(error) {
        var info = document.getElementById('info');
        info.innerHTML = error.message;
        info.style.display = '';
      });

      var accuracyFeature = new ol.Feature();
      geolocation.on('change:accuracyGeometry', function() {
        accuracyFeature.setGeometry(geolocation.getAccuracyGeometry());
      });

      var positionFeature = new ol.Feature();
      positionFeature.setStyle(new ol.style.Style({
        image: new ol.style.Circle({
          radius: 6,
          fill: new ol.style.Fill({
            color: '#3399CC'
          }),
          stroke: new ol.style.Stroke({
            color: '#fff',
            width: 2
          })
        })
      }));

	  var coor = [];
	  var coordinates = [];
      geolocation.on('change:position', function() {
        coordinates = geolocation.getPosition();
        positionFeature.setGeometry(coordinates ?
          new ol.geom.Point(coordinates) : null);
		  
		  olMap.getView().setCenter(coordinates);
		  olMap.getView().setZoom(17);
		  //console.log(olMap.getView().getProjection());
		
	   	var geo = "+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs";
		var mer = "+proj=merc +lon_0=0 +k=1 +x_0=0 +y_0=0 +a=6378137 +b=6378137 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ";
		coor = proj4(mer,geo,coordinates).reverse();

		document.getElementById("TextLoc").innerHTML = coordinates[1].toFixed(4) + "<br>" + coordinates[0].toFixed(4);
		$('#latitud1').val(coordinates[1].toFixed(6));
		$('#longitud1').val(coordinates[0].toFixed(6));
		$('#latitud2').val(coordinates[1].toFixed(6));
		$('#longitud2').val(coordinates[0].toFixed(6));
		$('#latitud3').val(coordinates[1].toFixed(6));
		$('#longitud3').val(coordinates[0].toFixed(6));
		//document.getElementById("longitud").innerHTML = coordinates[0].toFixed(4);
		
		//console.log(coordinates);
      });
	
	
		  
      new ol.layer.Vector({
        map: olMap,
        source: new ol.source.Vector({
          features: [accuracyFeature, positionFeature]
        })
      });
	  
	  
	  function share(){
		
		var button = document.createElement("a");
		button.setAttribute("href","whatsapp://send?text=Latitud: "+coor[0].toFixed(6)+", longitud: "+coor[1].toFixed(6)+"");
		document.body.appendChild(button);
		button.click();
		button.parentElement.removeChild(button);

		}
		
		//FIN GEOLOCATE 
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		

