// Exercise #1: Food Order

// Start coding here

const FoodOrder = {
  orderNumber: "A0234",
  address: "Bangkok",
  paymentType: "Cash",
  totalPrice: 4500,
  restaurantName: "MK",
};

(FoodOrder.totalPrice = 500),
  (FoodOrder.paymentType = "Credit Card"),
  console.log(FoodOrder);
