function step(adsf = 1) {
    return Promise.reject(adsf)
}

const handleError = (error) => console.log(error);

/**
 * @description Tower of terror this function  handled the reject promise
 * with try catch method it handled
 */
async function handleAsyncOperationsOneMethod() {
    let a;
    let b;
    let c;
    
    try {
        a = await step();
    } catch (e) {
        handleError(e)
    }

    try {
        b = await step(a);
    } catch (e) {
        handleError(e)
    }

    try {
        c = await step(b);
    } catch (e) {
        handleError(e)
    }
    console.log(a, b, c)
    return a + b + c;
}

console.log(handleAsyncOperationsOneMethod())


/**
 * @description with function, don't use the try catch block instead they handle by catch call back 
 * functions 
 */
async function getSimpler() {
    const a = await step().catch((reason) => handleError(reason));
    const b = await step(a).catch((reason) => handleError(reason));
    const c = await step(b).catch((reason) => handleError(reason));
    console.log(a, b, c)
    return [a, b, c]
}

// console.log(getSimpler())

/**
 * 
 * @description this function not handled the reject promise, to
 * it throws unhandled promise rejections
 */
async function handleAsyncOperations() {
    const a = await step();
    const b = await step(a);
    const c = await step(b);
    console.log(a, b, c)
    return [a, b, c]
}
// console.log(handleAsyncOperations())
