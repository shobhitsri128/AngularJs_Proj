(function(){
    'use strict';
    angular.module('profile')
    .controller('signupController',signupController);

    signupController.$inject = ['MenuService','StorageService','$state'];
    function signupController(MenuService,StorageService,$state)
    {
        var vm=this;
        vm.showError=false;
        vm.submit = function()
        {
            var params=[];
            params['fname']=vm.fname;
            params['lname']=vm.lname;
            params['email']=vm.email;
            params['phno']=vm.phno;
            console.log(vm.fname,vm.lname,vm.email,vm.phno,vm.menu_num);
            var k=MenuService.getMenuItemsDesc(vm.menu_num);
            k.then(function(response){
                // console.log(response);
                params['menu_num']=response;
                StorageService.setData(params);
                vm.showError=false;
                alert("Your information has been saved");
                $state.go('public.home')
            })
            .catch(function(response){
                vm.showError=true;
            })
        }
    }
})();
