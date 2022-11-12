document.querySelector('#hamburger-menu').addEventListener('click', function() {
    document.querySelector('.hamburger-menu-bar').setAttribute('id', 'visible');
})

document.querySelector('.hamburger-nav-menu li a img').addEventListener('click', function() {
    document.querySelector('.hamburger-menu-bar').removeAttribute('id', 'visible');
})