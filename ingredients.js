const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

let i = 0;
// while loop for ingredients
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}

// for loop for ingredients
for (let j = 0; j < ingredients.length; j++) {
  console.log(ingredients[j]);
}

// reverse print
for (let k = ingredients.length -1; k > 0; k--) {
  console.log(ingredients[k]);
}