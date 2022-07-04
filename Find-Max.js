/*
    Find Max
*/

let x = [2,-3,-1];

let z = Math.max(...x);
console.log(z);

//==========================

function myMax(x) {
    let y = x.length;
    let maximum = y;
    for(let i = 0; i < y; i++){
        if(x[i] > maximum){
            maximum = x[i];
        }
    }
    return maximum;
}

let abc = [1, 4, 6, 10, 100];

let m = myMax(abc);
console.log(m);
