
function Add(){
/*var x, y;
var x = 10, y = 20;
var z = x + y;
console.log(z);
var FirstName = 10;
var LastName = 20; -------Hardcoded Values*/
var a = parseInt(document.getElementById('num1').value);
var b = parseInt(document.getElementById('num2').value);
var z = parseInt(a + b);
document.getElementById('add').innerHTML = 'Addition of Number1 and Number2 is: ' + z;
document.getElementById('add').style.color = 'Red';
document.getElementById('add').style.fontSize = '50px';
}
