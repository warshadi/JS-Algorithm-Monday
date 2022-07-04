/*
    Eliminate the Negatives
*/

function del(arr){
    let result = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0) {
            result.push(0);
        }else {
            result.push(arr[i])
        }
    }
    return result;
}

let x = [2, -1, 4, -3];

console.log(del(x));
