// JavaScript Document
$(document).ready(function(e) {
    $("#photos1").hide();
	var currentImage;
	$('#ma').click(function(e){
		$("#photos1").hide();
		$("#photos").show();
	});
	$('#ot').click(function(e){
		$("#photos").hide();
		$("#photos1").show();
	});
	
	
	$("#photos img.image").hover(function() {
		//ovo je mouse IN
		$(this).addClass('glowing');
	},
	function() {
		//mouse OUT
		$(this).removeClass('glowing');
	});
	
	$("#photos img.image").click(function(e) {
		//specimo propagaciju click dogadjaja
		e.stopPropagation();
        //postavimo sliku na koju je kluknuto kao trenutnu
		currentImage = $(this);
		//i prikazemo je uvecanu
		showImage();
    });

    	$("#photos1 img.image").hover(function() {
		//ovo je mouse IN
		$(this).addClass('glowing');
	},
	function() {
		//mouse OUT
		$(this).removeClass('glowing');
	});
	
	$("#photos1 img.image").click(function(e) {
		//specimo propagaciju click dogadjaja
		e.stopPropagation();
        //postavimo sliku na koju je kluknuto kao trenutnu
		currentImage = $(this);
		//i prikazemo je uvecanu
		showImage();
    });
	
	$("body").click(function(e) {
        $("#overlay").fadeOut();
    });
	
	$("#overlay #leftArrow").click(function(e) {
		e.stopPropagation();
        var previous = currentImage.prev();
		//proverimo da li postoji prethodna
		//odn da li smo dosli do pocetka
		if(previous.length) {
			//ako postoji, onda ona postaje aktuelna
			currentImage = previous;
			//i prikazuje se
			showImage();
		}
    });

    $("#overlay #rightArrow").click(function(e) {
		e.stopPropagation();
        var next = currentImage.next();
		//proverimo da li postoji prethodna
		//odn da li smo dosli do pocetka
		if(next.length) {
			//ako postoji, onda ona postaje aktuelna
			currentImage = next;
			//i prikazuje se
			showImage();
		}
    });
	
	function showImage() {
		var src = currentImage.attr('src');
		var descr = currentImage.attr('alt');
		
		$("#pictureContainer img").attr("src", src);
		$("#pictureContainer #description").text(descr);
		
		$("#overlay").fadeIn();
	}
	
	
	
});