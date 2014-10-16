// String literals used for the operators
ADD = "+";
SUB = "-";
MULT = "*";

// The following holds the values needed for calculation. 
// The first is the first operand, the next is the second operator, and the third is the operator. 
operation = [0, 0, ""];

// Used to control which operand is to be targeted
operand = 0;

// Wait for the document to load
$(document).ready(function() {
	
	display = $("#display");			// Saves some redundancy
	display.text(0);
	
	$(".digit").click(function() {
		
		// Update the current operand in the operation array
		digit = parseInt($(this).text(), 10);
		operation[operand] *= 10;
		operation[operand] += digit;
		
		// Display the current operand
		display.text(operation[operand]);
	});
	
	$(".operator").click(function() {
		
		// Update the operator in the operation array
		operator = $(this).text();
		operation[2] = operator;
		
		// Change the current operand to the next
		operand++;
		operand = operand % 2;
		
		// Display the operator
		display.text(operation[2]);
	});
	
	$("#enter").click(function() {
		
		// Evaluate the operation
		answer = 0;
		
		switch(operation[2]) {
			
			case ADD:	
				result = operation[0] + operation[1];
				break;
			
			case SUB:
				result = operation[0] - operation[1];
				break;
			
			case MULT:
				result = operation[0] * operation[1];
				break;
			
			default:
				result = 0;
		}
		
		// Display the result
		display.text(result);
		
		// Reset the values
		operation = [0, 0, ""];
		operand = 0;
	});
}); 
