const printHello = () => {
    console.log("Hello")
}

const delayPrintHello = (callBack, string) => {
    setInterval(callBack,1000);
}

delayPrintHello(printHello)