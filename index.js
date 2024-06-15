const express= require("express");


const app = express();

// Endpoint 1: Calculate the total price of items in the cart.
// Create an endpoint that takes a newItemPrice as a query parameter and returns total cart value.

app.get("/cart-total",(req,res)=>{
  const newItemPrice = parseFloat(req.query.newItemPrice);
  const cartTotalto  = parseFloat(req.query.cartTotal);

  const total = newItemPrice + cartTotalto;

  res.send(`${total}`);
  
});

// Endpoint 2 : Apply a discount based on membership status.
// Create an endpoint that takes a cartTotal as a query parameter and returns final price after applying the discount.

app.get("/membership-discount", (req,res)=>{
  const cartTotal  = parseFloat(req.query.cartTotal);
  const isMember  = req.query.isMember;

  let result = isMember === "true" ? cartTotal * 0.9 : cartTotal; 

  res.send(result.toString());
});

// Endpoint 3 : Calculate tax on the cart total.
// Create an endpoint that takes a cartTotal as a query parameter and returns the final cart total after applying the tax rate.

app.get("/calculate-tax", (req, res)=>{
  const cartTotal = parseFloat(req.query.cartTotal);

  const finalPrice= cartTotal * (5/100);

  res.send(finalPrice.toString());
});

// Endpoint 4 : Estimate delivery time based on shipping method.
// Create an endpoint that takes a shippingMethod as a query parameter and returns the number of days for delivering the package.

app.get("/estimate-delivery", (req, res)=>{
  const shippingMethod  = req.query.shippingMethod.toLowerCase();
  const distance   = parseFloat(req.query.distance );

   const result = shippingMethod === "express" ? distance/100 : distance/50;

    res.send(result.toString());
  
});

// Endpoint 5 : Calculate the shipping cost based on weight and distance.
// Create an endpoint that takes weight and distance as query parameters and returns the number of days for delivering the package.

app.get("/shipping-cost", (req, res)=>{
  const weight = parseFloat(req.query.weight);
  const distance = parseFloat(req.query.distance);

  const result = (distance/100)* weight;

  res.send(result.toString());
});

// Endpoint 6 : Calculate loyalty points earned from a purchase.
// Create an endpoint that takes purchaseAmount as query parameters and returns the number of days for delivering the package.

app.get("/loyalty-points", (req, res)=>{
  const purchaseAmount = parseFloat(req.query.purchaseAmount);

  const result = purchaseAmount * 2;

  res.send(result.toString());
});

app.get("/",(req,res)=>{
  res.send("I Am Live");
});


app.listen(3000,()=>{
  console.log("server is running on port 3000");
});