$("#mobbattle").hide();
maxplrhp = 0
mobturn = 1
gamestart = 0
maxhp = 0
mobhp = 0
plrhp = 0
function randomizingint(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; 
}
$("#startfight").click(function(){
	mobtitle = $("#mobname").val()
	mobimg = $("#mobimg").val()
	mobhp = $("#mobhp").val()
	plrhp = $("#plrhp").val()
	if(mobtitle == ""){
		mobtitle = "Уточка"
	}
	if(mobimg == ""){
		mobimg = "duckmob.png"
	}
	if(mobhp == ""){
		mobhp = 100
	}
	if(plrhp == ""){
		plrhp = 100
		maxplrhp = maxplrhp
	}
	maxhp = mobhp
	maxplrhp = plrhp
	$("#plrhpinf").text("Ваше здоровье: "+plrhp+"/"+maxplrhp)
	$("#mobtitle").text(mobtitle)
	$("#gmobhp").text(mobhp+"/"+maxhp)
	$("#mobimgp").attr('src', mobimg)
	$("#entername").hide();
	$("#mobbattle").show();
	$("#attackstory").text("")
});
$("#attbtn").click(function(){
	if(mobturn == 0){
		if(plrhp > 0){
			if(mobhp > 0){
				mobhp = mobhp - randomizingint(0, maxhp/10)
				$("#attackstory").prepend("Вы попытались " + $("#attmob").val() + "! \n")
				mobturn = 1
			}else{
				$("#attackstory").prepend("Противник мертв.")
			}
		}
	}
});
setInterval(function(){
	if(mobturn == 1){
		if(plrhp > 0){
			if(mobhp > 0){
				attacks = $("#attacklist").val().split("\n")
				mobattack = attacks[randomizingint(0, attacks.length)]
				plrhp = plrhp - randomizingint(0, maxplrhp/10)
				$("#attackstory").prepend("Ждём ответа игрока. \n" + "Противник " + mobattack + "! \n")
				mobturn = 0
			}
		}
	}
	$("#plrhpinf").text("Ваше здоровье: "+plrhp+"/"+maxplrhp)
	$("#gmobhp").text(mobhp+"/"+maxhp)
	if(plrhp < 1){
		$("#attackstory").prepend("Игрок мертв. \n")
	}
	if(mobhp < 1){
		$("#attackstory").prepend("Противник мертв. \n")
	}
}, 1000);