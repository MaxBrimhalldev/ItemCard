document.querySelector('#button').addEventListener('click',copy)

function copy(){
	let item = document.querySelector('#item').value
	document.querySelector('#description').innerText = item
}