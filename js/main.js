
// Carosel 

$('.carosel_container').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  centerMode: true,
  variableWidth: true,
  autoplay: true,
  autoplaySpeed: 3000
});




//---------------------

////////////////
// DOM elements
///////////////

const eventNavtoggle = document.querySelector('#dropdown-toggle');
const eventNavMenu = document.querySelector('.dropdown-menu');
const eventNavItem = document.querySelectorAll('.dropdown-item');
const headerWrapper = document.querySelector('.header_wrapper');
const nav = document.querySelector('#navigation');
const homepageBtn = document.querySelector('#homeBtn');

let headerHeight = headerWrapper.clientHeight;

//---------------------

////////////
// Render
///////////



// sticky nav

const navTop = nav.offsetTop + headerHeight;

const stickyNavigation = () => {
  if (window.scrollY >= navTop) {
    headerWrapper.classList.add('fixed-nav-js');
  } else {
   headerWrapper.classList.remove('fixed-nav-js');
  }
}

// Navigation on click

 // * part 1
const navToggle = () => {
  $(".dropdown-menu").css("display", "block");
}
 // * part 2
const navItemsLoad = () => {
  for (let i = 0; i < eventNavItem.length; i++) {
    setTimeout(function () { 
      // eventNavItem[i].classList.add('translateItemIn'); .slideUp()
      eventNavItem[i].classList.add('translateItemIn');
    }, 100 * (i + 1));
  }
}

//---------------------

////////////////////
// Event Listenters
///////////////////

window.addEventListener('scroll', stickyNavigation);

$(eventNavtoggle).click(function() {
  $(eventNavMenu).toggleClass('showMenu');
  
  if ($('.dropdown-item').hasClass("translateItemIn")) {
    $('.dropdown-item').removeClass("translateItemIn");
  } else {
    navItemsLoad();
  }
});








