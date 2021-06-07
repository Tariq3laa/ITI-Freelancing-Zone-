
/*Counterrrrrrrrrrrrrrrrrrrrrrrrrrr*/
window.onload = function count_func() {
    var zone1 = 0,
        expert1 = 0,
        x1 = 0;
    var y1 = 0, z1 = 0, m = 0;
    t = setInterval(function () {
        t1 = setInterval(function () {
            document.getElementById('c1').innerHTML = zone1++;
            if (zone1 == 10) {
                zone1 = 0, clearInterval(t1);
            }
        }, 50)
        t2 = setInterval(function () {
            document.getElementById('c2').innerHTML = expert1++;
            if (expert1 == 101) {
                expert1 = 0, clearInterval(t2);
            }
        }, 30)
        t3 = setInterval(function () {
            document.getElementById('c3').innerHTML = x1++;
            if (x1 == 1500) {
                x1 = 0, clearInterval(t3);
            }
        }, 10)
        t5 = setInterval(function () {
            document.getElementById('c5').innerHTML = z1++;
            if (z1 == 30600) {
                z1 = 0, clearInterval(t4);
            }
        }, 10)
        if (zone1 == 0 && expert1 == 0 && x1 == 0 && y1 == 0 && z1 == 0 && m == 0) {
            clearInterval(t);
        }
    }, 500)
}




$(document).ready(function () {
    $(".owl-carousel").owlCarousel(
        {
            loop: true,
            items: 4,
            autoplay: true,
            margin: 10,
            autoplaySpeed: 100,
            responsive: {
                0: {
                    items: 1,
                    center: true
                },
                500: {
                    items: 2
                },
                700: {
                    items: 3,
                    center: true
                },
                1000: {
                    items: 4
                }
            }

        }
    );
});