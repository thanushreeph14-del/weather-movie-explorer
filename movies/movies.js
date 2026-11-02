
const API_URL = "https://ghibliapi.vercel.app/films";

const movieForm = document.getElementById("movieForm");
const movieInput = document.getElementById("movieInput");
const movieResults = document.getElementById("movieResults");
const movieMessage = document.getElementById("movieMessage");

let allMovies = [];

// Fetch all movies from the API
async function loadMovies() {
    movieMessage.textContent = "Loading movies...";

    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("Unable to fetch movies.");
        }

        allMovies = await response.json();

        displayMovies(allMovies);

    } catch (error) {
        movieMessage.textContent =
            "Unable to load movies. Please try again later.";

        console.error(error);
    }
}

// Display movie cards
function displayMovies(movies) {
    movieResults.replaceChildren();

    if (movies.length === 0) {
        movieMessage.textContent = "No movies found.";
        return;
    }

    movieMessage.textContent = `${movies.length} movie(s) found.`;

    movies.forEach((movie) => {

        // Create movie card
        const card = document.createElement("article");
        card.className = "movie-card";

        // Movie poster
        const poster = document.createElement("img");
        poster.className = "movie-poster";
        poster.src = movie.image;
        poster.alt = `${movie.title} poster`;
        poster.loading = "lazy";

        // Movie information container
        const info = document.createElement("div");
        info.className = "movie-info";

        // Movie title
        const title = document.createElement("h2");
        title.textContent = movie.title;

        // Release year
        const year = document.createElement("p");
        year.textContent = `Release Year: ${movie.release_date}`;

        // Director
        const director = document.createElement("p");
        director.textContent = `Director: ${movie.director}`;

        // Movie rating
        const rating = document.createElement("p");
        rating.className = "movie-rating";
        rating.textContent = `Rating: ${movie.rt_score}/100`;

        // Movie description
        const description = document.createElement("p");
        description.className = "movie-description";
        description.textContent = movie.description;

        // Add all movie information to the card
        info.append(
            title,
            year,
            director,
            rating,
            description
        );

        // Add poster and information to the card
        card.append(poster, info);

        // Display card on the webpage
        movieResults.append(card);
    });
}

// Search movies by title
movieForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const searchText = movieInput.value.trim().toLowerCase();

    if (!searchText) {
        displayMovies(allMovies);
        return;
    }

    const filteredMovies = allMovies.filter((movie) =>
        movie.title.toLowerCase().includes(searchText)
    );

    displayMovies(filteredMovies);
});

// Load movies when the page opens
loadMovies();
