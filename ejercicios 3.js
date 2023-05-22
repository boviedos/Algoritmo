// Ejercicio 3: Intercambiar el valor de 2 variables
function auxx() {
	var a = new Number();
	var b = new Number();
	var aux = new Number();
	document.write("Digite el valor de a: ",'<BR/>');
	a = Number(prompt());
	document.write("Digite el valor de b: ",'<BR/>');
	b = Number(prompt());
	aux = a;
	a = b;
	b = aux;
	document.write("El nuevo valor de a es:",a,'<BR/>');
	document.write("El nuevo valor de b es:",b,'<BR/>');
}

function principal() {
	auxx();
}

