
//====================================================================================

ajsDTModule.controller('ajsDTController', function ($scope) {
	var employees = [
                  	{name  : 'Jaya Prakash', lastName  : 'Manne', gender  : 'Male', dateOfBirth: new Date("July 15, 1980"), salary : 55000.58},
                  	{name  : 'Radha Devi', lastName  : 'Manne', gender  : 'Female', dateOfBirth: new Date("February 03, 1983"), salary : 30000},
                  	{name  : 'Cherish Keshto', lastName  : 'Manne', gender  : 'Male', dateOfBirth: new Date("April 29, 2009"), salary : 5000}, 
                  	{name  : 'Udvitha Keshto', lastName  : 'Manne', gender  : 'Female', dateOfBirth: new Date("August 11, 2012"), salary : 3000} 
                 ];
	$scope.employees = employees;
	$scope.sortColumn = 'name';
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