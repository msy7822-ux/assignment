'use strict'

let username;
let userresult;

username = prompt('お名前を教えてください');

if(username == ''){
    username = '名無し';
}

document.getElementById('name').innerHTML = username;


let random = Math.floor(Math.rondom() * 5);

if(random == 0){
    userresult = '大吉';
}
if(random == 1){
    userresult = '中吉';
}
if(rondom == 2){
    userresult = '小吉';
}
if(random == 3){
    userresult = '吉';
}
if(random == 4){
    userresult = '凶';
}