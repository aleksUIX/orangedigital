test("calculator", function() {
	equal(calculator(1,1,"sum"), 2, "addition");
	equal(calculator(2,1,"sub"), 1, "subtraction");
	equal(calculator(10,5,"div"), 2, "division");
	equal(calculator(2,5,"mul"), 10, "multiplication");
	
	equal(calculator("1","3","sum"), 4, "string arguments addition");
	equal(calculator("1",1,"asd"), "Error", "bad operand");
});