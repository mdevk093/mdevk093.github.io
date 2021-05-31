var products = [
    {
        name: "Brocoli",
        lactose: true,
        nutfree:true,
        LacAndNut:"",
        price:1.99,
        organic:true,
    },
    {
        name: "Banana",
        lactose: false,
        nutfree:true,
        LacAndNut:false,
        price:2.49,
        organic:true,
    },
    {
        name: "Bread",
        lactose: false,
        nutfree:true,
        LacAndNut:true,
        price:2.99,
        organic:false,
    },
    {
        name: "Cucumbers",
        lactose: true,
        nutfree:true,
        LacAndNut:true,
        price:2.99,
        organic:true,
    },
    {
        name: "Eggs",
        lactose: false,
        nutfree:true,
        LacAndNut:true,
        price:3.49,
        organic:true,
    },
    {
        name: "Milk",
        lactose: true,
        nutfree:true,
        LacAndNut:true,
        price:4.99,
        organic:true,
    },
    {
        name: "Bacon",
        lactose: true,
        nutfree:true,
        LacAndNut:true,
        price:4.99,
        organic:false,
    },
    {
        name: "Lactose Free Milk",
        lactose: true ,
        nutfree:false,
        LacAndNut:false,
        price:5.00,
        organic:false,
    },
    {
        name: "Trail Mix",
        lactose: true,
        nutfree:false,
        LacAndNut:false,
        price:5.19,
        organic:false,
    },
    {
        name: "Box of Peanuts",
        lactose: true,
        nutfree:false,
        LacAndNut:false,
        price:5.45,
        organic:false,
    },
       
    
    {
        name: "Chicken Breast",
        lactose: true,
        nutfree:true,
        LacAndNut:true,
        price:5.80,
        organic:false,
    },
    {
        name: "Frozen pizza",
        lactose: false,
        nutfree:true,
        LacAndNut:false,
        price:5.99,
        organic:false,
    },
    {
        name: "Cheese",
        lactose: false,
        nutfree:true,
        LacAndNut:false,
        price:6.78,
        organic:true,
    },
    {
        name: "Ground Beef",
        lactose: false,
        nutfree:true,
        LacAndNut:false,
        price:7.44,
        organic:false,
    },
    
    {
        name: "Pork Chops",
        lactose: true,
        nutfree:true,
        LacAndNut:true,
        price:12.48,
        organic:false,
    },
          


];


function restrictListProducts(prods, restriction, organic) {
    var organicOrNot = (organic == "yes")
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Lactose") && (prods[i].lactose == true) && (prods[i].organic == organicOrNot)){
			product_names.push(prods[i]);
		}
		else if ((restriction == "NutFree") && (prods[i].nutfree == true) && (prods[i].organic == organicOrNot)){
			product_names.push(prods[i]);
		}
        else if ((restriction == "Both") && (prods[i].LacAndNut == true) && (prods[i].organic == organicOrNot)){
			product_names.push(prods[i]);
		}
		else if ((restriction == "None") && (prods[i].organic == organicOrNot)){
			product_names.push(prods[i]);
		}
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
