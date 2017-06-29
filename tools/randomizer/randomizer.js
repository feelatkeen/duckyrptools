function randomizingint(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; 
}
$("#random1").hide()
$("#random2").hide()
$("#random3").hide()
$("#randomnumui").hide()
$("#rndlistui").hide()
if($("#randomselector").find(":selected").text() == "Случайное число"){
	$("#randomnumui").show()
}
if($("#randomselector").find(":selected").text() == "Случайная вещь из списка"){
	$("#rndlistui").show()
}
$("#randomselector").on('change', function(){
	if($("#randomselector").find(":selected").text() == "Случайное число"){
		$("#randomnumui").show()
	}else{
		$("#randomnumui").hide()
	}
	if($("#randomselector").find(":selected").text() == "Случайная вещь из списка"){
		$("#rndlistui").show()
	}else{
		$("#rndlistui").hide()
	}
});
$("#selbtn").click(function(){
	$("#random2").hide();
	if($("#randomselector").find(":selected").text() == "Случайное число"){
		maxrand = $("#randommax").val();
		minrand = $("#randommin").val();
		randnumber = randomizingint(minrand, maxrand)
		$("#random1res").text(randnumber);
		$("#random1").show();
		$("#random2").hide();
		$("#random3").hide();
	}
	if($("#randomselector").find(":selected").text() == "Случайное да/нет"){
		yesorno = randomizingint(1, 100);
		console.log(yesorno)
		if(yesorno > 50){
			$("#random2res").text("ДА");
		}
		if(yesorno < 50){
			$("#random2res").text("НЕТ");
		}
		if ($("#random2res").text() == "ДА"){
			$("#random2res").removeClass('nores');
			$("#random2res").addClass('yesres');
		}
		if ($("#random2res").text() == "НЕТ"){
			$("#random2res").removeClass('yesres');
			$("#random2res").addClass('nores');
		}
		$("#random1").hide();
		$("#random2").show();
		$("#random3").hide();
	}
	if($("#randomselector").find(":selected").text() == "Случайная вещь из списка"){
		rndlist = $("#rndlistarea").val().split('\n');
		rndlistnum = randomizingint(0, rndlist.length);
		console.log(rndlist[rndlistnum])
		$("#random3res").text(rndlist[rndlistnum])
		$("#random1").hide();
		$("#random2").hide();
		$("#random3").show();
	}
});