class Product	{

	Constructor()	{
		this.itemName = "";
		this.shortDescription = "";
		this.longDescription = "";
		this.retailPrice = 0.00;
		this.discount = 0.00;
		this.salePrice = retailPrice * (1 - disconnect);
		this.quantity = 0;
		this.subtotal = salePrice;		
	}//End of default constructor for class Product
	
	Constructor(initName, initShort, initLong, initRetail, initDiscount)	{
		this.itemName = initName;
		this.shortDescription = initShort;
		this.longDescription = initLong;
		this.retailPrice = initRetail;
		this.discount = initDiscount;
		this.salePrice = retailPrice * (1 - disconnect);
		this.quantity = 0;
		this.subtotal = salePrice;

	//Getters
	//Setters		
	}//End of overloaded constructor
	
}//End of class Product

//Instances

//kiwi
var kiwi = new Product("Kiwi", "Locally-sourced and fresh, never frozen", "Kiwis are a nutrient-dense food, meaning that they are high in nutrients and low in calories. The possible health benefits of consuming kiwis include maintaining healthy skin tone and texture, reducing blood pressure, and preventing heart disease and stroke.", 1.20, 0.33);
document.getElementById("kiwiName").innerHTML = kiwi.itemName;

