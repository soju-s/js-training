// Create an empty object user.
// Add the property name with the value John.
// Add the property surname with the value Smith.
// Change the value of the name to Pete.
// Remove the property name from the object.

const user={
    name:"John",
    surname:"Smith"
}
console.log(user);
user.name="Pete"
console.log(user);
delete user.name
console.log(user);