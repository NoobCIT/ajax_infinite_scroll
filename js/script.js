var year = ["2017"];

function apiCall() {
  $.getJSON('http://www.omdbapi.com/?y=' + encodeURI(year[0])).then(function(response) {
    console.log(response);
  });
};

apiCall();
