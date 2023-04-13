const printHello = () => {
    console.log("Hello")
}

const printAsyncsName = (callBack, string) => {
    setTimeout(callBack, 1000);
    setTimeout(() => {console.log(string)}, 2000);
}

printAsyncsName(printHello, ";)")
