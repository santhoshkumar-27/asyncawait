function step(adsf = 1) {
    return Promise.reject(adsf)
}

const handleError = (error) => console.log(error);

// async function handleAsyncOperations() {
//     const a = await step();
//     const b = await step(a);
//     const c = await step(b);

//     return [a, b, c]
// }

// /**
//  * @description Tower of terror
//  */
// async function handleAsyncOperationsOneMethod() {
//     let a;
//     let b;
//     let c;
    
//     try {
//         a = await step();
//     } catch (e) {
//         handleError(e)
//     }

//     try {
//         b = await step(a);
//     } catch (e) {
//         handleError(e)
//     }

//     try {
//         c = await step(b);
//     } catch (e) {
//         handleError(e)
//     }

//     return a + b + c;
// }



async function getSimpler() {
    const a = await step().catch((reason) => handleError(reason));
    const b = await step(a).catch((reason) => handleError(reason));
    const c = await step(b).catch((reason) => handleError(reason));
    console.log(a, b, c)
    return [a, b, c]
}

console.log(getSimpler())