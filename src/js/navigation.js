window.addEventListener('DOMContentLoaded', function()
{
    let mainNav = document.getElementById("js-menu");
    let navBarToggle = document.getElementById("js-navigation-toggle");

    navBarToggle.addEventListener("click", function()
    {
        mainNav.classList.toggle("active");
    })
})