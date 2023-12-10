input = document.getElementById('inputbox');
buttons = document.querySelectorAll('button');


string ="";
arr = Array.from(buttons);

input.addEventListener("keydown",(e)=>{
    if(e.code.substring(0,4) ==='Digit' || e.key =='*' || e.key =='+'|| e.key =='-'
    || e.key =='/'|| e.key =='.'){
    console.log(string);
    string += e.key;
    }
    else if(e.key =='Enter'){
        string = eval(string);
        input.value = string;
    }
    else if(e.key =='Backspace'){
        if(string.length >0){
                string = string.substring(0,string.length-1);
            input.value = string;
        }
    }

})
// addEventListener("keydown",(e) =>{
//         if(e.key =='Enter'){
//             string = eval(string);
//             input.value = string;
//         }
//         if(e.key =='Backspace'){
//             if(string.length >0){
//             string = string.substring(0,string.length-1);
//             input.value = string;
//             }
//         }
// })

arr.forEach(button => {
    button.addEventListener('click',(e)=>{
        console.log(string);
        if(e.pointerType!== ""){
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }
        else if(e.target.innerHTML == 'AC'){
                string ="";
                input.value =string;
        }
        else if (e.target.innerHTML == 'DEL'){
            string = string.substring(0,string.length-1);
            input.value =string;
        }
        else{
        string += e.target.innerHTML;
        input.value = string;
        }
        }
    })
});