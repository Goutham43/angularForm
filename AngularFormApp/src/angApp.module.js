(function(){
	angular.module('angApp')
			.config('angConfig');
	angConfig.$inject=['$routeProvider'];

	function angConfig($routeProvider){
		
		$routeProvider
			.when('/addUser',{
				templateUrl:'addUser.html',
				controller:'addUserCntrl'
			})
			.when('/userList',{
				templateUrl:'userList.html',
				controller:'userListCntrl'
			})
	}		
})();