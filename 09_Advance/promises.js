const promiseOne = new Promise(function(resolve, reject){
   setTimeout(function(){
    console.log('Async task is Completed');
    resolve()
   }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed")
})

new Promise(function(resolve, reject){
    setTimeout(function(){
      console.log("Async task 2");
      resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved")
})

const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({ username: "Sam", email: "ssmishra9918@gmail.com" });
    }, 1000);
});

promiseThree.then(function(user) {
    console.log(user);
});


const promiseFour = new Promise(function(resolve, reject){
     setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "Satyam", passwaord: "123"})
        }
        else{
            reject('ERROR: Something went wrong')
        }
     },1000)
})


const username = promiseFour.then((user)=>{
    console.log(user)
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error)
}).finally(()=>{
    console.log("the promise is either reesolve or rejected!");
    
})

const promiseFifth = new Promise(function(resolve, reject){
        setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "Satyam", passwaord: "123"})
        }
        else{
            reject('ERROR: Something went wrong')
        }
     },1000)
})

   async function consumePromisefifth() {
      try {
        const response = await promiseFifth
      console.log(response)
      } catch (error) {
        console.log(error)
      }
   }
     
   consumePromisefifth()


   async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}
getAllUsers()