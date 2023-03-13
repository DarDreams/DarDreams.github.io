const btn = $('#btn');
$(document).ready(function() {
    $('.list-item:first').hover(function () {
        $(this).toggleClass('active');
    });

    $('.list-item:eq(2)').on('click',function () {
        $('.image:even').fadeToggle();
    })

    $('.list-item:eq(4)').on('click',function () {
        $('.image:odd').animate({
            opacity: 'toggle',
            height: "toggle"
        }, 2000);
    })

    function* generator() {
        yield 'S';
        yield 'c';
        yield 'r';
        yield 'i';
        yield 'p';
        yield 't';
    };

    const str = generator();

    console.log(str.next().value);
    console.log(str.next().value);
    console.log(str.next().value);

});//// END