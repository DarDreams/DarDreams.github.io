//touchstart  //при наведении с нажаттым пальцем
//touchmove  
//touchend
//touchenter
//touchleave
//touchcancel

document.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.adding__input');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault;
        console.log('START');
    });

    box.addEventListener('touchmove', (e) => {
        e.preventDefault;
        console.log('START');
    });

    box.addEventListener('touchend', (e) => {
        e.preventDefault;
        console.log('START');
    });

    
});
// СВОЙСТВА
//.touches  - все пальцы на экране
//.targetTouches - все пальцы на элементе
//.changedTouches - список пальцев которые учавствует в событии

