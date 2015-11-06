/*var irudiak = new Array();
irudiak[0] = "\images\irudiak\heade_ft.jpg";
irudiak[1] = "\images\irudiak\limoia.jpg";
irudiak[2] = "\images\irudiak\mandarinak.jpg";
irudiak[3] = "\images\irudiak\marrubiak.jpg";
irudiak[4] = "\images\irudiak\meloia.jpg";
irudiak[5] = "\images\irudiak\sagarrak.jpg";
irudiak[6] = "\images\irudiak\sesamo.jpg";
	
var i = 0;*/

var irudiak = new Array();
var i, irudia;

var intervalID;

function kudeatzaileakHasieratu()
{
	//var irudia = document.getElementById("irudia");
	irudia = document.getElementById("irudia");
	
	//var irudiak = new Array();
	irudiak[0] = "url(images/irudiak/heade_ft.jpg)";
	irudiak[1] = "url(images/irudiak/limoia.jpg)";
	irudiak[2] = "url(images/irudiak/mandarinak.jpg)";
	irudiak[3] = "url(images/irudiak/marrubiak.jpg)";
	irudiak[4] = "url(images/irudiak/meloia.jpg)";
	irudiak[5] = "url(images/irudiak/sagarrak.jpg)";
	irudiak[6] = "url(images/irudiak/sesamo.jpg)";
		
	i = 0;
	
	function irudia_aldatu(){
	i++;
	if(i>6)
		i=0;
	irudia.style.backgroundImage = irudiak[i];
	console.log(i+": "+irudiak[i]);
	console.log(irudia.style.backgroundImage);
	};

	intervalID = window.setInterval(irudia_aldatu,5000);	
	
	irudia.onclick = function()
	{
		//alert("Irudian sakatu duzu");
		window.clearInterval(intervalID);
	}

	var erabiltzaile = document.getElementById("erabiltzaile");
	erabiltzaile.value = 'zure@emaila';

	erabiltzaile.onblur = function(){
		if (erabiltzaile.value == ''){
			erabiltzaile.value = "zure@emaila";
		}
	}

	erabiltzaile.onfocus = function(){
		if (erabiltzaile.value == 'zure@emaila'){
			erabiltzaile.value = '';
		}
	}

	var item = document.getElementById("combobox");
	item.addEventListener("change", zerrendaKud);

	function zerrendaKud(){
		console.log(item.value);
		console.log(item.options[item.selectedIndex].text);
		console.log(item.selectedIndex);
	} 

	var inprimaki = document.getElementById('inprimaki');
	inprimaki.onsubmit = function(){
		console.log("Submit botoia sakatu da");
		return false;
	}
	
	/*var a = document.getElementById('main');
	console.log(a.children.length);
	
	var guraso = document.getElementById("main");
	guraso.addEventListener("click", function(){console.log('lehenengo kudeatzailea')});
	guraso.addEventListener("click", function(){console.log('bigarren kudeatzailea')});*/
	
}

window.onload = kudeatzaileakHasieratu;

/*function idatzi(){
	console.log('idatzi da');
}

window.setInterval(idatzi,1000);*/






