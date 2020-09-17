(function(){
    'use strict';

    angular.module('profile',['common'])
    .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider'];
    function RoutesConfig($stateProvider)
    {
        $stateProvider
        .state('signup',{
            url:'/profile/signup',
            templateUrl:'src/profile/signup/signup.html',
            controller:'signupController as vm'
        })
        .state('myInfo',{
            url:'/profile/myInfo',
            templateUrl:'src/profile/myInfo/myInfo.html',
            controller:'myInfoController as vm'
        })
    }
})();
