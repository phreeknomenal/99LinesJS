// DOM Content Loader
document.addEventListener('DOMContentLoaded', function () {
    // Build container div, set div class, insert into body. 
    let container = document.createElement('div');
    container.className = 'container';
    document.body.appendChild(container);

    // Build sing button, set class, insert text.   
    let singButton = document.createElement('a');
    singButton.className = 'button';
    singButton.textContent = 'Sing!';

    // Insert button into container div.
    container.appendChild(singButton);

    
    // Insert second container
    let container2 = document.createElement('div');
    container2.className = 'container2';
    document.body.appendChild(container2);
    
    // Listen for sing button click.
    singButton.addEventListener('click', function () {
        // Build heading, insert text, insert into container  
        let singHeading = document.createElement('h1');
        singHeading.textContent = 'My Singing Friends';
    
        // Insert Heading into container
        document.body.appendChild(container2);
        container2.appendChild(singHeading);

        // Friends array
        let friends = ["Chris", "Mark", "Cameron", "Erskine", "James"];
        
        // Loops thru each value in the friends array.
        friends.forEach(element => { 
            // Build and set class for div.friends contanier and h3.
            let fcontain = document.createElement('div');
            fcontain.className = 'friends';
            let fheading = document.createElement('h3');
            fheading.innerText = element;          

            // Insert div.friends
            container2.appendChild(fcontain);
            // Insert h3 into div.friends
            fcontain.appendChild(fheading);

            // Run Song lines loop
            for (i = 99; i > 0; i--){
                // Build p element
                let p = document.createElement('p');
                // intialize songLines element.
                let songLines;
                // Set subtracting number & name element.
                let minusOne = i - 1;
                let name = element;
                
                // Checks conditions and inserts corresponding text.
                if (i === 2) {
                    songLines = document.createTextNode(i + ' lines of code in the file, ' + i + ' lines of code; ' + name + ' strikes one out, clears it all out, ' + minusOne + ' line of code in the file.');
                }
                else if (i === 1) {
                    let minusOne = 'no more';
                    songLines = document.createTextNode(i + ' line of code in the file, ' + i + ' line of code; ' + name + ' strikes one out, clears it all out, ' + minusOne + ' lines of code in the file.');
                }
                else if (i === 0) {
                    let i = 'No more';
                    songLines = document.createTextNode(i + ' lines of code in the file, ' + i.toLowerCase() + ' lines of code; ' + name + ' types some more, writes some code, 99 lines of code in the file.');
                }
                else {
                    songLines = document.createTextNode(i + ' lines of code in the file, ' + i + ' lines of code; ' + name + ' strikes one out, clears it all out, ' + minusOne + ' lines of code in the file.');
                }

                // put p text in p
                p.appendChild(songLines);
                // put p in div
                fcontain.appendChild(p);
            }
        });
    });






});



// Old 99 Lines Console Log Code (For Reference!)
// loop1:
// for (i = 0; i < friends.length; i++) {

//     loop2:
//     for (i = 99; i >= 0; i--) {
//         let minusOne = i - 1;
//         let name = friends[i];
//         if (i === 2) {
//             songLines = document.createTextNode(i + ' lines of code in the file, ' + i + ' lines of code; ' + name + ' strikes one out, clears it all out, ' + minusOne + ' line of code in the file.');
//         }
//         else if (i === 1) {
//             let minusOne = 'no more';
//             songLines = document.createTextNode(i + ' line of code in the file, ' + i + ' line of code; ' + name + ' strikes one out, clears it all out, ' + minusOne + ' lines of code in the file.');
//         }
//         else if (i === 0) {
//             let i = 'No more';
//             songLines = document.createTextNode(i + ' lines of code in the file, ' + i.toLowerCase() + ' lines of code; ' + name + ' types some more, writes some code, 99 lines of code in the file.');
//         }
//         else {
//             songLines = document.createTextNode(i + ' lines of code in the file, ' + i + ' lines of code; ' + name + ' strikes one out, clears it all out, ' + minusOne + ' lines of code in the file.');
//         }
//     }

// }