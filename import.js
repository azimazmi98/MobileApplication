
const readline = require('readline');


const rl = readline.createInterface({

input: process.stdin,

output: process.stdout

});



rl.question('What is your name? ', (name) => {
    rl.question('What is your Matric Number? ', (matricNo) => {
        rl.question('What is your Major? ', (major) => {

            let student = new myimport.Students(name, matricNo, major);
            
            console.log(student.Name(name));
            console.log(student.MatricNo(matricNo));
            console.log(student.Major(major));

        rl.close();

        });
    });
});



const myimport = require('./Student.js');



