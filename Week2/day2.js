var pokemon = [
    { "id": 1, "name": "Bulbasaur", "types": ["poison", "grass"] },
    { "id": 5, "name": "Charmeleon", "types": ["fire"] },
    { "id": 9, "name": "Blastoise", "types": ["water"] },
    { "id": 12, "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16, "name": "Pidgey", "types": ["normal", "flying"] },
    { "id": 23, "name": "Ekans", "types": ["poison"] },
    { "id": 24, "name": "Arbok", "types": ["poison"] },
    { "id": 25, "name": "Pikachu", "types": ["electric"] },
    { "id": 37, "name": "Vulpix", "types": ["fire"] },
    { "id": 52, "name": "Meowth", "types": ["normal"] },
    { "id": 63, "name": "Abra", "types": ["psychic"] },
    { "id": 67, "name": "Machamp", "types": ["fighting"] },
    { "id": 72, "name": "Tentacool", "types": ["water", "poison"] },
    { "id": 74, "name": "Geodude", "types": ["rock", "ground"] },
    { "id": 87, "name": "Dewgong", "types": ["water", "ice"] },
    { "id": 98, "name": "Krabby", "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime", "types": ["psychic"] },
    { "id": 133, "name": "Eevee", "types": ["normal"] },
    { "id": 144, "name": "Articuno", "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos", "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres", "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair", "types": ["dragon"] }
];

// If we wanted to console.log the names of the pokemon who have an id greater than 99 we could...
console.log("\n Pokemon with an id greater than 99")
for (var i = 0; i < pokemon.length; i++) {
    if (pokemon[i].id > 99) {
        console.log(pokemon[i].name);
    }
}

// console.log the pokemon objects whose id is evenly divisible by 3
console.log("\n pokemon objects with an id divisible by 3:")

for (i=0;i<pokemon.length;i++) { //using this same loop for all to iterate through the entire array
    if (pokemon[i].id % 3 === 0) { //this condition is true if the id is divisible by 3
        console.log(pokemon[i]); // this logs the object at i when above is true
    } //we don't do anything if our condition is false
}

// console.log the pokemon objects that have more than one type
console.log("\n pokemon objects with more than one type")

for (i=0;i<pokemon.length;i++) {
    if (pokemon[i].types.length > 1) { //if this is true, it has more than 1 type
        console.log(pokemon[i]);
    } //we don't do anything if our condition is false
}

// console.log the **names** of the pokemon whose only type is "poison"
console.log("\n pokemon names with only one type, poison:")

for (i=0;i<pokemon.length;i++) {
    if (pokemon[i].types.length === 1 && pokemon[i].types[0] === "poison") { //if both of these are true, it only has poison type
        console.log(pokemon[i].name);
    } //we don't do anything if our condition is false
}

// console.log the **first type** of all the pokemon whose second type is "flying"
console.log("\n First type of all pokemon whose second type is flying")

for (i=0;i<pokemon.length;i++) {
    if (pokemon[i].types[1] === "flying") { //if this is true, it has 2 types and the second type is flying
        console.log(pokemon[i].types[0])
    } //we don't do anything if our condition is false
}

//Bonus Challenge: console.log the reverse of the names of the pokemon whose only type is "poison"

for (i=0;i<pokemon.length;i++) {
    if (pokemon[i].types.length === 1 && pokemon[i].types[0] === "poison") { //if both of these are true, it only has poison type
        console.log(pokemon[i].name.split("").reverse().join("")); /* this splits the string 'name' and makes each individual character a value within an array
        the reverse method reverses the order of that array
        join changes the array back into a string*/ 
    } //we don't do anything if our condition is false
}