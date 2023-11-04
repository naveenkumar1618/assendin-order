// how to check the Given Object Is Empty Or Not

let Obj ={

}

// We cant Use Length Proprty Here Because Length Property Is Applicabe Only for Arrays

// There Is Another Method (Object.keys) => Convert Object to Array .Then We Can Apply The Length Property

Object.keys(Obj).length>0? console.log("The Given Object Is not Empty") :console.log("The Given Object is Empty")