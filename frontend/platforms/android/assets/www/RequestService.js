/* /* CAPA DE PRUEBA EN LA BASE DE DATOS DE "picanya_db" PARA CREAR EL PUENTE */
/*
		CREATE TABLE films (
    code        char(5) CONSTRAINT firstkey PRIMARY KEY,
    title       varchar(40) NOT NULL,
    kind        varchar(10)   
);



//insert into films (code,title,kind) values (1,'Avatar','Ficción');

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
		var geom = "ST_AsGeoJSON(geom)"
		var layer = document.getElementById("layer").value;
	window.open('http://13.59.68.202:5050/?REQUEST='+request+'&ATR='+feature+'&FROM='+layer+'','popUpWindow','height=400,width=600,left=10,top=10,scrollbars=yes,menubar=no');

	
	$.getJSON('http://13.59.68.202/node/public/Select.json', { get_param: 'id,tipo,st_asgeojson' }, function(data) {	
	var tr;
	

	
	
	for (var i=0;i<data.length;i++){
	lat = JSON.parse(data[i].st_asgeojson).coordinates[0];
	lon = JSON.parse(data[i].st_asgeojson).coordinates[1];
	console.log(lat,lon);
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
		
	function REQUEST2(){
		var request = document.getElementById("request1").value;
		var campos = document.getElementById("campos").value;
		var valores = document.getElementById("valores").value;
		var layer = document.getElementById("layer").value;
		window.open('http://13.59.68.202:5050/?REQUEST='+request+'&CAMPOS='+campos+'&VALORES='+valores+'&FROM='+layer+'','popUpWindow','height=400,width=600,left=10,top=10,scrollbars=yes,menubar=no'); 
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
		
		
		
		
		
		
 */