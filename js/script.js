const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  private: true,
  start: function () {
    personalMovieDB.count = +prompt(
      "How many films have you already watched?",
      ""
    );
    while (
      personalMovieDB.count == "" ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = +prompt(
        "How many films have you already watched?",
        ""
      );
    }
  },
  rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      const a = prompt("One of the last movies you watched?", "").trim(),
        b = prompt("How much would you rate it?", "");

      if (a != "" && b != "" && a !== null && b !== "" && a.length < 50) {
        personalMovieDB.movies[a] = b;
      } else {
        i--;
      }
    }
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      console.log("Watched quite a few films.");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log("You are a great viewer.");
    } else if (personalMovieDB.count >= 30) {
      console.log("You are a movie buff.");
    } else {
      console.log("Error.");
    }
  },
  showMyDB: function () {
    if (!personalMovieDB.private) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: function () {
    if (personalMovieDB.private) {
      personalMovieDB.private = !personalMovieDB.private;
    } else {
      personalMovieDB.private = !personalMovieDB.private;
    }
  },
  writeYourGenres: function () {
    for (let i = 1; i <= 3; i++) {
      personalMovieDB.genres[i - 1] = prompt(`Your favorite genre is ${i}`);
      while (
        personalMovieDB.genres[i - 1] == "" ||
        personalMovieDB.genres[i - 1] == null
      ) {
        personalMovieDB.genres[i - 1] = prompt(`Your favorite genre is ${i}`);
      }
    }
    this.genres.forEach((item, i) => {
      console.log(`Favorite Genre ${i + 1} - this is ${item}`);
    });
  },
};

// personalMovieDB.start();

// personalMovieDB.rememberMyFilms();

// personalMovieDB.detectPersonalLevel();

// personalMovieDB.toggleVisibleMyDB();

// personalMovieDB.showMyDB();

// personalMovieDB.writeYourGenres();
