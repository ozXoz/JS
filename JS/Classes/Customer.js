/**
 * Creating classes:
 *
 * Class declaration: class Name {}
 * Class expression:  const Name = class {}
 */

 class Customer {
    constructor(
      // Defines parameters:
      name,
      color
    ) {
      // Define properties:
      this.name = name;
      this.color = color;
     
    }
    
  }
  
const customer1 = new Customer( "Onur", "grey" );
// FIRST WAY TO DISPLAY //
// const content =`
// <main>
// <article>
// <h1>${customer1}<h1>
// <ul>
//     <li>Name: ${customer1.name}</li>
//     <li>Color: ${customer1.color}</li>

// </ul>
// </article>


// </main>`
// ;

// SECOND WAY TO DISPLAY //

const content = "<h1>" + customer1.name + "</h1>";
document.body.innerHTML= content;
console.log("The customer1 object:", customer1);
console.log("The name value:", customer1.name);
console.log("The color value:", customer1.color);
  