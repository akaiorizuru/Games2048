import grid from './grid';
import style from '../sass/style.scss'; 
import defaultExport from '/keyboard-action.js';
import GridClass from './grid.js';

// function counter(){
//     var counter = 0;
//     function check(counter){
//         if (style.x >= 0 && style.x <=3){
//             if (style.y >= 0 && style.y <=3){
//                 counter = counter ++;
//             }
//         }
//         return counter
//     }
//     return counter;
// }


// //generate 
// function generateNumber(){

    
//     function randomIntFromInterval(min, max) { // min and max included 
//         return Math.floor(Math.random() * (max - min + 1) + min)
//     }

//     let randx = randomIntFromInterval(0,3);
//     let randy = randomIntFromInterval(0,3);
// }


// function checkKeyboard(){
//     e = e || window.event; 
//     if(e.keyCode == leftKey){
//         //action on leftKey
//         //if have place at cell then : 
//         //moveTo(3,Positiony)
//     }else if(e.keyCode == rightKey){
//         //action on rightKey
//     }else if(e.keyCode == upKey){
//         //action on upKey
//     }else if(e.keyCode == downKey){
//         //action on downKey
//     }
// }


const gameBox = document.getElementById("game-box"); 

const grid = new GridClass(gameBox);