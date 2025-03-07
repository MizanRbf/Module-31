// for each not return just show in console

const products = [
{id: 1, name: "iphone", color: "black", price: 1200, brand: "apple"},
{id: 2, name: "xiami", color: "red", price: 500, brand: "xiami"},
{id: 3, name: "realme", color: "green", price: 400, brand: "realme"},
{id: 4, name: "redmi", color: "white", price: 1200, brand: "xiami"},
{id: 5, name: "sam", color: "white", price: 600, brand: "samsung"},
]

products.forEach(product => {
  if(product.color === "white"){
    // console.log(product);
  }
})

// Filter return new array by condition

const newProduct = products.filter(product => product.price > 1000);
console.log(newProduct);

// find return first single object not works in next element
const product2 = products.find(p => p.id === 2);
console.log(product2);