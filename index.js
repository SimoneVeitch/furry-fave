document.addEventListener("DOMContentLoaded", () => {

let mostLikedDog = null;

// DOG CARD
function renderOneDog(dog){
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
    <img src="${dog.image}" class="dog-image" />
    <h3>${dog.name} the ${dog.breed}</h3>
    <p>${dog.description}</p>
    <p class="like">${dog.likes === 1 ? '1 like' : `${dog.likes} likes`}</p>
    <button class="like-btn" data-id="${dog.id}">Like 🤍</button>
    `;
    card.querySelector('.like-btn').addEventListener('click', handleLike);
    document.querySelector("#cards").appendChild(card);
}


//Fetching dog data
function getAllDogs(){
    fetch('http://localhost:3000/dogs')
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

    // Handle submit function
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
        fetch('http://localhost:3000/dogs', {
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
    


})