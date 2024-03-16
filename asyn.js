async function handleAsyncOperations() {
    const a = await step();
    const b = await step(a);
    const c = await step(b);

    return [a, b, c]
}


function step(adsf = 1) {
    return Promise.resolve(adsf)
}

