// Desarrollo de un ordenador utilizando el método JS sort() para ordenar los elementos del 
Ordenador = {
	saveNum: [],
// Validar con función por expresión si el numero esta ocupando memoria iterativamente
	numValided: function(numeroEvaluado) {
		for ( var i = 0 ; i < Ordenador.saveNum.length; i++) {
			
			if (Ordenador.saveNum[i] == numeroEvaluado) {
			return true;
			
			}
		}
	},

// función para comparar los números entrantes
	arraySort: function(myarray){
    for (i=0 ; i < (myarray.length-1) ; 
    	i++)
			for (j=0 ; j < (myarray.length - i) ;
			 j++){
				if (myarray[j] > myarray[j + 1]){
					k = myarray[j];
					myarray[j] = myarray[j + 1];
					myarray[j + 1] = k;
				}
			}
			// Sentencia evita comportamiento por default de JS al comparar como cadenas
			myarray.sort(function(i,j) { return i - j; }); 
    		return myarray;
	},

//  El método sort() a usar en el flujo ordena los elementos de un array localmente y retorna el array.
// Declaración de función anónima para validar números en en campo de texto

	numValSort: function(){
		var sortNum = $('#sortNum'),
				listNum = $("#listNum");
		sortNum.show();
		sortNum.unbind('click').bind('click', function(e){
			// Limpiamos la lista
			listNum.html('');
			// Ordenamos el Array en memoria
			var sorted = Ordenador.arraySort(Ordenador.saveNum);
			console.log(sorted);
			// Mostramos los datos ordenados
			for (var a = 0; a < sorted.length; a++) {
				listNum.append('<li>'+ sorted[a] +'</li>');
			}
		});
	},
	// Document.Ready
	loadingPage: function(){
			var inputNum = $('input[name=txtNum]'),
				listNum  = $("#listNum"),
				idLogin  = $('#login'),
				sortNum  = $('#sortNum');
		sortNum.hide();
		$('.login-form').unbind('submit').bind('submit', function(e){
			var getNumText = inputNum.val();
// numValided para validad si el numero tomado del documento repite o no
			if (Ordenador.numValided(getNumText)) {
				idLogin.addClass('error');
				setTimeout(function () {
					idLogin.removeClass('error');
				}, 2000);
			} else {
				Ordenador.saveNum.push(getNumText);
				listNum.append('<li>'+ getNumText +'</li>');
				inputNum.val('');
// Llamada a función Ordenador
				if(Ordenador.saveNum.length > 1){
					Ordenador.numValSort();
				}
			}
			e.preventDefault();
		});
	}
}

// Renderizado
$(function(){
	Ordenador.loadingPage();
});
