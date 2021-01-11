// Business Logic
$(document).ready(function)() {
  this.size = size;
  this.crust = crust;
  this.toppings = toppings;
}

var total = 0;
var order = [];

Pizza.prototype.mySizePrice = function {
  if(this.size === "Small") {
    return 500;
  } else {
    if(this.size === "Medium") {
      return 800;
    } else {
      if(this.size === "Large") {
        return 1000;
      } else {
        if(this.size === "Extra-large") {
          return 1200;
        }
      }
    }
  }
}











// User Interface Logic


