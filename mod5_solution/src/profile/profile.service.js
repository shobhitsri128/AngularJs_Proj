(function(){
    'use strict';

    angular.module('profile')
    .service('StorageService',StorageService);

    function StorageService()
    {
        var vm=this;
        vm.profileInfo = null;
        vm.setData = function(data)
        {
            vm.profileInfo=data;
        }
        vm.getData = function(data)
        {
            return vm.profileInfo;
        }
    }
})();
