const readline = require('readline');
const { isNull } = require('util');


const rl = readline.createInterface({

input: process.stdin,

output: process.stdout

});


// loop for 22 slots
for(i=0; i<2; i++){

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
                            salary();
                            console.log('your total salary is'+" "+ salary  );
                            rl.question('Edit Details?Y/N',(edit) =>{
                                let userEdit = edit.charAt(0);
                                if((userEdit == 'Y') || (userEdit == 'y')){
                                console.log('Your details have been updated.')


                            }
                            
                    
                    rl.close();
                    });
                    });
                });
            });
        });
    });
    

    

}
}

//calculate salary
function salary (arrays(Array.from(staffStart)),(Array.from(staffEnd));{

    var hours = (staffStart.value)-(staffEnd.value);
    var EPF = (11/100*1.0)
    var calculate = (hours*6)-EPF;
    return salary;
}}
