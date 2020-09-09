(function () {
    angular.module("NarrowItDownApp",[])
    .controller("NarrowItDownAppController",NarrowItDownAppController);

    function NarrowItDownAppController($http)
    {
        var vm=this;
        vm.list=[];
        vm.found=[];
        console.log("Hello");
        vm.getList = function()
        {
            if(vm.list.length!=0)
                vm.narrowList();
            else {
                $http({
                        method:'GET',
                        url:'https://davids-restaurant.herokuapp.com/menu_items.json'
                }).then(function (response){
                    // console.log(response);
                    vm.list=response.data.menu_items;
                    vm.narrowList();
                },function (error){
                    // console.log(error);
                })
            }
        }
        vm.narrowList = function()
        {
            vm.found=[];
            if(vm.search!="" && vm.search!=null && vm.search!=undefined)
            {
                for(var x=0;x<vm.list.length;x++)
                {
                    if(vm.list[x].description.toLowerCase().indexOf(vm.search.toLowerCase())!=-1)
                        vm.found.push(vm.list[x]);
                }
            }
            if(vm.found.length==0)
                    vm.showError=true;
            else
                vm.showError=false;
        }
        vm.remove = function(index)
        {
            vm.found.splice(index,1);
        }
    }


})();
