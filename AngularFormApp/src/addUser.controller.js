(function(){
    angular.module('angApp')
            .controller('addUserCntrl',addUserCntrl);

    function addUserCntrl($scope,userService){
        $scope.myButton=function(){
            userService.update($scope.detail);
            $scope.detail={};
        }
    }        
})();
