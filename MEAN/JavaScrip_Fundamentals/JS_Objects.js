'use strict';

let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

for(let student in students){
    console.log(`Name: ${students[student].name}, Cohort: ${students[student].cohort}`);
}


let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };


for(let user in users){
    let count = 1
    for(let person in users[user]){
        let sum = users[user][person]['first_name'].length + users[user][person]['last_name'].length;
        let first = users[user][person]['first_name'].toUpperCase();
        let last = users[user][person]['last_name'].toUpperCase();
        console.log(`${count} - ${first}, ${last} - ${sum}`);
        count++;
    }
}
