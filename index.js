console.log("hello world!");
numbers=[2,3,4,5,6];
function add(callback){
    
   console.log("outer started");
   numbers.forEach(callback);
}

function innerfunction(result){
    console.log("inside inner result :"+result*2);
}

add(innerfunction);