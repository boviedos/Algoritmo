// Un maestro desea saber que porcentaje de hombres y que 
// porcentaje de mujeres hay un grupo de estudiantes.
function calcularestudiantes() {
	var num_hombres = new Number();
	var num_mujeres = new Number();
	var total_estudiantes = new Number();
	var porcentajeh = new Number();
	var porcentajem = new Number();
	document.write("Digite el numero de hombres: ",'<BR/>');
	num_hombres = Number(prompt());
	document.write("Digite el numero de mujeres: ",'<BR/>');
	num_mujeres = Number(prompt());
	total_estudiantes = num_hombres+num_mujeres;
	porcentajeh = num_hombres/total_estudiantes*100;
	porcentajem = num_mujeres/total_estudiantes*100;
	document.write("El porcentaje de Hombres es: ",porcentajeh,"%",'<BR/>');
	document.write("El porcentaje de Mujeres es: ",porcentajem,"%",'<BR/>');
}

function ejercicio3() {
	calcularestudiantes();
}

