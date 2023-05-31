/*codigo centrado view en dropdown*/
// document.querySelector('.navbar-toggler').addEventListener('click', function () {
//     setTimeout(function () {
//         document.querySelector('#navbarsExample05').scrollIntoView({
//             behavior: 'smooth'
//         });
//     }, 300); // Espera 300ms para que el menú se expanda antes de hacer scroll
// });
// document.querySelector('.navbar-toggler').addEventListener('click', function () {
//     let navbarElement = document.querySelector('#navbarsExample05');
//     if (!navbarElement.classList.contains('show')) {
//         setTimeout(function () {
//             navbarElement.scrollIntoView({
//                 behavior: 'smooth'
//             });
//         }, 300); // Espera 300ms para que el menú se expanda antes de hacer scroll
//     }
// });


//codigo click fuera del menu para que se cierre
document.addEventListener('click', function (event) {
    var isClickInsideNav = document.getElementById('navbarsExample05').contains(event.target);
    var navOpen = document.getElementById('navbarsExample05').classList.contains('show');
    var isNavbarToggler = event.target.classList.contains('navbar-toggler');
    if (!isClickInsideNav && navOpen && !isNavbarToggler) {
        document.querySelector('.navbar-toggler').click();
    }
});
