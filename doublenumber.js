var doubleNumber = angular.module('doubleNumber',[]);

doubleNumber.controller('doubleIt',['$scope',function($scope){
	$scope.double = function(value){ return value*2; };
}]);