class product{

  constructor(name, price, brand){
   this.name = name;
   this.price = price;
   this.brandName = brand;
  }

  details(){
    console.log('amar product')
  }
}

const iphone = new product("iphone", "2355", "Apple");
console.log(iphone);