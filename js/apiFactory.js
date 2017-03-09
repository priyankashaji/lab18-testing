var app = angular.module("lab18Module");

app.factory('apiFactory', function($http) {
    var robotz;

    return {
        getRobotz: function(answer) {
          var url = "https://robohash.p.mashape.com/index.php?text=" + answer;
            $http({
                method: "GET",
                url: url,
                headers: {
                    "X-Mashape-Key": "lOInYNzHQ2mshMjc4ErlgCx8FjcNp1IwEUHjsnGVFb2yp1SelN",
                    "Accept": "application/json"
                },
            }).then(function mySucces(response) {
                console.log(response.data.imageUrl);
                robotz = response.data.imageUrl;
            }, function myError(response) {
                console.log(response.statusText);
            });
            return robotz;
        }
    }
});

