var lat = null;
var lon = null;

$(function(){
	$('#BtnInsertCultivos').click(function(){
		$.ajax({
			url: 'http://13.59.68.202/InsertCultivos',
			data: $("#cultivos").serialize(),
			type: 'POST',
			success: function(response){	
				console.log(1);			
				var SJSON = JSON.parse(response);
				var insert = SJSON['insert'];
				console.log("Insertado");
				console.log(insert);
			},
			error: function(error){
				console.log(error);
			}
		});
	});
	$('#BtnInsertSupermercados').click(function(){
		$.ajax({
			url: 'http://13.59.68.202/InsertSupermercados',
			data: $("#supermercados").serialize(),
			type: 'POST',
			success: function(response){	
				console.log(1);			
				var SJSON = JSON.parse(response);
				var insert = SJSON['insert'];
				console.log("Insertado");
				console.log(insert);
			},
			error: function(error){
				console.log(error);
			}
		});
	});
	$('#BtnInsertPuntos').click(function(){
		$.ajax({
			url: 'http://13.59.68.202/InsertPuntos',
			data: $("#puntos_interes").serialize(),
			type: 'POST',
			success: function(response){	
				console.log(1);			
				var SJSON = JSON.parse(response);
				var insert = SJSON['insert'];
				console.log("Insertado");
				console.log(insert);
			},
			error: function(error){
				console.log(error);
			}
		});
	});
	
});