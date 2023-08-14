
document.addEventListener('DOMContentLoaded', function(){

	let m_a_cm = document.getElementById('btn1');
	let cm_a_m = document.getElementById('btn2');
	let m_a_km = document.getElementById('btn3');




	function camposVacios(valor1, valor2){

		if (valor1.trim() == '' || valor2.trim() == '') {
			return true;

		}else {
			return false;
		}
	}


	m_a_cm.addEventListener('click', function(){
		let valor_m = document.getElementById('m').value;
		let valor_cm = document.getElementById('cm').value;
		let resultado = document.getElementById('resultado_1');

		if (camposVacios(valor_m,valor_cm)) {
			alert('Hay campos vacios');
			return;
		}

	})

	cm_a_m.addEventListener('click', function(){
		let valor_m = document.getElementById('m2').value;
		let valor_cm = document.getElementById('cm2').value;
		let resultado = document.getElementById('resultado_2');

		if (camposVacios(valor_m,valor_cm)) {
			alert('Hay campos vacios');
			return;
		}

	})

	m_a_km.addEventListener('click', function(){
		let valor_m = document.getElementById('m3').value;
		let valor_km = document.getElementById('km').value;
		let resultado = document.getElementById('resultado_3');

		if (camposVacios(valor_m,valor_km)) {
			alert('Hay campos vacios');
			return;
		}

	})


})