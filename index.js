function receivesAFunction(bluey) {
    return bluey()
}

function returnsANamedFunction() {
    return function named() {
        console.log("This my name!")
    }
}

function returnsAnAnonymousFunction() {
    return function () {
        console.log("do something")
    }
}