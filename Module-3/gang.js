
function populateListProductChoices(category, org, slct2) {
    var s1 = document.getElementById(category);

	var radio = document.getElementsByName(org)
	var organicValue
	for (var i = 0, length = radio.length; i < length; i++) {
		if (radio[i].checked) {
			organicValue = radio[i].value
			break
		}
	}
	
    var s2 = document.getElementById(slct2);

	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
    s2.innerHTML = "";
		
	// obtain a reduced list of products based on restrictions
    var optionArray = restrictListProducts(products, s1.value, organicValue) ;
	
	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>
		
	for (i = 0; i < optionArray.length; i++) {
			
		var productName = optionArray[i].name;
		var productPrice = optionArray[i].price;
	
		// create the checkbox and add in HTML DOM
		var box = document.createElement("div")
		box.className="productbox"
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.id = optionArray[i].price;
		checkbox.value = productName;
		var smallbox = document.createElement("div")
		smallbox.className="labelbox"

		smallbox.appendChild(checkbox);
		box.appendChild(smallbox);
		
		// create a label for the checkbox, and also add in HTML DOM
		var label = document.createElement('label')
		label.htmlFor = productName;
		label.appendChild(document.createTextNode(productName));
		var paragraph = document.createElement("p");
		paragraph.innerHTML = "$"+productPrice

		box.appendChild(label);
		box.appendChild(paragraph)
		s2.appendChild(box);
		
		// create a breakline node and add in HTML DOM
		s2.appendChild(document.createElement("br"));    
	}
}
	
// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems(){
	
	var ele = document.getElementsByName("product");
	//console.log(ele)
	var chosenProducts = [];
	
	var c = document.getElementById('displayCart');
	c.innerHTML = "";
	
	// build list of selected item
	var para = document.createElement("P");
	
	para.appendChild(document.createElement("br"));

	arr = [];
	for (i = 0; i < ele.length; i++) {
		//console.log(ele[i])
		if (ele[i].checked){
			console.log(ele[i])
			arr.push(ele[i])
		}
	}

	console.log(arr)
	for (var i = arr.length; i>=0; i--){
		for(var j = 1; j<=i; j++){
		  if(arr[j-1]>arr[j]){
			  var temp = arr[j-1];
			  arr[j-1] = arr[j];
			  arr[j] = temp;
		   }
		}
	}

	//console.log(arr)


	for (i = 0; i < ele.length; i++) { 
		//console.log(ele[i])
		if (ele[i].checked) {
			var box = document.createElement("div")
			var anotherpara = document.createElement("P");
			box.className="anotherproductbox"
			anotherpara.appendChild(document.createTextNode(ele[i].value));
			anotherpara.appendChild(document.createTextNode(" $"+ele[i].id));
			anotherpara.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].value);
			box.appendChild(anotherpara)
			c.appendChild(box)
		}
	}
		
	// add paragraph and total price
	c.appendChild(para);
	c.appendChild(document.createTextNode("Total Price is $" + getTotalPrice(chosenProducts)));
		
}

// // document.getElementById("gang").click();


function loadDelivery(){
	document.getElementById("delivery").innerHTML = "";
	text = '<p class="boldit"> Delivery Info</p>';
	text = text + '<label>Street Name and Num</label><br> <input type="text"><br><br> <label>City:</label><br> <input type="text" ><br><br> <p>Day and Time of Day preferred </p><input type="text" ><br><br>';
	
	document.getElementById("delivery").innerHTML = text;


}

function loadPickup(){

	document.getElementById("delivery").innerHTML = "";
	text = '<p class="boldit"> Pickup Info</p>';
	text = text + '<p>Date and time for pickup</p> <input type="text" ><br><br>';
	
	document.getElementById("delivery").innerHTML = text;


}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}