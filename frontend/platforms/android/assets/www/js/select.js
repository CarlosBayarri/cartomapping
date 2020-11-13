var lat = null;
var lon = null;
	
$(function(){
	$('#BtnSelectCultivos').click(function(){
		console.log(1);
		var len_table = document.getElementById('table').rows.length;
		if (document.getElementById('table').rows.length != 1){
			for (var j=len_table - 1; j>0; j--) { document.getElementById('table').deleteRow(j);	}
		} 
		$.ajax({
			url: 'http://13.59.68.202/SelectCultivos',
			data: $('form').serialize(),
			type: 'POST',
			success: function(response){
				console.log(2);				
				var SJSON = JSON.parse(response);
				console.log(SJSON);
				var selection = SJSON['select'];		
				console.log(selection[0]);
				
				
				for (var i=0;i<selection.length;i++){
					var sss = selection[i][0];
					console.log(sss);
					var ss = sss.replace('(','["');
					var ss = ss.replace(')','"]');
					var ss = ss.replace(/,/g ,'","');
					console.log(ss);
					var result = JSON.parse(ss);
					console.log(result);
				
					var id = result[0];
					var tipo = result[1];
					var lat = result[2];
					var lon = result[3];
						
					
					var feature = new ol.Feature(
							new ol.geom.Point([parseFloat(lon),parseFloat(lat)])
						);
						if (tipo == "productivo"){
					feature.setStyle(productivoStyle);
					
					}
					else {
						feature.setStyle(improductivoStyle);
						
					}	
					vectorSource.addFeature(feature);
				
					tr = $('<tr/>');
					tr.append("<td class='text-left'>" + id + "</td>");
					tr.append("<td class='text-left'>" + tipo + "</td>");
					tr.append("<td class='text-left'>" + lat + "</td>");	
					tr.append("<td class='text-left'>" + lon + "</td>");				
					$('table').append(tr);
				}
			},
			error: function(error){
				console.log(error);
			}
		});
	});
		$('#BtnSelectPuntos').click(function(){
		console.log(1);
		var len_table = document.getElementById('table').rows.length;
		if (document.getElementById('table').rows.length != 1){
			for (var j=len_table - 1; j>0; j--) { document.getElementById('table').deleteRow(j);	}
		} 
		$.ajax({
			url: 'http://13.59.68.202/SelectPuntos',
			data: $('form').serialize(),
			type: 'POST',
			success: function(response){
				console.log(2);				
				var SJSON = JSON.parse(response);
				console.log(SJSON);
				var selection = SJSON['select'];		
				console.log(selection[0]);
				
				
				for (var i=0;i<selection.length;i++){
					var sss = selection[i][0];
					console.log(sss);
					var ss = sss.replace('(','["');
					var ss = ss.replace(')','"]');
					var ss = ss.replace(/,/g ,'","');
					var ss = ss.replace(/""/g ,'"');
					console.log(ss);
					var result = JSON.parse(ss);
					console.log(result);
				
					var id = result[0];
					var nombre = result[1];
					var desc = result[2];
					var lat = result[3];
					var lon = result[4];
						
					
					var feature = new ol.Feature(
							new ol.geom.Point([parseFloat(lon),parseFloat(lat)])
						);
						
					feature.setStyle(productivoStyle);	
					vectorSource.addFeature(feature);
				
					tr = $('<tr/>');
					tr.append("<td class='text-left'>" + id + "</td>");
					tr.append("<td class='text-left'>" + nombre + "</td>");
					tr.append("<td class='text-left'>" + desc + "</td>");
					tr.append("<td class='text-left'>" + lat + "</td>");	
					tr.append("<td class='text-left'>" + lon + "</td>");				
					$('table').append(tr);
				}
			},
			error: function(error){
				console.log(error);
			}
		});
	});
		$('#BtnSelectSupermercados').click(function(){
		console.log(1);
		var len_table = document.getElementById('table').rows.length;
		if (document.getElementById('table').rows.length != 1){
			for (var j=len_table - 1; j>0; j--) { document.getElementById('table').deleteRow(j);	}
		} 
		$.ajax({
			url: 'http://13.59.68.202/SelectSupermercados',
			data: $('form').serialize(),
			type: 'POST',
			success: function(response){
				console.log(2);				
				var SJSON = JSON.parse(response);
				console.log(SJSON);
				var selection = SJSON['select'];		
				console.log(selection[0]);
				
				
				for (var i=0;i<selection.length;i++){
					var sss = selection[i][0];
					console.log(sss);
					var ss = sss.replace('(','["');
					var ss = ss.replace(')','"]');
					var ss = ss.replace(/,/g ,'","');
					console.log(ss);
					var result = JSON.parse(ss);
					console.log(result);
				
					var id = result[0];
					var nombre = result[1];
					var lat = result[2];
					var lon = result[3];
						
					
					var feature = new ol.Feature(
							new ol.geom.Point([parseFloat(lon),parseFloat(lat)])
						);
						if (tipo == "productivo"){
					feature.setStyle(productivoStyle);
					
					}
					else {
						feature.setStyle(improductivoStyle);
						
					}	
					vectorSource.addFeature(feature);
				
					tr = $('<tr/>');
					tr.append("<td class='text-left'>" + id + "</td>");
					tr.append("<td class='text-left'>" + nombre + "</td>");
					tr.append("<td class='text-left'>" + lat + "</td>");	
					tr.append("<td class='text-left'>" + lon + "</td>");				
					$('table').append(tr);
				}
			},
			error: function(error){
				console.log(error);
			}
		});
	});
});