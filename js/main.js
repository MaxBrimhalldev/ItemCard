document.querySelector('#button').addEventListener('click',copy)

function copy(){
	let item = document.querySelector('#item').value
	let name = document.querySelector('#name').value
	let metal = document.querySelector('#metal').value
	let rare = document.querySelector('#rare').value
	let val = document.querySelector('#val').value
	document.querySelector('#description').innerText = item
	document.querySelector('#title').innerText = name
	document.querySelector('#type').innerText = metal
	document.querySelector('#rarity').innerText = rare
	document.querySelector('#value').innerText = val
}