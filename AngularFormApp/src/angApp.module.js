(function(){
	angular.module('angApp',['ngRoute'])
			.config('angConfig')
			.run();
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
	function run(){
		console.log("Hi from run!!");
	}		
})();