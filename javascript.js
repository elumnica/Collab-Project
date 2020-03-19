var settings = {
  "url": "https://api.ebird.org/v2/data/obs/KZ/recent",
  "method": "GET",
  "timeout": 0,
  "headers": {
    "X-eBirdApiToken": "b85tnspba3tn"
  },
};

$.ajax(settings).done(function (response){
  console.log(response);
});

