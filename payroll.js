const readline = require('readline');
const { isNull } = require('util');


const rl = readline.createInterface({

input: process.stdin,

output: process.stdout

});


// loop for 22 slots
for(i=0; i<22; i++){

// declare multiple arrays for each slot
var staffName = [];
var staffID = [];
var staffStart = [];
var staffEnd = [];

// if the slot is empty it can proceed
if(staffName[i] = isNull){

// prompt for staff details
rl.question('Enter your name? ', (name) => {
    rl.question('Enter your StaffID? ', (id) => {
        rl.question('Enter time when your shift starts: ', (startWH) => {
            rl.question('Enter time when your shift ends: ', (endWH) => {
            
                staffName[i] = name;
                staffID[i] = id;
                staffStart[i] = startWH;
                staffEnd[i] = endWH;

                console.log(staffName[i]);
                console.log(staffID[i]);
                console.log(staffStart[i]);
                console.log(staffEnd[i]);

                rl.question('Recheck Y/N', (response) => {

                    let userResponse = response.charAt(0);
                    if(userResponse == 'Y' || 'y'){
                        console.log(staffName[i]);
                        console.log(staffID[i]);
                        console.log(staffStart[i]);
                        console.log(staffEnd[i]);
                    }
                    else
                        return false;

                    rl.question('Edit? Y/N', (edit) => {

                            let userEdit = edit.charAt(0);
                            if((userEdit == 'Y') || (userEdit == 'y')){
                                console.log('Your details have been updated.')
                            }
                            else
                            CalculateSalary();
                            
                            rl.question('Edit Details?Y/N',(edit) =>{
                                let userEdit = edit.charAt(0);
                                if((userEdit == 'Y') || (userEdit == 'y')){
                                console.log('Your details have been updated.')


                            }
                            
                    });
                    });
                });
            });
        });
    });
    console.log('Name:'+" "+staffName.value[i]);
    console.log('ID:'+" "+staffID[i]);
    console.log('Clock-in time:'+" "+staffStart[i]);
    console.log('Clock-out time:'+" "+staffEnd[i]);
    console.log(' salary:'+" "+'RM' + (staffStart[i]+staffEnd[i])*6.0);

}

}

 //calculate salary
 function CalculateSalary (arrays(Array.from(staffStart),Array.from(staffEnd))
 {
    var gross = ((staffStart[i])-(staffEnd[i])) * 6.0;
    var EPF = gross*(11/100)*1.0;
    var net = gross-EPF;
    console.log('Net salary:'+" "+ 'RM'+ net);


 }};
