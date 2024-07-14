const List = require("./List.js");

class Customer {
    constructor(name, movie) {
        this.name = name;
        this.movie = movie;
    }
}

function displayList(list) {
    for (list.front(); list.currentPosition() < list.length(); list.next()) {
        if (list.getElement() instanceof Customer) {
            console.log(
                `${list.getElement().name}, ${list.getElement().movie}`,
            );
        } else {

            console.log(list.getElement());
        }
        
    }
}



function checkOut(name, movie, filmsList, customerList) {
    if (filmsList.contains(movie)) {
        const customer = new Customer(name, movie);
        customerList.append(customer);
        filmsList.remove(movie);
    } else {
        console.log(`${movie} is not available`);
    }
}

const moviesArray = [
    "The Shawshank Redemption",
    "The Godfather",
    "The Godfather: Part II",
    "Pulp Fiction",
    "The Good, the Bad and the Ugly",
    "12 Angry Men",
    "Schindler’s List",
    "The Dark Knight",
    "The Lord of the Rings: The Return of the King",
    "Fight Club",
    "Star Wars: Episode V - The Empire Strikes Back",
    "One Flew Over the Cuckoo’s Nest",
    "The Lord of the Rings: The Fellowship of the Ring",
    "Inception",
    "Goodfellas",
    "Star Wars",
    "Seven Samurai",
    "The Matrix",
    "Forrest Gump",
    "City of God",
];

const moviesList = new List();
const customers = new List();

moviesArray.forEach((movie) => moviesList.append(movie));

console.log("Available movies: \n");
displayList(moviesList);

checkOut("John Doe", "The Godfather", moviesList, customers);

console.log("\nCustomer Rentals: \n");
displayList(customers);

console.log("\nAvailable movies now: \n");
displayList(moviesList);
