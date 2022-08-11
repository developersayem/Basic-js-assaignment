//CONVERT RADIANS TO DEGREES

function radianToDegree(radian) {
    let pi = Math.PI;
    let calCulate = (180 / pi) * radian;
    let degFixed = calCulate.toFixed(2);
    let deg = parseFloat(degFixed);
    return deg;
}
console.log(radianToDegree(102));

//CAHCK  IS  IT JAVASCRIPT FILLE

function isJavaScriptFile(filename) {
    let name = filename;
    let newName = name.slice(-2);
    if (newName === "js") {
        return true;
    } else {
        return false;
    }
}
console.log(isJavaScriptFile("main.html"));