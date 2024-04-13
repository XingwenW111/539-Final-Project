document.addEventListener('DOMContentLoaded', function () {

    const headerIndex = document.querySelector('.header-index');
    const navTitle = document.getElementById('nav_title');

  
    headerIndex.addEventListener('mouseenter', function () {
        headerIndex.classList.add('header-index-zoom');
    });

    headerIndex.addEventListener('mouseleave', function () {
        headerIndex.classList.remove('header-index-zoom');
    });


    navTitle.addEventListener('mouseenter', function () {
        navTitle.classList.add('heading-zoom');
    });

    navTitle.addEventListener('mouseleave', function () {
        navTitle.classList.remove('heading-zoom');
    });
});
