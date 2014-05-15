function calculator(arg1, arg2, op) {
	arg1 = parseInt(arg1);
	arg2 = parseInt(arg2);
	
	switch (op) {
		case "sum":
			return arg1 + arg2;
		case "sub":
			return arg1 - arg2;
		case "div":
			return arg1 / arg2;
		case "mul":
			return arg1 * arg2;
		default:
			return "Error";
	}
}