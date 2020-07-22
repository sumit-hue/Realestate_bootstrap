$(document).ready(function () {
    $('.count').counterUp({
        delay: 10,
        time: 2000
    });



    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 15,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            // 600: {
            //     items: 3
            // },
            // 1000: {

            //     items: 5
            // }
        }
    })
    var navbar = document.getElementById('navbar');
    var offsetTop = navbar.offsetTop;
    window.addEventListener('scroll', function () {
        if (window.scrollY > offsetTop) {
            navbar.classList.add('fixed-top');
            navbar.classList.add('fadeUp');
            toTop.style.display = 'block';
        } else {
            navbar.classList.contains('fixed-top') &&
                navbar.classList.remove('fixed-top')

            navbar.classList.contains('fadeUp') &&
                navbar.classList.remove('fadeUp')
            toTop.style.display = 'none';
        }
    })
});

var toTop = document.getElementById('top-scroll');
toTop.addEventListener('click', function () {
    window.scrollTo(0, 0);
})