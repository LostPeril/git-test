"use strict";

let numberOfFilms;

function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFillms() {
  if (personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert("Вы классический зритель");
  } else if (personalMovieDB.count >= 30) {
    alert("Вы киноман");
  } else {
    alert("Произошла ошибка");
    i--;
  }
}

rememberMyFillms();

function detectPersonalLevel() {
  for (let i = 0; i < 2; i++) {
    const lastIsFilm = prompt("Один из последних просмотренных фильмов?", "");
    const movieRating = prompt("На сколько оцените его?", "");

    if (
      lastIsFilm.trim() != "" &&
      movieRating.trim() != "" &&
      lastIsFilm != null &&
      movieRating != null &&
      lastIsFilm.length < 50
    ) {
      personalMovieDB.movies[lastIsFilm] = movieRating;
      console.log("done");
    } else {
      console.log("error");
      i--;
    }
  }
}

detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
  }
}

writeYourGenres();
