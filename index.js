function receivesAFunction (callbackFn) {
    callbackFn();
}
receivesAFunction(function(){
    return 'I am a call back argument';
})

function returnsANamedFunction () {
    function namedFunction() {
        return 'I am a call back named function';
    }
    return namedFunction;
}

function returnsAnAnonymousFunction () {
    return function () {
    }
    return 'I am anonymous';
}