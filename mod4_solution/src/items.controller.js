(function(){
    'use strict';
    angular.module('MenuApp')
    .controller('itemController',itemController);

    function itemController($stateParams,MenuDataService)
    {
        var vm=this;
        var k = MenuDataService.getItemsForCategory($stateParams.short_name);
        k.then(function(response){
            console.log(response)
            vm.itemDetails = response;
        })
    }
})();
