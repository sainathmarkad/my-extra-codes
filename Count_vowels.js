
// Count the number of vowels, present inside nm


// Method 1


let nm = "revannath";

let count = 0;

for (let i = 0; i < nm.length; i++) {

    if (nm[i] == 'a' || nm[i] == 'e' || nm[i] == 'i' || nm[i] == 'o' || nm[i] == 'u') {
        count++;
    }
}
console.log(count);


// Method 2


function count(nm) {
    let count = 0;
    for (let i = 0; i < nm.length; i++) {
        if (nm[i] == 'a' || nm[i] == 'e' || nm[i] == 'i' || nm[i] == 'o' || nm[i] == 'u') {
            count++;
        }

    }
    //  console.log(count);
    return count;
}
console.log(count("revannath"));



// Method 3

let count = (nm) => {
    let count = 0;
    for (let i = 0; i < nm.length; i++) {
        if (nm[i] == 'a' || nm[i] == 'e' || nm[i] == 'i' || nm[i] == 'o' || nm[i] == 'u') {
            count++;
        }

    }

    return count
}
console.log(count("revannath"));
