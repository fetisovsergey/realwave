// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require jquery.turbolinks
//= require turbolinks
//= require owl.carousel
//= require bootstrap
//= require_tree .
$(document).ready(function(){
	$(".owl-carousel").owlCarousel({
     //Basic Speeds
    navigation : true, // Show next and prev buttons
    slideSpeed : 500,
    paginationSpeed : 400,
    rewindSpeed : 1000,
    singleItem:true,
    autoPlay : 3000,

    // Navigation
    navigation: true,
    navigationText: [
      "&#10094;",
      "&#10095;"
      ],
    rewindNav : true,
    scrollPerPage : false,
 
    //Autoplay
    autoPlay : true,
    stopOnHover : true,
    lazyLoad: true,
 
    //Mouse Events
    dragBeforeAnimFinish : true,
    mouseDrag : true,
    touchDrag : true,
 
    // Other
    addClassActive : false,
 
	});
        });
