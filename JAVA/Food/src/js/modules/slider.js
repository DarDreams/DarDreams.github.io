function slider ({container, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, field}) {
    // [ SLIDERS ] 

    // const sliders = document.querySelector('.offer__slider');
    // const nextSlider = document.querySelector('.offer__slider-next');
    // const prevSlider = document.querySelector('.offer__slider-prev');
    // const curSlider = document.querySelector('#current');
    // const totalSlider = document.querySelector('#total');
    // const curImgSlider = document.querySelector('.offer__slide>img');
    // const imagesSlider = ['','img/slider/paprika.jpg','img/slider/olive-oil.jpg', 'img/slider/pepper.jpg', 'img/slider/food-12.jpg'];
    
    // function slide (num) {
    //     (curSlider.innerText == 4) ? curSlider.innerText = + num : curSlider.innerText++;
    //     curSlider.innerText = '0' + curSlider.innerText ;
    //     curImgSlider.src = imagesSlider[curSlider.innerText[1]];  
    // }

    // nextSlider.onclick = function () {
    //     slide("+1")
    // }

    // Slider.onclick = function () {
    //     slide("+1")
    // }
////version IVAN
    // let slideIndex = 1;
    // const slides = document.querySelectorAll('.offer__slide'),
    //     prev = document.querySelector('.offer__slider-prev'),
    //     next = document.querySelector('.offer__slider-next'),
    //     total = document.querySelector('#total'),
    //     current = document.querySelector('#current');

    // showSlides(slideIndex);

    // if (slides.length < 10) {
    //     total.textContent = `0${slides.length}`;
    // } else {
    //     total.textContent = slides.length;
    // }

    // function showSlides(n) {
    //     n > slides.length && (slideIndex = 1);
    //      //  n > slides.length ? slideIndex = 1 : null;
        
    //        n < 1 && slides.length;
    //     // if (n < 1) {
    //     //     slideIndex = slides.length;
    //     // }

    //     slides.forEach((item) => item.style.display = 'none');

    //     slides[slideIndex - 1].style.display = 'block'; // Как ваша самостоятельная работа - переписать на использование классов show/hide
        
    //     if (slides.length < 10) {
    //         current.textContent =  `0${slideIndex}`;
    //     } else {
    //         current.textContent =  slideIndex;
    //     }
    // }

    // function plusSlides (n) {
    //     showSlides(slideIndex += n);
    // }

    // prev.addEventListener('click', function(){
    //     plusSlides(-1);
    // });

    // next.addEventListener('click', function(){
    //     plusSlides(1);
    // });

    //////VERSION CARUSEL

    const   slides = document.querySelectorAll(slide),
            slider = document.querySelector(container),
            prev = document.querySelector(prevArrow),
            next = document.querySelector(nextArrow),
            total = document.querySelector(totalCounter),
            current = document.querySelector(currentCounter),
            slidesWrapper = document.querySelector(wrapper),
            slidesField = document.querySelector(field),
            width = window.getComputedStyle(slidesWrapper).width;

    let slideIndex = 1;
    let offset = 0;

        if (slides.length < 10) {
            total.textContent = `0${slides.length}`;
            current.textContent = `0${slideIndex}`;
        } else {
            total.textContent =  slides.length;
            current.textContent = slideIndex;
        }

    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';

    slidesWrapper.style.overflow = 'hidden';

    slides.forEach(slide => {
        slide.style.width = width;
    });

    slider.style.position = 'relative';

    const indicators = document.createElement('ol'),
          dots = [];
    indicators.classList.add('carousel-indicators');
    indicators.style.cssText = `
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 15;
        display: flex;
        justify-content: center;
        margin-right: 15%;
        margin-left: 15%;
        list-style: none;
    `;
    slider.append(indicators);  

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.style.cssText = `
            box-sizing: content-box;
            flex: 0 1 auto;
            width: 30px;
            height: 6px;
            margin-right: 3px;
            margin-left: 3px;
            cursor: pointer;
            background-color: #fff;
            background-clip: padding-box;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            opacity: .5;
            transition: opacity .6s ease;
        `;
        if (i == 0) {
            dot.style.opacity = 1;
        }
        indicators.append(dot);
        dots.push(dot);
    }
    
    function deleteNotDigits(str) {
        return +str.replace(/\D/g,"");
    }

    next.addEventListener('click', () => {
        if (offset == deleteNotDigits(width) * (slides.length-1)) {
            offset = 0;
        } else {
            offset += deleteNotDigits(width);
        }
        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }
        dots.forEach(dot => dot.style.opacity = '0.5');
        dots[slideIndex - 1].style.opacity = '1';
    });

    prev.addEventListener('click', () => {
        if (offset == 0) {
            offset =deleteNotDigits(width) * (slides.length-1);
        } else {
            offset -= deleteNotDigits(width);
        }
        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }

        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }

        dots.forEach(dot => dot.style.opacity = '0.5');
        dots[slideIndex - 1].style.opacity = '1';
    });

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');

            slideIndex = slideTo;
            offset = deleteNotDigits(width) * (slideTo - 1);

            slidesField.style.transform = `translateX(-${offset}px)`;

            if (slides.length < 10) {
                current.textContent = `0${slideIndex}`;
            } else {
                current.textContent = slideIndex;
            }

            dots.forEach(dot => dot.style.opacity = '0.5');
            dots[slideIndex - 1].style.opacity = '1';
        });
    });
}

export default slider;