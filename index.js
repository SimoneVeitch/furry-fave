document.addEventListener("DOMContentLoaded", () => {
// DOG CARD
function renderOneDog(dog){
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
    <img src="${dog.image}" class="dog-image" />
    <h3>${dog.name} the ${dog.breed}</h3>
    <p>${dog.description}</p>
    <p class="like">${dog.likes} likes</p>
    <button class="like-btn" data-id="${dog.id}">Like 🐾</button>
    `;
    card.querySelector('.like-btn').addEventListener('click', handleLike);
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

// Function to handle like button
function handleLike(event) {
    const dogId = event.target.dataset.id;
    const card = event.target.parentElement;
    const likesElement = card.querySelector('.like');
    let likesCount = parseInt(likesElement.textContent);

    // Increment likes count
    likesCount++;

    // Send PATCH request to update likes count
    fetch(`http://localhost:3000/dogs/${dogId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type':'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            likes: likesCount
        })
        })
        .then(response => response.json())
        .then(updatedDog => {
            // Updates likes count in the DOM
            likesElement.textContent = `${updatedDog.likes} likes`;
        })
        .catch(error => console.error("Error updating dog likes", error));
    }

    // Changing woof to hello on mouse over
    const barkSpan = document.querySelector('.bark');

    barkSpan.addEventListener('mouseenter', function() {
        console.log('Entered')
        barkSpan.textContent = 'HELLO!';
    });

    barkSpan.addEventListener('mouseleave', function() {
        barkSpan.textContent = 'WOOF!';
    });

})