// Ejercicio 2: Hacer un programa para ingresar el radio de un circulo
// y se reporte su �rea y la longitud de la circunferencia
// area = pi * radio^2
// longitud = 2 * pi * radio
function areas() {
	var pi;
	var radio = new Number();
	var area = new Number();
	var lon = new Number();
	document.write("Digite el valor de radio:",'<BR/>');
	radio = Number(prompt());
	area = Math.PI*Math.pow(radio,2);
	lon = 2*Math.PI*radio;
	document.write("El area de la circunferencia es: ",area,'<BR/>');
	document.write("La longitud es:",lon,'<BR/>');
}

function ejercicio2() {
	areas();
}

