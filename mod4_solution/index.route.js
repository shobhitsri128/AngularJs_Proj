(function(){
    angular.module('MenuApp')
    .config(RouterConfig);

    function RouterConfig($stateProvider,$urlRouterProvider)
    {
        $urlRouterProvider.otherwise('/');

        $stateProvider
        .state('home',{
            url:'/',
            templateUrl:'src/template/home.html'
        })
        .state('category',{
            url:'/category',
            templateUrl:'src/template/category.html',
            resolve:{
                categoryList:['MenuDataService',function(MenuDataService){
                    return MenuDataService.getAllCategory();
                }]
            },
            controller:'categoryController as category'
        })
        .state('items',{
            templateUrl:'src/template/items.html',
            controller:'itemController as itemCtrl',
            params:{
                short_name:null
            }
        })
    }
})();
