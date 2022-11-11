"use strict";

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    personalMovieDB.count = +prompt(
      "Сколько фильмов вы уже посмотрели?",
      ""
    ).trim();

    while (
      personalMovieDB.count == "" ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
  },
  rememberMyFillms: function () {
    if (personalMovieDB.count < 10) {
      alert("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      alert("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
      alert("Вы киноман");
    } else {
      alert("Произошла ошибка");
    }
  },
  detectPersonalLevel: function () {
    for (let i = 0; i < 2; i++) {
      const lastIsFilm = prompt(
        "Один из последних просмотренных фильмов?",
        ""
      ).trim();
      const movieRating = prompt("На сколько оцените его?", "").trim();

      if (
        lastIsFilm != null &&
        movieRating != null &&
        lastIsFilm != "" &&
        movieRating != "" &&
        lastIsFilm.length < 50
      ) {
        personalMovieDB.movies[lastIsFilm] = movieRating;
        console.log("done");
      } else {
        console.log("error");
        i--;
      }
    }
  },
  writeYourGenres: function () {
    for (let i = 1; i <= 3; i++) {
      let genres = prompt(`Ваш любимый жанр под номером ${i}`);

      if (genres == "" || genres == null) {
        console.log("Вы ввели некорректные данные или не ввели их вовсе");
        i--;
      } else {
        personalMovieDB.genres[i - 1] = genres;
      }
    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Любимый жанр ${i + 1} - это ${item}`);
    });
  },
  toggleVisibleMyDB: function () {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },
  showMyDB: function (hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
};
