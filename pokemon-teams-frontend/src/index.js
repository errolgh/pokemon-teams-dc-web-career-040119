const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

document.addEventListener('DOMContentLoaded', fetchTrainers)

function fetchTrainers(){
  fetch("http://localhost:3000/trainers")
  .then(res => res.json())
  .then(trainers => trainers.map(renderTrainer))
}

function renderTrainer(trainer){
  let main = document.querySelector("main")
  let trainerDiv = document.createElement("div")
  trainerDiv.classList = "card"
  main.appendChild(trainerDiv)

  let trainerName = document.createElement("p")
  trainerName.innerText = trainer.name
  trainerDiv.appendChild(trainerName)
  trainerDiv.dataset.id = trainer.id
  //appends an "id" datatype or dataset to the trainerDiv, and sets it equal to the trainer's id #
  // (In other words to adds an id to the trainerDiv and set it equal to the id attribute of the trainer object)

  let addPokemonButton = document.createElement("button")
  addPokemonButton.innerText = "Add Pokemon"
  trainerDiv.appendChild(addPokemonButton)
  addPokemonButton.addEventListener("click", fetchPokemon)
}

function fetchPokemon(trainer){
  let pokemonData = {
    'trainer_id': trainer.id
  }

  let configurationObj = {
    method: "POST",
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(pokemonData)
  }

  fetch(`${BASE_URL}/pokemons`, configurationObj)
  .then(res => res.json())
  .then(pokemonData => console.log(pokemonData))
}


function renderPokemon(){
  console.log(`Attempting to add ${pokemon.name}...`)
}
