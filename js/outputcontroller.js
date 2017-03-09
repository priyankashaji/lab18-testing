var app = angular.module("lab18Module");

app.controller('outputController', function($scope, infoFactory) {
    $scope.numberToFizzBuzz = infoFactory.getInfo();
    console.log($scope.numberToFizzBuzz);
});