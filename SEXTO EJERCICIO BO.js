// Un alumno desea saber cual sera su calificacion final en la materia de 
// Algoritmos. Dicha calificacion se compone de los siguientes porcentajes:
// 55 MOD   del promedio de sus tres calificaciones parciales.
// 30 MOD   de la calificacion del examen final.
// 15 MOD  de la calificacion de un trabajo final.
function parciales() {
	var parcial1 = new Number();
	var parcial2 = new Number();
	var parcial3 = new Number();
	var promediop = new Number();
	var notasparcial = new Number();
	var examen_final = new Number();
	var notaexamen = new Number();
	var notatrabajo = new Number();
	var notafinaltrabajo = new Number();
	var notafinal = new Number();
	document.write("Digite las 3 notas de los parciales",'<BR/>');
	parcial1 = Number(prompt());
	parcial2 = Number(prompt());
	parcial3 = Number(prompt());
	promediop = (parcial1+parcial2+parcial3)/3;
	notasparcial = promediop*0.55;
	document.write("Digite la nota del examen final:",'<BR/>');
	examen_final = Number(prompt());
	notaexamen = examen_final*0.3;
	document.write("Digite la nota del trabajo final:",'<BR/>');
	notatrabajo = Number(prompt());
	notafinaltrabajo = notatrabajo*0.15;
	notafinal = notasparcial+notaexamen+notafinaltrabajo;
	document.write("La calificacion final es :",notafinal,'<BR/>');
}

function ejercicio6() {
	parciales();
}

