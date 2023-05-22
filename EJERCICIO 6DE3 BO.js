// Ejercicio6: Suponga que se tiene un conjunto de calificaciones de un grupo
// de 10 alumnos. Realizar un Algoritmo para calcular la calificaci�n promedio y
// la calificaci�n m�s baja de todo el grupo
function calificaciones() {
	var calificacion_promedio = new Number();
	var calificacion_baja = new Number();
	var calificacion = new Number();
	var suma = new Number();
	var i = new Number();
	suma = 0;
	calificacion_baja = 99999;
	for (i=1;i<=10;i++) {
		document.write(i,". Digite una calificacion: ",'<BR/>');
		calificacion = Number(prompt());
		// suma iterativa de las calificaciones
		suma = suma+calificacion;
		if (calificacion<calificacion_baja) {
			calificacion_baja = calificacion;
		}
	}
	calificacion_promedio = suma/10;
	document.write("La calificacion promedio es :",calificacion_promedio,'<BR/>');
	document.write("La calificacion mas baja es: ",calificacion_baja,'<BR/>');
}

function ejercicio6de3() {
	calificaciones();
}

