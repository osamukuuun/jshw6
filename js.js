// let km = +prompt("Enter the numbers of  kilometrs : ");
// function convert(km){
//     return km * 0.6214;
// }
// alert("miles in" + km + "kilometrs" + convert(km));

let side = 4; 
let str = '';
function draw_box(){
    for (let i = 1; i <= side; i++){
        for (let j = 1; j <= side; j++){
            str+= ' = ';
        }
        console.log(str);
        str='';
    }
}