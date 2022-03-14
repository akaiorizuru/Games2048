import grid from './grid';
import style from '../sass/style.scss'; 
import defaultExport from '/keyboard-action.js';

function counter(){
    var counter = 0;
    function check(counter){
        if (style.x >= 0 && style.x <=3){
            if (style.y >= 0 && style.y <=3){
                counter = counter ++;
            }
        }
        return counter
    }
    return counter;
}


//generate 
function generateNumber(){
    
}


function checkKeyboard(){
    e = e || window.event; 
    if(e.keyCode == leftKey){
        //action on leftKey
    }else if(e.keyCode == rightKey){
        //action on rightKey
    }else if(e.keyCode == upKey){
        //action on upKey
    }else if(e.keyCode == downKey){
        //action on downKey
    }
}

