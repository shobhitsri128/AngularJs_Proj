(function(){
    angular.module('MenuApp')
    .controller('categoryController',categoryController);

    function categoryController(categoryList){
        var vm=this;
        vm.categoryListDescription = categoryList;
        console.log(categoryList);
    }
})();
