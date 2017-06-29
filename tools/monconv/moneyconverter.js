var usd = 0;
var rub = 0;
var csv = 0;
var uah = 0;
$("#convertertool").hide();
$("#okbtncustom").click(function(){
	$("#moneys1").append("<option>" + $("#customname").val() + "</option>")
	$("#moneys2").append("<option>" + $("#customname").val() + "</option>")
	$("#convertertool").show()
	$("#customval").hide()
	$.get("https://www.cbr-xml-daily.ru/daily_json.js", function(data){
		kursvalyut = JSON.parse(data);
		console.log(kursvalyut.Valute);
		usd = kursvalyut.Valute.USD.Value;
		csv = usd / $("#customvalue").val();
		uah  = kursvalyut.Valute.UAH.Value / kursvalyut.Valute.UAH.Nominal
	});
});
$("#okbtn").click(function(){
	var moneys1 = $("#moneys1").find(":selected").text();
	var moneys2 = $("#moneys2").find(":selected").text();
	var moneyval = $("#moneyval").val();
	if (moneys1 == "USD"){
		if (moneys2 == "RUB"){
			console.log(moneyval + " and " + usd)
			$("#convresult").text(moneyval * usd)
		}
		if (moneys2  == $("#customname").val()){
			console.log(moneyval + " and " + csv)
			$("#convresult").text($("#customvalue").val() * moneyval)
		}
		if (moneys2 == "USD"){
			$("#convresult").text(moneyval)
		}
		if (moneys2 == "UAH"){
			$("#convresult").text(moneyval * usd / uah)
		}
	}
	if (moneys1 == "RUB"){
		if (moneys2 == "RUB"){
			$("#convresult").text(moneyval)
		}
		if (moneys2 == "USD"){
			$("#convresult").text(moneyval / usd)
		}
		if (moneys2  == $("#customname").val()){
			$("#convresult").text(moneyval / usd * $("#customvalue").val())
		}
		if (moneys2 == "UAH"){
			$("#convresult").text(moneyval / uah)
		}
	}
	if (moneys1  == $("#customname").val()){
		if (moneys2  == $("#customname").val()){
			$("#convresult").text(moneyval)
		}
		if (moneys2 == "RUB"){
			$("#convresult").text(moneyval * usd / $("#customvalue").val())
		}
		if (moneys2 == "USD"){
			$("#convresult").text(moneyval / $("#customvalue").val())
		}
		if (moneys2 == "UAH"){
			$("#convresult").text(moneyval * usd / $("#customvalue").val() / uah)
		}
	}
	if (moneys1 == "UAH"){
		if (moneys2 == "UAH"){
			$("#convresult").text(moneyval)
		}
		if (moneys2 == "RUB"){
			$("#convresult").text(moneyval * uah)
		}
		if (moneys2 == "USD"){
			$("#convresult").text(moneyval / usd * uah) 
		}
		if (moneys2  == $("#customname").val()){
			$("#convresult").text(moneyval / usd / $("#customvalue").val() * uah)
		}
	}
});