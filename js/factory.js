var app = angular.module("lab18Module");
app.factory("infoFactory", function () {
    var answer;
    return {
        takeNumber: function (numberToFizzBuzz) {
            if (numberToFizzBuzz % 3 === 0 && numberToFizzBuzz % 5 === 0) {
                answer = "FizzBuzz";
            } else if (numberToFizzBuzz % 3 === 0) {
                answer = "Fizz";
            } else if (numberToFizzBuzz % 5 === 0) {
                answer = "Buzz";
            } else {
                answer = "not fizzbuzzable";
            }
            console.log(answer);
            return answer;
        },
        inputReturn: function() {
            return answer;
        }
    }
});



//
//    var userInfo = {};
//    return {
//        sentInfo: function (numberToFizzBuzz) {
//            userInfo = numberToFizzBuzz;
//        },
//        getInfo: function () {
//            return userInfo;
//        }
//    }
//
//});
