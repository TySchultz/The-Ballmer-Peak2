var mem = 0; // stored value
var numberStr_A="0";
var numberStr_B ="";
decimalPoint=true;
function addDigit(digit) {
	if(numberStr_A.length<31)
	{
		if(numberStr_A=="0")
		{
		numberStr_A=digit;
		}
		else
		{
		numberStr_A=numberStr_A.concat("",digit);
		}
		display();
	}
}
function addOperator(opToAdd){
	if (isOperator() == -1  && numberStr_A.length<31)
    {
      numberStr_A=numberStr_A.concat(opToAdd);
    }
    display();
}
function squareRoot(){
    // if it there is not an operator before
    if (isOperator() == -1)
    {
      numberStr_B = Math.pow(eval(numberStr_A), 0.5);
      display();
    }
}
function addPoint(){
	if(decimalPoint)
	{
	numberStr_A=numberStr_A.concat("",".");
	decimalPoint=!decimalPoint;
	display();
	}
}
function clearDisplay(){
	numberStr_A="0";
	numberStr_B="";
	decimalPoint=true;
	display();
}
function memPlus()
{
    mem += numberStr_B;
}
function memStore()
{
    mem = numberStr_B;
}
function clearMem()
{
    mem = 0;
}
function memRecall()
{
    clearDisplay();
    numberStr_A = ""; // get rid of the inital 0
    numberStr_A += mem;
    display();
}
  // function returns 0 if it is an operator and returns -1 if it is not
function isOperator(){
  	var isOp = 0;
    var lengthStr = numberStr_A.length;
    // if the char before is an operator, return -1
    if (numberStr_A.charAt(lengthStr-1) != "+" && numberStr_A.charAt(lengthStr-1) != "-" && numberStr_A.charAt(lengthStr-1) != "/" && numberStr_A.charAt(lengthStr-1) != "*" )
    {
      isOp = -1;
    }
    return isOp;
}
function display()
{
	document.getElementById("display_A").innerHTML = numberStr_A;
	document.getElementById("display_B").innerHTML = numberStr_B;
}
function evalStr()
{
	numberStr_B = eval(numberStr_A);
    display();
}
