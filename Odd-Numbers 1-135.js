/*
    This is code to print Odd number between 1 - 135 .
*/


for(let i = 1; i <= 135; i++) {
    if (i % 2 == 0 ){
        continue;
    }
    console.log(`Odd number: ${i}`);
}


// Another way to slove it

for(let i = 1; i <= 135; i++){
    if(i % 2 !== 0){
        console.log('number:' + i);
    }
}