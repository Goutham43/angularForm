(function(){
    angular.module('angApp')
            .controller('userListCntrl',userListCntrl);

    function userListCntrl($scope,userService){
        $scope.details=userService.list();
    }        
})();
