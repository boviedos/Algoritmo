// Ejercicio6: Calcular la siguiente sumatoria de los "N" elementos:
// S= 1 + 4 + 9 + ...
function sumaelementos() {
	var n_elementos = new Number();
	var i = new Number();
	var suma = new Number();
	document.write("Digite la cantidad de elementos a sumarse: ",'<BR/>');
	n_elementos = Number(prompt());
	i = 1;
	suma = 0;
	while (i<=n_elementos) {
		suma = suma+Math.pow(i,2);
		i = i+1;
	}
	document.write("La suma es: ",suma,'<BR/>');
}

function ejercicio8de3() {
	sumaelementos();
}

