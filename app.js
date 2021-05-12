

let friends = ["Chris", "Mark", "Cameron", "Erskine", "James"];
let text = "";
let i;
let j;

// for (let i = 0; i < friends.length; i++) {

//     if (friends[i] === "Chris") {
//         alert("This worked");
//         continue;
//     }

// }


loop1:
for (i = 0; i < friends.length; i++) {
    
    loop2:
    for (j = 99; j >= 0; j--) {
        let minusOne = j - 1;
        let name = friends[i];
        if (j === 2) {
            console.log(j + ' lines of code in the file, ' + j + ' lines of code; ' + name + ' strikes one out, clears it all out, ' + minusOne + ' line of code in the file.');
        }
        else if (j === 1) {
            let minusOne = 'no more';
            console.log(j + ' line of code in the file, ' + j + ' line of code; ' + name + ' strikes one out, clears it all out, ' + minusOne + ' lines of code in the file.');
        }
        else if (j === 0) {
            let i = 'No more';
            console.log(j + ' lines of code in the file, ' + j + ' lines of code; ' + name + ' types some more, writes some code, ' + minusOne + ' lines of code in the file.');
        }
        else {
            console.log(j + ' lines of code in the file, ' + j + ' lines of code; ' + name + ' strikes one out, clears it all out, ' + minusOne + ' lines of code in the file.');
        }
    }

}