(function(){
    angular.module('data')
    .service('MenuDataService',MenuDataService);

    function MenuDataService($http,$q)
    {
        var vm=this;
        vm.getAllCategory = function()
        {
            var def=$q.defer();
            $http({
                method:'GET',
                url:'https://davids-restaurant.herokuapp.com/categories.json'
            }).then(function success(response) {
                def.resolve(response.data);
            },function error(response){
                console.log(response);
            })
            return def.promise;
        }
        vm.getItemsForCategory = function(short_name)
        {

            // var def=$q.defer();
            var t=$http({
                method:'GET',
                url:' https://davids-restaurant.herokuapp.com/menu_items.json',
                params:{'category':short_name}
            }).then(function success(response) {
                return response.data;
                // def.resolve(response.data);
            },function error(response){
                console.log(response);
            })
            return t;
            // return def.promise;
        }

    }
})();
