// PROBLEM--1 --------------------------> CONVERT RADIANS TO DEGREES

function radianToDegree(radian) {
  let pi = Math.PI;
  let calCulate = (180 / pi) * radian;
  let degFixed = calCulate.toFixed(2);
  let deg = parseFloat(degFixed);
  return deg;
}
// console.log(radianToDegree(102));

//PROBLEM--2 ------------------------------> CAHCK  IS  IT JAVASCRIPT FILLE

function isJavaScriptFile(filename) {
  let name = filename;
  let newName = name.slice(-3);
  if (newName === ".js") {
    return true;
  } else {
    return false;
  }
}
// console.log(isJavaScriptFile("mainjs"));
// console.log(isJavaScriptFile("main.js"));

//PROBLEM--3 ------------------------------> FIND OIL PIRCE

function oilPrice(diesel, petrol, octane) {
  let dieselPrice = diesel * 114;
  let petrolPrice = petrol * 130;
  let octanePrice = octane * 135;
  let totalPrice = dieselPrice + petrolPrice + octanePrice;
  return totalPrice;
}

// console.log(oilPrice(10, 1, 1));

//PROBLEM--4 ------------------------------>publicBusFare

function publicBusFare(people) {
  let leftForMiroBus = people % 50;
  let leftForPublicBus = leftForMiroBus % 11;
  let publicBusFare = leftForPublicBus * 250;
  return publicBusFare;
}
// console.log(publicBusFare(117));
// console.log(publicBusFare(235));

// PROBLEM--2------------------------->
function isBestFriend(arg1, arg2) {
  if (arg1.name === arg2.friend && arg2.name === arg1.friend) {
    return true;
  } else {
    return false;
  }
}
// console.log(
//   isBestFriend(
//     { name: "rohim", friend: "korim" },
//     { name: "korim", friend: "rohim" }
//   )
// );
