//function with-out arguments
function gstcalculation(){
	var price = 200;
	var qty = 4;
	var gst = 18;
	var cost = price * qty;
	var totalcost = cost + (cost * 18 / 100);
	console.log(totalcost);
}
/*gstcalculation();
gstcalculation();
gstcalculation();
gstcalculation();
gstcalculation();
gstcalculation();
gstcalculation();*/

//function with arguments
function gstcalusingarg(price,qty,gst){
	var cost = price * qty;
	var totalcost = cost + (cost * gst / 100);
	console.log(totalcost);

}
var p, q, g;
p = prompt("Please enter price");
q = prompt("Please enter no of items");
g = prompt('Plese enter GST % ');
/*gstcalusingarg(p,q,g);
gstcalusingarg(p,q);*/

//function with default arguments

function gstcalDefaultArg(price,qty,gst=18){
	var cost = price * qty;
	var totalcost = cost + (cost * gst / 100);
	return totalcost;

}
var result = gstcalDefaultArg(p,q);
console.log(result);
/*gstcalDefaultArg(p,q,g);*/

