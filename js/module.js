var app = angular.module("lab18Module", ['ngRoute']);
app.config(function($routeProvider, $locationProvider){
    $routeProvider
    .when('/ngFizzBuzz', {
        controller: 'fizzbuzzCtrl',
        templateUrl: 'input.html'
    })
    .when('/output', {
        controller: 'fizzbuzzCtrl',
        templateUrl: 'output.html'
    })
    .otherwise({redirectTo: '/'});
    $locationProvider.hashPrefix('');
});


app.directive("logo", function() {
    return {
        restrict: "EA",
        replace: true,
        template: "<img src='img/banner-angularjs.jpg' alt='logo' height=25% width=25%>"
    }
});


app.directive("footerLogo", function() {
    return {
        restrict: "EA",
        replace: true,
        template: "<img src='img/ATeam1.jpg' alt='footerLogo' height=50% width=50% >"
    }
});
  
