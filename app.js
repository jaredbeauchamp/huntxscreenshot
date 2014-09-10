var app = angular.module("sampleApp", ["firebase"]);

app.controller("SampleCtrl", function($http, $q, $scope) {
	$scope.products = null;
	$scope.getProducts = function(){
		return $http({
			method: 'GET', 
			url: 'http://thumbhunt.herokuapp.com/data'			
		}).then(function(ret){
			$scope.products = ret.data.posts;
		})
	};
	$scope.getProducts();
	$scope.quantity = 99;
	
});


