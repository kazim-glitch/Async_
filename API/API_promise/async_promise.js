// import { reject } from "lodash"
// import { resolve } from "path"

const async_func= () =>{
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            resolve('2')
        },600)
    } );
}  

const async_func2 = () =>{

    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            resolve('I forgot counting .. :-D')
        },500)

    });
}

const main = async () =>{
    console.log('1')
    const result  = await async_func();
    console.log(result);
    console.log('3');

    const result2 = await async_func2();
    console.log(result2)

} 


main();


// async_func().then( res=>{

//     console.log(res);
    
// }).catch(error =>{
//     console.log(error)
// })
