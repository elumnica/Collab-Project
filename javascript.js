/*
 *PULL information from the browser and build the query URL
 * @returns {string} URL for bird query input
 *
 */

// TODO
// Variables
var queryParams = { "api-key": "vtvt2pqn28os" };
var queryURL = "https://api.ebird.org/v2/data/obs/" + regionCode + "/recent/notable?detail=full";
var regionCode = "US-NY";






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



// var geoQuery = {
//   "url": "https://api.ebird.org/v2/ref/hotspot/US-NY/",
//   "method": "GET",
//   "timeout": 0,
// };

// $.ajax(geoQuery).done(function (response) {
//   console.log(response);
// });


var geoQuery = {
  "url": "https://api.ebird.org/v2/data/obs/US-NY/recent",
  "method": "GET",
  "timeout": 0,
  "headers": {
    "X-eBirdApiToken": "vtvt2pqn28os"
  },
};
let temp = [];
$.ajax(geoQuery).done(function(response) {
  // console.log(response);
  let nyBirds = {};
  let locations = {};
  let bName= [];
  let region = [];
  let coord = [];
  for(let i=0; i< response.length; i++){
    locations[response[i].locName] = `${response[i].lat} , ${response[i].lng}`
    nyBirds[response[i].comName] = locations
    bName.push(response[i].comName)
    region.push(response[i].locName)
    coord.push(`${response[i].lat},${response[i].lng}`)

    bName.forEach(birdFunc);

  }

  // region.forEach(birdFunc);
  // coord.forEach(birdFunc);
  
  // console.log(bName)
  // console.log(region)
  // console.log(coord)
  // console.log(nyBirds)

  

  // function birdFunc(item, index) {
  //   // console.log(item,index);
  //   var table = $(".bird-table");
  //   var tableRowElement = $("<tr class='hoverable'>");
  //   var tableDataElement = $("<td>").attr(id=`${index}`);
  //   tableRowElement.append(tableDataElement);
  //   table.append(tableRowElement);
  // }
 


    // function birdFunc(item, index){

    //   var $table = $("#bird-table");

    //   var $tableRowElement = $("<tr class='hoverable'>");
    //   var $tableDataElement = $("<td>").text(item);

    //   var createTableDataElement = $tableRowElement.append($tableDataElement);
 

    //   $tableDataElement.attr(id=index);
      
    //   $table.append(createTableDataElement);

    // }


  






      
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

