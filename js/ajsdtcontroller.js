
//====================================================================================

ajsDTModule.controller('ajsDTController', function ($scope, $http) {
	$http.get('https://jsonplaceholder.typicode.com/users')
		.then(function (response) {
			$scope.employees = response.data;
		});
	
	$scope.sortColumn = 'id';
	$scope.reverseSort = false;
	
	$scope.sortData = function (column) {
		$scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false;
		$scope.sortColumn = column;
	};
	
	$scope.getSortClass = function (column) {
		if($scope.sortColumn == column) {
			return $scope.reverseSort ? 'arrow_down' : 'arrow_up';
		}
		return '';
	};
});

//====================================================================================
