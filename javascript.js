/*
 *PULL information from the browser and build the query URL
 * @returns {string} URL for bird query input
 *
 */

// TODO
// Variables
var queryParams = { "api-key": "vtvt2pqn28os" };
var queryURL =
  "https://api.ebird.org/v2/data/obs/" +
  regionCode +
  "/recent/notable?detail=full";
var regionCode = "US-NY";

// TODO
function clear() {
  // $("").empty();
}

// Country Codes API
var settings2 = {
  url: "https://restcountries.eu/rest/v2/all",
  method: "GET",
  timeout: 0
};

var geoQuery = {
  url: "https://api.ebird.org/v2/data/obs/US-NY/recent",
  method: "GET",
  timeout: 0,
  headers: {
    "X-eBirdApiToken": "vtvt2pqn28os"
  }
};
let temp = [];

//  Get request for birds in US-NY, return name, location, and coordinates
$.ajax(geoQuery).then(function(response) {
  for (var i = 0; i < response.length; i++) {
    // variables for table data
    var names = response[i].comName;
    var regions = response[i].locName;
    var birdcoords =
      "{ x | " + response[i].lat + "} , " + "{ y | " + response[i].lng + "}";

    // JQuery selectors to reference table and row
    var tBody = $("#btable");
    var tRow = $("<tr>");

    tRow.attr("class", "hoverable black-text");
    // JQuery selectors to referene table data inputs
    var birdName = $("<td>").text(names);
    var regionName = $("<td>").text(regions);
    var coordNums = $("<td>").text(birdcoords);

    // Append the newly created table data to the table row
    tRow.append(birdName, regionName, coordNums);

    // Append the table row to the table body
    tBody.append(tRow);
  }
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
document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".carousel");
  var instances = M.Carousel.init(elems, options);
});

// Or with jQuery

$(document).ready(function() {
  $(".carousel").carousel();
});
// CAROUSEL FUNCTIONALITY
