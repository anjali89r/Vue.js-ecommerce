let mainNav = document.getElementById('main-nav');
let subNav = document.getElementById('sub-nav');
let navbarToggle = document.getElementById('navbar-toggle');

navbarToggle.addEventListener('click', function(){

    if (this.classList.contains('active')){
        mainNav.style.display = 'none';
        subNav.style.display = 'none'
        this.classList.remove('active');
    }
    else {
        mainNav.style.display = 'flex';
        subNav.style.display = 'flex';
        this.classList.add('active');

    }

});
