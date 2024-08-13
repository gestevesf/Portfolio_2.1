/* NAVIGATION BAR */
const navbar = document.getElementById('nav-fixed');

const navbarHeightPx = 90.594;

window.addEventListener('scroll', () => {
  if (
    document.body.scrollTop > navbarHeightPx ||
    document.documentElement.scrollTop > navbarHeightPx
  ) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});



/* EXPERIENCE SHOW/HIDE DIVS */
var li_elements = document.querySelectorAll(".wrapper_left ul li");
var item_elements = document.querySelectorAll(".item");
for (var i = 0; i < li_elements.length; i++) {
  li_elements[i].addEventListener("click", function() {
    li_elements.forEach(function(li) {
      li.classList.remove("active");
    });
    this.classList.add("active");
    var li_value = this.getAttribute("data-li");
    item_elements.forEach(function(item) {
      item.style.display = "none";
    });
    if (li_value == "experience1") {
      document.querySelector("." + li_value).style.display = "block";
    } else if (li_value == "experience2") {
      document.querySelector("." + li_value).style.display = "block";
    } else if (li_value == "experience3") {
      document.querySelector("." + li_value).style.display = "block";
    } else if (li_value == "experience4") {
      document.querySelector("." + li_value).style.display = "block";
    } else {
      console.log("");
    }
  });
}

/* NAVIGATION BAR MOBILE */
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}