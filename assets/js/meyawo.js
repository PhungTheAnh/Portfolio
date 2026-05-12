/*!
=========================================================
* Meyawo Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

var lenis = new Lenis({
    duration: 0.6,
    wheelMultiplier: 1,
    touchMultiplier: 1.5,
    infinite: false
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

$(document).ready(function () {
    $(document).on('click', 'a[href^="#"]', function (event) {
        var hash = $(this).attr('href');
        if (hash && hash.length > 1) {
            var target = document.querySelector(hash);
            if (target) {
                event.preventDefault();
                lenis.scrollTo(target, { offset: -60 });

                if ($(window).width() < 992) {
                    $('#nav-toggle').removeClass('is-active');
                    $('ul.nav').removeClass('show');
                }
            }
        }
    });

    $('#nav-toggle').click(function () {
        $(this).toggleClass('is-active');
        $('ul.nav').toggleClass('show');
    });

    initScrollReveal();
});

function initScrollReveal() {
    var sections = document.querySelectorAll('.section, .footer');
    sections.forEach(function (section) {
        var children = section.querySelectorAll(
            '.section-subtitle, .section-title, .about, .skill-card, .timeline-item, .contact-form, .form-row'
        );
        children.forEach(function (child, index) {
            child.classList.add('reveal');
            if (index < 5) {
                child.classList.add('reveal-delay-' + (index + 1));
            }
        });
    });

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(function (el) {
        observer.observe(el);
    });
}
