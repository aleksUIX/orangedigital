
$(function() {
	$('a').on('click', function() {
		return false;
	});
});

function calculator(arg1, arg2, op) {
	arg1 = parseInt(arg1);
	arg2 = parseInt(arg2);
	
	switch (op) {
		case "sum":
			return arg1 + arg2;
		case "sub":
			return arg1 - arg2;
		case "div":
			return Math.round((arg1 / arg2)*100)/100;
		case "mul":
			return arg1 * arg2;
		default:
			return "Error";
	}
}

function CalculatorController($scope) {
	$scope.arg1 = 0;
	$scope.arg2 = 0;
	$scope.operator = {
		label: 'sum',
		symbol: '+'
	};
	$scope.result = 0;
	$scope.inputValidationClass = '';
	
	$scope.operatorClick = function(operator, symbol) {
		$scope.operator.label = operator;
		$scope.operator.symbol = symbol;
	}
	
	$scope.$watch('arg1+arg2+operator.label', function() {
		$scope.result = calculator($scope.arg1, $scope.arg2, $scope.operator.label);
		if (isNaN(Number($scope.arg1))) {
			$scope.arg1 = 0;
		}
		if (isNaN(Number($scope.arg2))) {
			$scope.arg2 = 0;
		}
	});
}