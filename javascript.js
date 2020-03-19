$.ajax({
    url: 'https://api.ebird.org/v2/data/obs/{{regionCode}}/recent/notable?detail=full',
    dataType: 'json',
    success: function(data) {
      console.log(data);
    }
  });

// curl --location --request GET 'https://api.ebird.org/v2/data/obs/{{regionCode}}/recent/notable?detail=full' \
// --header 'X-eBirdApiToken: {{x-ebirdapitoken}}'