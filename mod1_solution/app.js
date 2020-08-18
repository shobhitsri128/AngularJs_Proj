(function () {
    'use strict';
    angular.module('LunchCheck',[])
    .controller('LunchCheckController',LunchCheckController);
    function LunchCheckController($scope){
        $scope.lunch_items="";
        $scope.countItems = function(){
            var items=$scope.lunch_items.split(",");
            console.log(items);
            if($scope.lunch_items=="")
            {
                alert("Please enter the data first");
                $scope.message="";
            }
            else if(items.length<=3)
            {
                $scope.message="Enjoy!";
            }
            else {
                $scope.message="Too much!";
            }
        }
    }

})();
