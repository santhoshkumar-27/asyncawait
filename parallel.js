function async1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve({status: 'true'}, 200))
    })
}


async function calle() {
    // Promise.all([async1()]).then((value) => {
    //     console.log('value', value);

    // })
    const data = await async1();
    console.log('data', data);

}

calle();


