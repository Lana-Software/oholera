class Freddy {
    sayhi() {
        console.log("o holera")
    }

    saybye() {
        console.log("adioh mamahuevo")
    }
}

let freddy = new Freddy()
freddy.sayhi()
setTimeout(() => {
    freddy.saybye()
}, 1000)