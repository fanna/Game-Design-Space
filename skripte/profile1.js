// JavaScript Document
$(document).ready(function(e) {
	
	
	var user = getParamValue("user");
    $("#username").html(user);
	
	$("#photoHeading").click(function(e) {
        $("#photosDiv").slideToggle(200);
    });

	
	$("#sayButton").click(function(e) {
        var status = $("#sayText").val();
		if(!status == "") {
			var danas = new Date();
			var dan = danas.getDate();
			var mesec = danas.getMonth() + 1; 
			var godina = danas.getFullYear();
			var sat = danas.getHours();
			var minuti = danas.getMinutes();
			
			
			var formatiraniDatum = 
				dan + "/" + mesec + "/" + godina + " " +
				sat + ":" + minuti + "h";
			
			var newLi = $(document.createElement('li'));
			
			var newPDatum = $(document.createElement("p"));
			newPDatum.addClass('time');
			newPDatum.html(formatiraniDatum);
			
			var newPStatus = $(document.createElement('p'));
			newPStatus.addClass('status');
			newPStatus.html(status);
			
			newLi.append(newPDatum);
			newLi.append(newPStatus);
			
			$("#statusList").prepend(newLi);
			
			$("#sayText").val("");	
		}


		
    });
	
	function getParamValue(name) {
	var location = window.location.toString();
	var index = location.indexOf("?")+1;
	var subs = location.substring(index, location.length);
	var splitted = subs.split("&");

	for(i=0; i < splitted.length; i++) {
		var s = splitted[i].split("=");
		var pName  = s[0];
		var pValue = s[1];
		if(pName == name) {
			return pValue;
		}
	}	
}
	
});