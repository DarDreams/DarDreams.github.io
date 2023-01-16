"use strict";
let numberOfFilms;

function start() {
     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', "1").trim();

     while (numberOfFilms =='' || numberOfFilms == null || isNaN(numberOfFilms) ){
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', "1").trim();
    }
}

start();

let personalMovieDB = {
    count:  numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из просмотреных фильмов?', ``).trim();
        const b = +prompt('На сколько оцените его?', ``).trim();  
    
        if (a != null && b != null && a !="" && b !="" && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log("DONE");
        } else {
            console.log("ERROR");
            i--;
        }
    }
}

rememberMyFilms();


function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert("Просмотрено мало фильмов");
    } else if (personalMovieDB.count < 30) {
        alert("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
        alert("Вы киноман!");    
    } else {
        alert("DO ERROR");    
    }
}

detectPersonalLevel();


function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.movies.privat);

function writeYourGenres() {
    for (let  i = 1; i <= 3; i++) {
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }    
}

writeYourGenres();


console.log(personalMovieDB);
document.write(`Название первого фильма:${personalMovieDB.movies.name} \n Оценка: ${personalMovieDB.movies.score}`);