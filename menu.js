window.onscroll = function() {myFunction()};

var navbar = document.getElementById("menu_nav1");

var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

document.getElementById("goToBook").onclick = function () {
  location.href = "booking.html";
};