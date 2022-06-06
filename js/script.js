let numberOfFilms;

function start() {
  numberOfFilms = +prompt("How many films have you already watched?", "");
  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("How many films have you already watched?", "");
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt("One of the last movies you watched?", "").trim(),
      b = prompt("How much would you rate it?", "");

    if (a != "" && b != "" && a !== null && b !== "" && a.length < 50) {
      personalMovieDB.movies[a] = b;
    } else {
      i--;
    }
  }
}

rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Watched quite a few films.");
  } else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
    console.log("You are a great viewer.");
  } else if (personalMovieDB.count >= 30) {
    console.log("You are a movie buff.");
  } else {
    console.log("Error.");
  }
}

detectPersonalLevel();

function showMyDB() {
  if (!personalMovieDB.private) {
    console.log(personalMovieDB);
  }
}

showMyDB();

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Your favorite genre is ${i}`);
  }
}

writeYourGenres();
