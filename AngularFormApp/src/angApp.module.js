(function(){
	angular.module('angApp',['ngRoute'])
			.config(angConfig)
			.run(angRun);
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
	function angRun(){
		console.log("Hi from run!!");
	}		
})();