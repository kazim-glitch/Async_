
import fetch from 'node-fetch';

const user = ()=>{

fetch = ("https://randomuser.me/api/?results=1").then((data) => {
console.log(data) ; }).catch((err) =>{
    console.log(err);
});

console.log("message 1 ");

}
