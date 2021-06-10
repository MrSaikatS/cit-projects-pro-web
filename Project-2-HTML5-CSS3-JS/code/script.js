const g1 = document.getElementById('gname');
const g2 = document.getElementById('gemail');
const g3 = document.getElementById('gcname');

const p1 = document.getElementById('pname');
const p2 = document.getElementById('pemail');
const p3 = document.getElementById('pcname');

function genid() {
	p1.innerHTML = g1.value;
	p2.innerHTML = g2.value;
	p3.innerHTML = g3.value;
	console.log('Genareted!!');
}
