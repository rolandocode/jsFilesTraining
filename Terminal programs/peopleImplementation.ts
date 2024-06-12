import { IPeople } from "./people";

var newPerson = <IPeople>{};
newPerson.age = 31;
newPerson.name = "Rolando";

console.log("Person : " + newPerson.name + " Age: " + newPerson.age);
