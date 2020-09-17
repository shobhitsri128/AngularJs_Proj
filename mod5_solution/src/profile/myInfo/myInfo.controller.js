(function(){
    'use strict';

    angular.module('profile')
    .controller('myInfoController',myInfoController);

    myInfoController.$inject=['StorageService']
    function myInfoController(StorageService)
    {
        var vm=this;
        vm.params=StorageService.getData();
        console.log(vm.params);
    }
})();
