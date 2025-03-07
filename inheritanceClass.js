class Vehical{
  constructor(name, price){
    this.name = name;
    this.price = price;
  }
  move(){
    console.log("this can move")
  }
}

class Bus extends Vehical{
  constructor(name, price, seat){
    super(name, price);
    this.seat = seat;
  }
  route(){
    console.log("dhaka to cox")
  }
}

const hanif = new Bus("hanif", 34009, 40);
console.log(hanif);

class Track extends Vehical{
  constructor(name,price,load){
  super(name,price);
  this.load = load;

  }
}
const ton = new Track('ton', 45666, "50 ton");
console.log(ton);