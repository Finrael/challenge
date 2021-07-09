// const { usersById } = require("../src/database/db");

var written = document.getElementById("users");
console.log('uss', usersById)


var table = document.createElement('div');

var r2, l1;
 // this needs to be moved back to the back end this would work fine with a minfied react 
for (var i =1; 1<= 5; i++){
    r2 = document.createElement('tr')
    l1 = document.createElement('td')
    l1.innerText = usersById[i].username + "   " +usersById[i].age 
    r2.appendChild(l1)
    written.appendChild(r2)

}



written.appendChild(r1)