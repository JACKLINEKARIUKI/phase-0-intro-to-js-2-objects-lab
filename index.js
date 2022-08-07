// Write your solution in this file!
const employee = {
    name : "Jane", 
    streetAddress : "Moi Lane"
}

function updateEmployeeWithKeyAndValue(obj, key, value){
    const newEmployee = {...obj};
    newEmployee[key] = value;
    return newEmployee;
}
updateEmployeeWithKeyAndValue(employee, "age", 32);

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key] = value ;
    return obj;
}
const newEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, "name", "James");

function deleteFromEmployeeByKey(obj, key){
    const newerEmployee = {...obj};
    delete newerEmployee[key];
    return newerEmployee;
}
deleteFromEmployeeByKey(employee, "age");

function destructivelyDeleteFromEmployeeByKey(obj, key){
    delete obj[key];
    return obj;
}
destructivelyDeleteFromEmployeeByKey(employee, streetAddress);