// (() => {
//     console.log('Loading User Details...');
// })()

// const Greetings = (firstName, lastName) => {
//     let fullName = `${firstName} ${lastName}`

//     const inner = (fullName) => {
//         let GreetingMessage=`Hello ${fullName}`
//         console.log(GreetingMessage)
//     }
//     inner(fullName)
// }

// Greetings('first','last')


(function () {
console.log("Loading User Details");    
}
)()
names=(fname,lname)=>{
let fullName=fname+lname
greetings=()=>{
    let gmessage="Greetings"
    console.log(gmessage+fullName);
}
greetings()
}

names("Soju","S")