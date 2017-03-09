var app = angular.module("lab18Module");
app.controller("fizzbuzzCtrl", function($scope, infoFactory, apiFactory) {
    //everytime the page view switches this function assigns value to this answer variable right away, rather than waiting for the function to run.
    $scope.answer = infoFactory.inputReturn();
    $scope.robotz = apiFactory.getRobotz($scope.answer);

    $scope.fizzults = function(num) {
        console.log(num);
        infoFactory.takeNumber(num);
        //$scope.answer = infoFactory.inputReturn();
    }
} );
