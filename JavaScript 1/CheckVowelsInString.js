function checkVowels(str) {
    let count = 0;
    for (let char of str) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u" || char === "A" || char === "E" || char === "I" || char === "O" || char === "U") {
            count++;
        }
    }
    console.log(count);
}
checkVowels("Jai Shree Ram");

let arrowfunc = (str) => {
    let count = 0;
    for (let char of str) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u" || char === "A" || char === "E" || char === "I" || char === "O" || char === "U") {
            count++;
        }
    }
    console.log(count);
}
arrowfunc("Jai Shree Ram");