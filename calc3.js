var number_array = ['', ''];
var number_index = 0;
var operator = '';
var result = null;

//2nd set of numbers and operators.
var entry_array = [];
var valid_operators = ['+', '-', '*', '/', '^'];
// 2nd set of number array

function add_number(digit) {
	if (result !== null) {
		result = null;
		document.querySelector('#result').value = '';
	} else if (typeof entry_array[number_index] == "undefined") {
		entry_array[number_index] = '';
	}
	document.querySelector('#input').value += digit;
	//number_array[number_index] += digit;
	entry_array[number_index] += digit;
	//	alert("u pressed" + digit);

}

function add_operator(input_operator) {
	if (result !== null) {
		/*
		number_array[0] = result;
		document.querySelector('#input').value =result;
		 */
		document.querySelector('#input').value = result;
		document.querySelector('#result').value = '';
		number_array[0] = result;
		entry_array = [];
		entry_array[0] = result;
		number_index = 0;
	}
	if (typeof entry_array[number_index] == valid_operators) {

		alert("pop?" + entry_array);
		entry_array.pop();
	}
	document.querySelector('#input').value += input_operator;
	//	operator = input_operator;
	number_index++;
	entry_array[number_index] = input_operator;
	number_index++;
}

function add_numbers(num1, num2) {
	num1 = parseFloat(num1);
	num2 = parseFloat(num2);
	return num1 + num2;

}
function subtract_numbers(num1, num2) {
	num1 = parseFloat(num1);
	num2 = parseFloat(num2);
	return num1 - num2;
}
function multiply_numbers(num1, num2) {
	num1 = parseFloat(num1);
	num2 = parseFloat(num2);
	return num1 * num2;
}
function divide_numbers(num1, num2) {
	num1 = parseFloat(num1);
	num2 = parseFloat(num2);
	if (num2 != 0) {
		return num1 / num2;
	} else {
		alert("Cannot devide by 0!");
		return false;
	}
}

function power_numbers(num1, num2) {
	num1 = parseFloat(num1);
	num2 = parseFloat(num2);
	return Math.pow(num1, num2);
}

function process_equation() {
	var num_index = 0;
	for (var i = 0; i < entry_array.length; i++) {
		if (!isNaN(parseFloat(entry_array[i]))) {
			number_array[num_index] = entry_array[i];
			console.log("number is entered");
			console.log(number_array);
			if ((num_index == 1) && (operator != null)) {
				console.log("calling calculate them");
				calculate();
				num_index = 0;
			}
		} else if (valid_operators.indexOf(entry_array[i]) !== -1) {
			if ((num_index == 0) && (result != null)) {
				console.log("operator pressed");
				number_array[0] = result;
			}
			operator = entry_array[i];
			num_index++;
		} else {
			alert("Something went wrong in process equation()");
		}
	}
}

function calculate() {
	switch (operator) {
	case '+':
		result = add_numbers(parseFloat(number_array[0]), parseFloat(number_array[1]));
		break;
	case '-':
		result = subtract_numbers(parseFloat(number_array[0]), parseFloat(number_array[1]));
		break;
	case '*':
		result = multiply_numbers(parseFloat(number_array[0]), parseFloat(number_array[1]));
		break;
	case '/':
		result = divide_numbers(parseFloat(number_array[0]), parseFloat(number_array[1]));
		break;
	case '^':
		//		console.log("power");
		result = power_numbers(parseFloat(number_array[0]), parseFloat(number_array[1]));
		break;
	default:
		alert("something went wrong in switch");
		break;
	}
	//clear_fields();
	operator = null;
	number_array = ['', ''];
	number_index = 0;
	document.querySelector("#result").value = result;
}

function clear_fields() {
	document.querySelector("#input").value = '';
	number_array = ['', ''];
	number_index = 0;
	entry_array = [];
}

function reset_total() {
	clear_fields();
	//	document.querySelector("#result").value = '';
	location.reload(true);
}

function negative_operator() {
	var inputLength = entry_array.length;
	entry_array[inputLength - 1] = entry_array[inputLength - 1] * (-1);
	document.querySelector('#input').value = entry_array.join('');

}
