(function () {

    var ftModule = angular.module("FTModule", []);

    ftModule.controller("FTController", ["$scope",

        function ($scope) {

            const INITIAL_STATE = false;  // off
            $scope.numOfBulbs = 10;


            $scope.showBulbs = function () {

                $scope.bulbs = new Array($scope.numOfBulbs);    // Initialize bulbs

                for (var i = 0; i < $scope.numOfBulbs; ++i) {
                    $scope.bulbs[i] = INITIAL_STATE;
                }

                for (var i = 1; i <= $scope.numOfBulbs; ++i) {
                    for (var j = 0; j < $scope.numOfBulbs; ++j) {

                        if (((j + 1) % i) == 0) {
                            $scope.bulbs[j] = !$scope.bulbs[j];
                        }

                    } // for (var j...)
                } // for(var i...)

                var bulbState = '';
                var on_count = 0, off_count = 0;

                for (var x = 0; x < $scope.numOfBulbs; ++x) {
                    if ($scope.bulbs[x]) {
                        bulbState = "O";
                        ++on_count;
                    } else {
                        bulbState = "X";
                        ++off_count;
                    }

                    console.log("bulb " + (x + 1) + ": " + bulbState);
                } // for (var x...)
                console.log("on : " + on_count + "   off : " + off_count);

            }   // showBulbs()
        }   // function($scope)

    ])  // ftModule.controller()

}());