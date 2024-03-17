function async1() {
    return new Promise((resolve, reject) => {
        console.log('this is happens a')

        setTimeout(() => resolve({status: 'true'}, 200))
    })
}

function async11() {
    return new Promise((resolve, reject) => {
        console.log('this is happens')
        setTimeout(() => reject({status: 'true'}, 200))
    })
}


async function singlePromiseResolve() {

    const data = await async1();
    console.log('data', data);

}

// singlePromiseResolve();


function multiplePromiseResolveWithAll() {
    Promise.all([async11(), async1(), async11()]).then((value) => {
        console.log('value', value);
    }).catch((reason) =>{
        console.log('reason', reason);

    } )
}

multiplePromiseResolveWithAll()