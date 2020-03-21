
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, options);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.parallax').parallax();
  });


var settings = {
  "url": "https://api.ebird.org/v2/data/obs/KZ/recent",
  "method": "GET",
  "timeout": 0,
  "headers": {
    "X-eBirdApiToken": "b85tnspba3tn", //Minjae's Key
    "X-eBirdApiToken": "vtvt2pqn28os" //Joe's Key
  },
};

// let inputBird =prompt("Search a bird").toLowerCase();

$.ajax(settings).done(function (response){

  for(let i=0; i < response.length; i++){
    if(response[i].comName.toLowerCase() == inputBird){
      console.log(response[i]) 
    }
  }
  let x =[]

  // for(let i =0; i < response.length; i++){
  //   x.push(response[i].comName)
  //   console.log(x)
  // }
  // used this to get all of the common names of the bird and uploaded it to the html

});

/* *********** SOME QUICK API NOTES **************** 
 (KEYS BELOW)
1. The response we receive from the website is intially stored as an array with multiple object elements.
2. To parse through we can do response(i) , i being any positive real integer. 
3. Once we get into the object, we can parse through it by going through the available keys. 
     ie.   object.key will yield the associated value
      input:
          let birdObject = response[0]

          console.log(birdObject.comName)
          console.log(birdObject.obsDt)
          console.log(birdObject.howMany)

      output:
          "Hawfinch"
          "2020-03-19 18:16"
          "1"
4. Parsing Objects for data
    - there are a multitude of different ways to parse objects.
    - objects come with built in methods. This allwows you to break down parts of the object into individual arrays.
       These are helpful in grabbing large portions of data we want and more.
      - Object.keys
      - Object.values
      - Object.entries
    - looping through objects.
    "https://zellwk.com/blog/looping-through-js-objects/"
      - use for in method or for of
        - for of method
          -***"better" than for in method***
          - useful for targeting specfic parts of the object (keys values or entries)
          -ie
            input:
                const keys = Object.keys(birdObject)
                  for (const key of keys) {
                    console.log(key)
                  }
            output:        
                    "speciesCode"
                    "comName"
                    "sciName"
                    "locId"
                    "locName"
                    "obsDt"
                    "howMany"
                    "lat"
                    "lng"
                    "obsValid"
                    "obsReviewed"
                    "locationPrivate"
                    "subId                


                      Bird Keys
======================================================
0: "speciesCode"
1: "comName"
2: "sciName"
3: "locId"
4: "locName"
5: "obsDt"
6: "howMany"
7: "lat"
8: "lng"
9: "obsValid"
10: "obsReviewed"
11: "locationPrivate"
12: "subId"


*/
