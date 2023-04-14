const isLogged = true;

function userIsLogged(value) {
    return new Promise ((resolve, reject) => {
    if (value == true) {
        resolve (Math.random())
    } else {
       reject (new Error("error"))
    }
})
}

function userData(num){
    return new Promise ((resolve,reject) => {
    if (num > 0.5) {
        resolve ({ name: "John", age :24 })
    } else {
        reject (new Error("number not valid"))
    }
})
}

userIsLogged(isLogged)
  .then(userData)
  .then((val) => console.log(val))
  .catch((err) => console.error(err))
  .finally(() => console.log("Complete"))
