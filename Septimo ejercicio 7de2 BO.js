// Ejercicio 7: Elaborar un programa que me muestre los d�as de las semanas
// cuando ingrese los siete primeros n�meros.
function dias() {
	var num = new Number();
	document.write("Digite un numero del dia de la semana (1-7)",'<BR/>');
	num = Number(prompt());
	switch (num) {
	case 1:
		document.write("Lunes",'<BR/>');
		break;
	case 2:
		document.write("Martes",'<BR/>');
		break;
	case 3:
		document.write("Miercoles",'<BR/>');
		break;
	case 4:
		document.write("Jueves",'<BR/>');
		break;
	case 5:
		document.write("Viernes",'<BR/>');
		break;
	case 6:
		document.write("Sabado",'<BR/>');
		break;
	case 7:
		document.write("Domingo",'<BR/>');
		break;
	default:
		document.write("Error, no existe dia para ese numero",'<BR/>');
	}
}

function ejercicio7de2() {
	dias();
}

