/*
 *PULL information from the browser and build the query URL
 * @returns {string} URL for bird query input
 *
 */

// TODO
// Variables
var queryParams = { "api-key": "vtvt2pqn28os" };
var queryURL = "https://api.ebird.org/v2/data/obs/" + regionCode + "/recent/notable?detail=full";
var regionCode = "NY";

// var carouselElement = $("carousel").attr();


// TODO
function clear() {
  // $("").empty();
}


// Country Codes API 
var settings2 = {
  "url": "https://restcountries.eu/rest/v2/all",
  "method": "GET",
  "timeout": 0,
  
};
// $.ajax(settings2).done(function(rcodes){
//   console.log(rcodes)
// });
//  Country Codes API END



var geoQuery = {
  "url": "https://api.ebird.org/v2/ref/hotspot/US-NY/",
  "method": "GET",
  "timeout": 0,
};

$.ajax(geoQuery).done(function (response) {
  console.log(response);
});




// PARALLAX FUNCTIONALITY
document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".parallax");
  var instances = M.Parallax.init(elems, options);
});

// Or with jQuery

$(document).ready(function() {
  $(".parallax").parallax();
});
// PARALLAX FUNCITONALITY


// CAROUSEL FUNCTIONALITY
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems, options);
});

// Or with jQuery

$(document).ready(function(){
  $('.carousel').carousel();
});
// CAROUSEL FUNCTIONALITY

