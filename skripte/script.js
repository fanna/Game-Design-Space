// JavaScript Document
$(document).ready(function(e) {
    
	
	var users = new Array("user1:1234:BojanBanjac", 
						  "user2:abcd:RatkoObradovic", 
						  "notch:minecraft:MarkusPersson");
	
	var expanded = false;
	
	$("input").focusout(function() {
		//proveravamo da li imaju klasu required
		//i da li su prazna
        if(	$(this).attr('class') == "required" && 
			$(this).val() == "") {
				$(this).addClass('error');
		}else {
			//inace maknemo klasu
			$(this).removeClass('error');	
		}
    });
	
	$("#loginForm").submit(function(e) {
        if(isFormOK($(this))) {
			var usernameValue = 
				$("#loginForm input[name=mysite-username]").val();
			var passwordValue = 
				$("#loginForm input[name=password]").val();
			
			//provera login podataka
			/*if(usernameValue == username 
				&& passwordValue == password) {
					//ako je sve u redu, submit-ujem formu
					$("#loginForm").attr("action", 
						"profile.html?user=" + username);
					$(this).submit();	
			}else {
					//ako nije zaustavim submit i prikazem poruku
					e.preventDefault();
					showMessage('Uneli ste pogresne login podatke');
			}*/
			
			for(i=0; i<users.length; i++) {
				var elementNiza = users[i];
				var elementSplit = elementNiza.split(":");
				var elementUser = elementSplit[0];
				var elementPass = elementSplit[1];
				var elementName = elementSplit[2];


				if(elementUser == usernameValue &&
						elementPass == passwordValue) {
					if(elementNiza == users[0]){
						$("#loginForm").attr("action", 
						"profile1.html?user=" + elementName);
					$(this).submit();
					}
					else if(elementNiza == users[1]){
					//break;
					$("#loginForm").attr("action", 
						"profile1.html?user=" + elementName);
					$(this).submit();		
				}
					else {
					//break;
					$("#loginForm").attr("action", 
						"profile.html?user=" + elementName);
					$(this).submit();		
				}
			}


			}


			
			e.preventDefault();
			showMessage('Wrong username or password');
			
		}else {
			//provera praznih polja
			e.preventDefault(); //zaustavi submit forme
			showMessage('You have empty field'); //i prikaze poruku
		}
    });
	
	
	$("#registerHandle").click(function() {
        if(!expanded) {
			$("#registerForm").css({"border":"2px solid white"});
			$(this).css({"margin-right":"-45px"});
			$("#registerForm").animate({ width:'400' }, 600);
			expanded = true;
		}else {
			$("#registerForm").css({"border":"0px solid white"});
			$(this).css({"margin-right":"-57px"});
			$("#registerForm").animate({ width:'0' }, 600);
			expanded = false;
		}
    });
	
	function showMessage(text) {
		$("#messageDiv").slideDown('slow', function() {
			$("#messageDiv").html(text);
		});
	}
	
	function isFormOK(form) {
		var ok = true;
		//iteracija kroz sva input polja na formi
		form.find('input').each(function(){
   			if($(this).hasClass('required') && 
				$(this).hasClass('error')) {
				ok = false;
			}
		});	
		return ok;
	}

	var userica;
	var pasvordica;
	var imence;
	var prezimence;
	var email;

		$("#registracija").submit(function(e) {
        if(isFormOK($(this))) {
			var rusernameValue = 
				$("#registracija input[name=mysite-rusername]").val();
			var rpasswordValue = 
				$("#registracija input[name=rpassword]").val();
			var nameValue = 
				$("#registracija input[name=mysite-name]").val();
			var surnameValue = 
				$("#registracija input[name=mysite-surname]").val();
			var emailValue = 
				$("#registracija input[name=mysite-email]").val();

				


			
			e.preventDefault();
			showMessage('You are registred');
			
		}else {

			//provera praznih polja
			e.preventDefault(); //zaustavi submit forme
			showMessage('You have an empty field'); //i prikaze poruku
		}
    });
		//za prazna polja ali ne radi
		/*
		function provera(form){
    var rusernameValue = document.forms["registracija"]["mysite-rusername"].value;
    var rpasswordValue = document.forms["registracija"]["rpassword"].value;
    var nameValu = document.forms["registracija"]["mysite-name"].value;
    var surnameValue = document.forms["registracija"]["mysite-surname"].value;
    var emailValue = document.forms["registracija"]["mysite-mail"].value;
	if (rusernameValue == null || rusernameValue == "") {
       			showMessage('You have empty fields');
        		return false;
    		}
	else if (rpasswordValue == null || rpasswordValue == "") {
		        showMessage('You have empty fields');
		        return false;
		    }
	else if (nameValue == null || nameValue == "") {
		        showMessage('You have empty fields');
		        return false;
		    }
	else if (surnameValue == null || surnameValuee == "") {
		        showMessage('You have empty fields');
		        return false;
		    }
	else if (emailValue == null || emailValue == "") {
		        showMessage('You have empty fields');
		        return false;
		    }
		}
		*/
});