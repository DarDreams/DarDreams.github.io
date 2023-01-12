"use strict";
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', "1");
let personalMovieDB = {
    count:  numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};


personalMovieDB.movies.name = prompt('Один из просмотреных фильмов?', "logan"); 
personalMovieDB.movies.name = prompt('Один из просмотреных фильмов?', "hogan"); 

personalMovieDB.movies.score = +prompt('На сколько оцените его?', "10.5"); 
personalMovieDB.movies.score = +prompt('На сколько оцените его?', "10.8"); 

console.log(personalMovieDB);
document.write(`${personalMovieDB.movies.name} : ${personalMovieDB.movies.score} hghgfh`);