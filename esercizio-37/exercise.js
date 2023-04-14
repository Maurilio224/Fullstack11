const number = 15;

const myPromise = new Promise((resolve,reject) => {
    if (number > 10) {
        resolve(number);
    } else {
        reject("rejected");
    }
});

myPromise
  .then((resolve) => console.log(resolve))
  .catch((error) => console.log(error))

