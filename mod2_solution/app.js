(function () {
    angular.module("ShoppingListCheckOff",[])
    .controller("ToBuyController",ToBuyController)
    .controller("AlreadyBoughtController",AlreadyBoughtController)
    .service("ShoppingListCheckOffService",ShoppingListCheckOffService)

    function ToBuyController(ShoppingListCheckOffService,$scope)
    {
        var vm = this;
        vm.buy_list=ShoppingListCheckOffService.getToBuyList();;
        vm.buyItem = function(index){
            ShoppingListCheckOffService.buyItem(index);
            console.log($scope);
        }
    }
    function AlreadyBoughtController(ShoppingListCheckOffService)
    {
        var vm=this;
        vm.bought_list = ShoppingListCheckOffService.getBoughtList();
    }
    function ShoppingListCheckOffService()
    {
        var buy_list=[{"name":"Cookies","quantity":3},
                        {"name":"SoftDrink","quantity":10},
                        {"name":"Chips","quantity":5},
                        {"name":"Pizza","quantity":2},
                        {"name":"Roll","quantity":3},
                        ];
        var bought_list=[];
        var vm=this;
        vm.buyItem = function(index)
        {
            var item = buy_list[index];
            buy_list.splice(index,1);
            bought_list.push(item);
        }
        vm.getToBuyList = function()
        {
            return buy_list;
        }

        vm.getBoughtList = function()
        {
            return bought_list;
        }
    }
})();
