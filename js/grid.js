// import 
import style from '../sass/style.scss'

let grid = document.getElementById('game-box');

// SCSS 
function XYposition(x, y){
    style.x = x;
    style.y = y;
    // const css = {
    //     top : style.y,
    //     left : style.x
    // }
    positionTab[0] = style.x;
    positionTab[1] = style.y;
    return positionTab;
}



// //export the number 
// export default ({}) =>{
//     return <div class="number" style={css}></div>
// }
