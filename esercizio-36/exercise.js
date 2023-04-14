//const printHello = () => {
//  console.log("Hello")
//}

//function delayPrintHello  (callBack)  {
//  setInterval(callBack,1000);
//   setTimeout(() => {clearInterval(),
//      console.log("stop")}, 5000)
//}

//delayPrintHello(printHello);


const printHello = () => { console.log("Hello") }

function delayPrintHello(callBack) {
    const interval = setInterval(callBack, 1000);
    setTimeout(() => {
        clearInterval(interval),
        console.log("stop")}, 5000)
}

delayPrintHello(printHello);