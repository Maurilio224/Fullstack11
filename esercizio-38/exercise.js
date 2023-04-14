const isLogged = true;

function userIsLogged(isLogged) {
    return new Promise ((resolve, reject) => {
    if (isLogged == true) {
        resolve (Math.random())
    } else {
       reject (console.error("error"))
    }
})
}

function userData(num){
    return new Promise ((resolve,reject) => {
    if (num > 0.5) {
        resolve ("{ name: John, age :24 }")
    } else {
        reject (console.error("number not valid"))
    }
})
}

userIsLogged(isLogged)
  .then(userData)
  .then((val) => console.log(val))
  .catch((err) => console.log(err))