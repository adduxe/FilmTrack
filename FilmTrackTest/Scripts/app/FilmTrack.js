(function () {

    var ftModule = angular.module("FTModule", []);

    ftModule.controller("FTController", ["$scope",

        function ($scope) {

            const INITIAL_STATE = false;  // default bulb state: off
            $scope.numOfBulbs = $scope.numOfPeople = 0;

            $scope.showBulbs = function(){

                if ($scope.numOfBulbs < 1) {
                    $scope.bulbs = [];
                    return;
                }

                $scope.bulbs = new Array($scope.numOfBulbs);    // Initialize bulbs

                for (var i = 0; i < $scope.numOfBulbs; ++i) {
                    $scope.bulbs[i] = INITIAL_STATE;
                }

                for (var i = 1; i <= $scope.numOfPeople; ++i) {

                    for (var j = 0; j < $scope.numOfBulbs; ++j) {

                        if (((j + 1) % i) == 0) {
                            $scope.bulbs[j] = !$scope.bulbs[j];
                        }

                    } // for (var j...)
                } // for(var i...)

                $scope.ON_count = $scope.OFF_count = 0;

                for (var x = 0; x < $scope.numOfBulbs; ++x) {
                    if ($scope.bulbs[x]) {
                        ++$scope.ON_count;
                    } else {
                        ++$scope.OFF_count;
                    }

                } // for (var x...)
//                console.log("on : " + on_count + "   off : " + off_count);

            }   // showBulbs()
        }   // function($scope)

    ])  // ftModule.controller()

}());