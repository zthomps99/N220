document.addEventListener("DOMContentLoaded", function () {
    //pet characteristics
    const pet = {
        name: "Fido",
        energy: 50,
        happiness: 50,
        age: 1
    };
    //pet stats updated according to if it is fed or played with
    function updatePetStats() {
        document.getElementById("pet-name").textContent = pet.name;
        document.getElementById("pet-happiness").textContent = pet.happiness;
        document.getElementById("pet-energy").textContent = pet.energy;
    }
    //feeds the pet and adds +5 energy
    function feedPet() {
        pet.energy += 5;
        updatePetStats();
    }
    //play with the pet and adds +5 happiness
    function playWithPet() {
        pet.happiness += 5;
        updatePetStats();
    }

    document.getElementById("feed-btn").addEventListener("click", feedPet);
    document.getElementById("play-btn").addEventListener("click", playWithPet);

    updatePetStats();
});
