//import fetch from 'node-fetch';

const fetch = require('node-fetch');

const data = async() => {

    const got = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    
    console.log(await got.json())
}

//console.log('starting ...')
data(); 