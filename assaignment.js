//CONVERT RADIANS TO DEGREES

function radianToDegree(radian) {
    let pi = Math.PI;
    let calCulate = (180 / pi) * radian;
    let degFixed = calCulate.toFixed(2);
    let deg = parseFloat(degFixed);
    return deg;
}
console.log(radianToDegree(102));