var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
//animation
new AOS.init({
  duration: 1000,
  
});
//counter
$(document).ready(function(){
  $('.counter').counterUp({
    delay: 0.1,
    time: 1200
  });
});

// Back to top button
$(window).scroll(function () {
  if ($(this).scrollTop() > 300) {
      $('.back-to-top').fadeIn('slow');
  }else{
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function () {
      $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
      return false;
  });
const inputs = document.querySelectorAll(".input");
function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}
function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}
inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});
$('#btn-1,#btn-2,#btn-3,#btn-4').click(function(){
  var btn = $(this).data("showbutton");
  showButtonText(btn);
});

function showButtonText(btn) {    
  // reset
$('.text').hide();    	
  $('[data-button]').hide(); 
  $('[data-showbutton]').removeClass('clicked');
      
  // only show the selected
  $('[data-showbutton=' + btn + ']').addClass('clicked');  
  $('[data-button=' + btn + ']').show();
}
var header = document.getElementById("myDiv");
var btns = header.getElementsByClassName("descriptions");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  if (current.length > 0) { 
    current[0].className = current[0].className.replace(" active", "");
  } 
this.className += " active";
 });} 

 //sticky header
 let header =document.querySelector('header');

 header.classList.toggle('sticky', window.scrollY > 100);
