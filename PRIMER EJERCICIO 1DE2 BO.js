// Ingrese un n�mero entero y reportar si es par o impar.
function numm() {
	var num = new Number();
	document.write("Digite un numero ;",'<BR/>');
	num = Number(prompt());
	if (num%2==0) {
		document.write("El numero ",num," es par",'<BR/>');
	} else {
		document.write("El numero ",num," es impar",'<BR/>');
	}
}

function ejercicio1de2() {
	numm();
}

