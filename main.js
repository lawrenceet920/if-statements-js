// Ethan lawrence
// May 6
// JS IF Statements

// // Demo 1 
    // const firstName = 'Elisabeth';
    // console.log (`Hello ${firstName}`);

    // if (firstName.length > 7) {
    //     console.log (`WOW! you have a realy long name ${firstName.length} Characters`)
    // };

    // console.log ('\n')

//     // Demo 2 
    // const fName = 'Nickolas';
    // console.log (`Hello ${fName}`);

    // if (fName.length > 7) {
    //     console.log ('Dude, you have a REALY long name!');
    // } else {
    //     console.log (`Your name isn't very long, ${fName} is it?`);
    // };

// console.log ('\n')

// Demo 3
const age = parseInt(prompt('Enter your age: (Example 16)'));

if (age < 3) {
    const message = 'You\'re still just a baby!';
    console.log (message);
} else if (age < 18) {
    const message = 'You\'re not yet an adult';
    console.log (message);
} else if (age < 100) {
    const message = 'Almost at the centry mark!';
    console.log (message);
} else {
    const message = 'What an unusual age!';
    console.log (message);
}

