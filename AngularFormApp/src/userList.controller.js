(function(){
    angular.module('angApp')
            .controller('userListCntrl',userListCntrl);
    userListCntrl.$inject=['$scope', 'userService'];
    function userListCntrl($scope,userService){
        $scope.details=userService.list();
    }        
})();
