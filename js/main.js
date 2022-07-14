document.addEventListener('DOMContentLoaded', function(){
    var date = new Date();
    document.getElementById('copyDate').textContent = date.getFullYear();

    var dropdowns = document.querySelectorAll('.dropdown-trigger');
    var sidenavs = document.querySelectorAll('.sidenav');
    var parallax = document.querySelectorAll('.parallax');
    var initDrop = M.Dropdown.init(dropdowns, {coverTrigger: false, constrainWidth:false});
    var initSidenav = M.Sidenav.init(sidenavs, {});
    var initParallax = M.Parallax.init(parallax, {});
});