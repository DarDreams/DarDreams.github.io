"use strict";
let personalMovieDB = {
    count:  0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: () => {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', "1").trim();
   
        while (personalMovieDB.count =='' || personalMovieDB.count == null || isNaN(personalMovieDB.count) ){
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', "1").trim();
       }
   },
    rememberMyFilms: () => {
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
    },  
    detectPersonalLevel: () =>{
        if (personalMovieDB.count < 10) {
            alert("Просмотрено мало фильмов");
        } else if (personalMovieDB.count < 30) {
            alert("Вы классический зритель");
        } else if (personalMovieDB.count > 30) {
            alert("Вы киноман!");    
        } else {
            alert("DO ERROR");    
        }
    },
    showMyDB: (hidden) =>{
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;       
        }
    },
    writeYourGenres: function () {
        for (let  i = 1; i < 2; i++) {
        //     let genre = prompt(`Ваш любимый жанр под номером ${i}`);
        //     if (genre == "" || genre == null) {
        //         console.log("Вы ввели не корректные данные или не ввели их вообще");
        //         i--;
        //     } else {
        //         personalMovieDB.genres[i-1] = genre;
        //     }
        // }    
        // personalMovieDB.genres.forEach((item, i) => {
        //     console.log(`Любимый жанр ${i+1} - это ${item}`);
        ///////////////////////////////////////////////////////////////////////////////////
        let genres = prompt(`Введите ваши любимые жанры через запятую`).trim().toLowerCase();
        if (genres == "" || genres == null) {
            console.log("Вы ввели не корректные данные или не ввели их вообще");
            i--;
        } else {
            personalMovieDB.genres = genres.split(", ");
            personalMovieDB.genres.sort();

            personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i+1} - это ${item}`);
            });
        }
        ///////////////////////////////////////////////////////////////////////////////////

        }
    }
};


console.log(personalMovieDB);
document.write(`Название первого фильма:${personalMovieDB.movies.name} \n Оценка: ${personalMovieDB.movies.score}`);

