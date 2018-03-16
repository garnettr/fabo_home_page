
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
const headerWrapper = document.querySelector('.header_wrapper');
const nav = document.querySelector('#navigation');
const homepageBtn = document.querySelector('#homeBtn');

let headerHeight = headerWrapper.clientHeight;

//---------------------

////////////
// Render
///////////


const navToggle = () => {
	$(".dropdown-menu").css("display", "block");
}

const showHide = () => {
	if(!event.target.matches('#dropdown-toggle')) {
		$(".dropdown-menu").css("display", "none");
	}
}

// sticky nav

const navTop = nav.offsetTop + headerHeight;

const stickyNavigation = () => {
  if (window.scrollY >= navTop) {
    headerWrapper.classList.add('fixed-nav-js');
  } else {
   headerWrapper.classList.remove('fixed-nav-js');
  }
}

//---------------------

////////////////////
// Event Listenters
///////////////////

window.addEventListener('scroll', stickyNavigation);

$(eventNavtoggle).click(function() {
  $(eventNavMenu).toggleClass('show');
})
