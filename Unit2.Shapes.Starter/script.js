// List of additional freelancers
const addNames = [
    { name: "Aurra Sing", species: "Paaliduvan", price: "20000" },
    { name: "Cad Bane", species: "Duros", price: "70000" },
    { name: "Jango", species: "Human", price: "100000" },
    { name: "Boushh", species: "Ubese", price: "25000" },
    { name: "Fennec Shand", species: "Human, Cyborg", price: "65000" },
    { name: "Greedo", species: "Rodian", price: "30000" },
    { name: "Black Krrsantan", species: "Wookie", price: "100000" },
    { name: "Din Djarin", species: "Human", price: "250000" },
];

// === State ===
const characters = [
    { name: "Boba Fett", species: "Human", price: "500000" },
    { name: "Bossk", species: "Trandoshan", price: "100000" },
    { name: "IG-88", species: "Droid", price: "150000" },
    { name: "Dengar", species: "Human", price: "85000" },
    { name: "4-LOM", species: "Droid", price: "75000" },
    { name: "Zuckuss", species: "Gand", price: "75000" },
];
// Calculate and update the average price
function updateAveragePrice() {
    const total = characters.reduce((sum, character) => sum + parseInt(character.price), 0);
    const average = total / characters.length;
    document.querySelector('#averagePrice').textContent = `Average Price: GC${average.toFixed(2)}`;
}

// Create and append the average price element
const averagePriceElement = document.createElement('div');
averagePriceElement.id = 'averagePrice';
document.body.appendChild(averagePriceElement);
updateAveragePrice();




document.querySelector('#addCharacterButton').addEventListener('click', () => {
    const nameInput = document.querySelector('#nameInput').value;
    const speciesInput = document.querySelector('#speciesInput').value;
    const costInput = document.querySelector('#costInput').value;
    if (nameInput && speciesInput && costInput) {
        characters.push({ name: nameInput, species: speciesInput, price: costInput });
        document.querySelector('#nameInput').value = '';
        document.querySelector('#speciesInput').value = '';
        document.querySelector('#costInput').value = '';
        render();
        // Re-render the list after adding a new character
    }
});

function render() {
    const characterList = document.querySelector('#characterList');
    characterList.innerHTML = '';
    characters.forEach(character => {
        const li = document.createElement('li');
        li.textContent = `${character.name} (${character.species}) - ${"GC" + character.price}`;
        characterList.appendChild(li);
    });
}


render();


function averagePrice(characters) {
    const total = characters.reduce((sum, character) => sum + parseInt(character.price), 0);
    console.log(total);
    return Math.round(total / characters.length);
}

// Add additional freelancers to the list
function addCharacter() {
    if (addNames.length === 0) return;
    const randomIndex = Math.floor(Math.random() * addNames.length);
    const character = addNames.splice(randomIndex, 1)[0];
    characters.push(character);
}


const addCharacterInterval = setInterval(() => {
    addCharacter();
    render();
    if (characters.length >= 14) {
        clearInterval(addCharacterInterval);
    }
}, 2000);

// Initial render
render();
