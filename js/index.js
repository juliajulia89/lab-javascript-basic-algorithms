// Iteration 1: Names and Input
//
let hacker1 = "Julia";
console.log(`The driver's name is ${hacker1}.`);
let hacker2 = "Marta";
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!.`
  );
}
// Iteration 3: Loops
//3.1
let hacker1Upper = "";
for (let i = 0; i < hacker1.length; i++) {
  hacker1Upper += hacker1[i].toUpperCase() + " ";
}
console.log(hacker1Upper);
//3.2
let hacker2Reverse = "";
for (let i = 0; i > hacker2.length; i--) {
  hacker2Reverse += [hacker2[i]];
}
console.log(hacker2.reverse);
//I know I didnt get it right, dont know what's missing

//3.3
if (hacker1.length > hacker2.length) {
  for (let i = 0; i < hacker1.length; i++) {
    if (hacker1 === hacker2) {
      console.log("What?! You both have the same name!");
      break;
    } else if (hacker1.charCodeAt(i) < hacker2.charCodeAt(i)) {
      console.log("The driver's name goes first");
      break;
    } else if (hacker1.charCodeAt(i) > hacker2.charCodeAt(i)) {
      console.log("The navigator's name goes first");
      break;
    } else if (hacker1.charCodeAt(i) === hacker2.charCodeAt(i)) {
      continue;
    } else {
      console.log("The navigator's name goes first");
      break;
    }
  }
} else {
  for (let i = 0; i < hacker2.length; i++) {
    if (hacker1 === hacker2) {
      console.log("What?! You both have the same name!");
      break;
    } else if (hacker1.charCodeAt(i) < hacker2.charCodeAt(i)) {
      console.log("The driver's name goes first");
      break;
    } else if (hacker1.charCodeAt(i) > hacker2.charCodeAt(i)) {
      console.log("The navigator's name goes first");
      break;
    } else if (hacker1.charCodeAt(i) === hacker2.charCodeAt(i)) {
      continue;
    } else {
      console.log("The driver's name goes first");
      break;
    }
  }
}
// bonus 1
let ipsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
textString = ipsum.split("");
numberOfWords = textString.length;
console.log(`The number of words is: ${numberOfWords}.`);
let numberOfEt = 0;
for (let i = 0; i < textString.length; i++) {
  if (textString[i] === "et") {
    numberOfEt++;
  }
}
console.log(`The number of "et" is: ${numberOfEt}.`);
