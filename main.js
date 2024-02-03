// // This is a comment
// let FirstName = "Manish Raghav";
// let age = 21;
// let isMarried = "monkey";
// // console.log("The person is " + FirstName + " and their age is " + age);

// if(isMarried==false){
//     console.log("The person "+FirstName+" is not married");
// }
// else{
//     console.log("The person"+FirstName+"is married");

// }


// const allUser=[{
//     firstName:"Manish",
//     gender:"Male"
// },
// {
//     firstName:"Raman",
//     gender:"Male"
// },
// {
//     firstName:"Priya",
//     gender:"Female"
// }
// ]

// for(let i=0;i<allUser.length;i++){
//     if(allUser[i]["gender"]=="Male"){
//         console.log(allUser[i]["firstName"])
//     }
// }

function calculatea(a,b,arith){
    const ans=arith(a,b)
    return ans;
}
function sum(a,b){
return a+b;
}

const value=calculate(3,5,sum);
console.log(value);