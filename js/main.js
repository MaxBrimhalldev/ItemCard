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

// API Collection
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://www.dnd5eapi.co/api/equipment/`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });