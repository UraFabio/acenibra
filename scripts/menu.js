document.getElementById('menu-icon').addEventListener('click', function() {
    this.classList.toggle('change')
    var nav = document.getElementById('header-nav');
    nav.classList.contains('show') ? nav.classList.remove('show') : nav.classList.add('show')
});

var elements = document.querySelectorAll('.header-menu-option');


elements.forEach(function(element) {
    element.addEventListener('click', function() {
        document.getElementById('menu-icon').classList.toggle('change')
        var nav = document.getElementById('header-nav');
        nav.classList.contains('show') ? nav.classList.remove('show') : nav.classList.add('show')
    })
});

