async function handleAsyncOperations() {
    const a = await step();
    const b = await step(a);
    const c = await step(b);

    return [a, b, c]
}


function step(adsf = 1) {
    return Promise.resolve(adsf)
}

/**
 * @description Tower of terror
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

    return a + b + c;
}


const handleError = (error) => console.log(error);