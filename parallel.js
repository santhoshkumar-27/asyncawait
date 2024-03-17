function async1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve({status: 'true'}, 200))
    })
}


async function singlePromiseResolve() {

    const data = await async1();
    console.log('data', data);

}

singlePromiseResolve();


function multiplePromiseResolveWithAll() {
    Promise.all([async1(), async1(), async1()]).then((value) => {
        console.log('value', value);
    })
}

multiplePromiseResolveWithAll()