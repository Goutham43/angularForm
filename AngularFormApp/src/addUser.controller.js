(function(){
    angular.module('angApp')
            .controller('addUserCntrl',addUserCntrl);
    
    addUserCntrl.$inject=['$scope', 'userService'];
    function addUserCntrl($scope,userService){
        $scope.submit=function(){
            userService.update($scope.detail);
            $scope.detail={};
        }
    }        
})();
