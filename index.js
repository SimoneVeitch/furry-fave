document.addEventListener("DOMContentLoaded", () => {
// DOG CARD
function renderOneDog(dog){
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
    <img src="${dog.image}" class="dog-image" />
    <h3>${dog.name} the ${dog.breed}</h3>
    <p>${dog.description}</p>
    <p>${dog.likes} likes</p>
    <button class="like-btn" data-id="${dog.id}">Like ❤️</button>
    `;
    document.querySelector("#cards").appendChild(card);
}

//Fetching dog data
function getAllDogs(){
    fetch('http://localhost:3000/dogs')
    .then (response => response.json())
    .then (dogData => dogData.forEach(dog => renderOneDog(dog)))
    .catch (error => console.error("Error fetching dogs", error));
}

function initialise(){
    getAllDogs();
}
initialise();

})