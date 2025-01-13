//List on additional freelancers
const addNames = [
    { name: "Aurra Sing", species: "Paaliduvan", price: "20000" },
    { name: "Cad Bane", species: "Duros", price: "70000" },
    { name: "Jango", species: "Human", price: "100000" },
    { name: "Boushh", species: "Ubese", price: "25000" },
    { name: "Fennec Shand", species: "Human, Cyborg", price: "65000" },
    { name: "Greedo", species: "Rodian", price: "30000" },
    { name: "Black Krrsantan", species: "Wookie", price: "100000" },
    { name: "Din Djarin", species: "Human", price: "250000" },
]
//list of initial freelancers
const names = [
    { name: "Boba Fett", species: "Human", price: "500000" },
    { name: "Bossk", species: "Trandoshan", price: "100000" },
    { name: "IG-88", species: "Droid", price: "150000" },
    { name: "Dengar", species: "Human", price: "85000" },
    { name: "4-LOM", species: "Droid", price: "75000" },
    { name: "Zuckuss", species: "Gand", price: "75000" },
]

document.querySelector("addCharacterButton").addEventListener("click", () => {
    const nameInput = document.querySelector("nameInput").value;
    const speciesInput = document.querySelector("speciesInput").value;
    const costInput = document.querySelector("costInput")
    if (nameInput && speciesInput && costInput) {
        names.push({ name: nameInput, species: speciesInput, cost: costInput });
        document.querySelector("nameInput").value = "";
        document.querySelector("speciesInput").value = "";
        document.querySelector("costInput").value = "";
        render();
    }
})

function render() {
    const freeLancelist = document.querySelector("fl-list")
    const tableElements = names.map((name) => {
        const tableName
    }
    )
}
