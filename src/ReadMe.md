# 1. Write the correct answer from the following options and give an explanation (2-5 lines).
let greeting;
greetign = {};
console.log(greetign);

### Ans : Ans is Empty Object.Because when javascript read code from up to bottom then its see we decalare a variable but not assisgn any value then second line its see we assign a value in decalare variable then its print the empty object


# 2. Write the correct answer from the following options and give an explanation (2-5 lines).
function sum(a, b) {
  return a + b;
}

sum(1, "2");

### Ans : Ans is "12" because we know about the javascript type coarsion behaviour.when javascript saw we want to add a number to string then its change the number type to string and concatinate them.


#  3. Write the correct answer from the following options and give an explanation (2-5 lines).
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);

### Ans : Ans is A, beacuse here in info Object we create a property useing food array valye.here we just useing the foor array first value not its reference so that why in this if we change th info object nothing change here because both are refering different address

# 4. Write the correct answer from the following options and give an explanation (2-5 lines).
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());

### Ans : Ans is B,because in Our function its receive a parameter but when we call the function we did not provide any argument for this parametr thats why its return "Hi there",undifined


# 5. Write the correct answer from the following options and give an explanation (2-5 lines).
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);


### Ans : Ans is C,because its first iteration when if condition check the number its saw the first number is 0 so in javaScript we know that in javaScript 0 is falsy value thats why its not increment the count value and next iteration when its got truthy value and its increment the count value



# GitHub Link : https://github.com/123Somrat/pets_show

# Live Demo Link : https://pets-show-8740f.web.app