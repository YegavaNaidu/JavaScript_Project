const num = [1,2,3,4,5];


function headerfun(func){
    return function(a,b){
        console.log("---------");
        func(a,b);
        console.log("---------");
    }
}

function sum(a,b){
    console.log(a+b);
}
function mul(a,b){
    console.log(a*b);
}
headerfun(sum)(2,3);
headerfun(mul)(5,6);