document.addEventListener("DOMContentLoaded", () => {

let mostLikedDog = null;

// Scroll to form when click on hero button
const submitDogButton = document.querySelector('.hero-btn');
const formSection = document.querySelector('#form');

function scrollToForm() {
    formSection.scrollIntoView({ behavior: 'smooth' });
}

submitDogButton.addEventListener('click', scrollToForm);

// Update to burger menu on mobile

const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.navigation');
    
menuToggle.addEventListener('click', () => {
    navigation.classList.toggle('open'); 
    menuToggle.classList.toggle('open'); 
 });

// Render dog cards
function renderOneDog(dog) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <div class="card-inner">
            <div class="card-front">
                <img src="${dog.image}" class="dog-image" />
            </div>
            <div class="card-back">
                <h3>${dog.name} the ${dog.breed}</h3>
                <p>${dog.description}</p>
                <p class="like">${dog.likes} likes</p>
            </div>
        </div>
        <button class="like-btn" data-id="${dog.id}">Like</button>
    `;
    card.querySelector('.like-btn').addEventListener('click', handleLike);
    document.querySelector("#cards").appendChild(card);
}

//Fetch data
function getAllDogs(){
    fetch('https://dogs-njbi.onrender.com/dogs')
    .then (response => response.json())
    .then (dogData => 
        {dogData.forEach(dog => renderOneDog(dog));
    // Find and set the most liked dog
    mostLikedDog = dogData.reduce((prev, current) => (prev.likes > current.likes) ? prev : current);
    renderMostLikedDog();
})
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
    let likesCount = parseInt(likesElement.textContent.match(/\d+/)[0]);

    // Increment likes count
    likesCount++;

// Send PATCH request to update likes count
fetch(`https://dogs-njbi.onrender.com/dogs/${dogId}`, {
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

// Change contestants to woof woof on mouseover
const barkSpan = document.querySelector('.bark');

barkSpan.addEventListener('mouseenter', function() {
    console.log('Entered')
    barkSpan.textContent = 'WOOF WOOF';
});

barkSpan.addEventListener('mouseleave', function() {
    barkSpan.textContent = 'CONTESTANTS';
});

// Render dog image of dog with most likes in the leader section
function renderMostLikedDog() {
    const mostLikedDogContainer = document.querySelector("#most-liked-dog");
    mostLikedDogContainer.innerHTML = "";
    if (mostLikedDog) {
        const name = document.createElement('p');
        name.textContent = `${mostLikedDog.name} the ${mostLikedDog.breed}`;
        name.className = 'most-liked-dog-name';
        mostLikedDogContainer.appendChild(name);
        
        const img = document.createElement('img');
        img.src = mostLikedDog.image;
        img.alt = `${mostLikedDog.name} the ${mostLikedDog.breed}`;
        img.className = 'most-liked-dog-image';
        mostLikedDogContainer.appendChild(img);
    }
}

// Leader section confetti animation
const container = document.querySelector('.confetti-container');

const numConfetti = 30;

for (let i = 0; i < numConfetti; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    container.appendChild(confetti);
}

// Handle form submit 
document.querySelector('#form').addEventListener('submit', handleSubmit);

function handleSubmit(e){
    e.preventDefault();
    let dogObj = {
        name:e.target.name.value,
        breed:e.target.breed.value,
        description:e.target.description.value,
        image:e.target.image.value,
        likes: 0
    };
    renderOneDog(dogObj);
    addNewDog(dogObj);
}

function addNewDog(dogObj){
    fetch('https://dogs-njbi.onrender.com/dogs', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(dogObj)
    })
    .then(response => response.json())
    .then(dog => console.log(dog))
     .catch(error => console.error("Error adding dog", error));
}

// Limit form textarea characters 
const textarea = document.querySelector('textarea');

textarea.addEventListener('input', function() {
    if (this.value.length > 100) {
        this.value = this.value.substring(0, 100); // Limit the text to 100 characters
    }
});

// Display thank you message after form submit
const form = document.querySelector('.dog-form');
const thankYouMessage = document.querySelector('.thank-you');

form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting
    form.style.display = 'none'; // Hide the form
    thankYouMessage.style.display = 'block'; // Show the thank you message
})

})
