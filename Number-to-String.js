/*
    Number to String
*/

function del(arr){
    let result = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0) {
            result.push('Turing');
        }else {
            result.push(arr[i])
        }
    }
    return result;
}

let x = [1,-4,0,-1];

console.log(del(x));
