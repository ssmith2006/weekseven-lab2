"use strict";

let tableBody = document.getElementById("cartTable-body");

// keyword declaring the variable. let variables can be reassigned and modified.
let products = [
  // objects = id, name, price, quantity. id is also the unique identifier of the product. The numbers and words behind the objects are called properties.
  { id: 1, name: "Echo Dot", price: 29.99, quantity: 1 },
  { id: 2, name: "Fire TV Stick", price: 39.99, quantity: 2 },
  { id: 3, name: "Kindle Paperwhite", price: 119.99, quantity: 1 },
  { id: 4, name: "Echo Show 5", price: 89.99, quantity: 0 },
  { id: 5, name: "Fire Tablet", price: 49.99, quantity: 3 },
  { id: 6, name: "Ring Video Doorbell", price: 99.99, quantity: 1 },
];

products.forEach((product) => { //array method to loop over the array// We are looping over 

  //template literal: this makes working with strings easier. allows the inclusion of expressions inside ${} (template literal substitution: will be replaced with what's inside) // the string inside the ` is HTML markup that will appear on the page.
  let row = ` 
      <tr>        
          <td>${product.id}</td>
          <td>${product.name}</td>
          <td>${product.price}</td>
          <td>${product.quantity}</td>
      </tr>
`;
tableBody.innerHTML += row; // += an assignment operator that adds the right-hand side to the left-hand then result back to the left-hand side
});

//function is a blockcode. can group things together. has inputs called parameters. declared using the function keyword. goes inside curly brackets. The code below is a function expression.
let totalInvoice = products.reduce((acc, curr) => {
  return acc + curr.price * curr.quantity; // had to calculate the total of each price and then multiply by the quantity (this is the most simplest formula I saw)
}, 0);

console.log(totalInvoice);
let total = document.getElementById("totalInvoice");
