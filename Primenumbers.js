function Primenumbers(range){
    k=[];
    for(let i=2;i<=range;i++){
        let count=0;
        for(let j=2;j<=i;j++){
            
            if(i!==j && i%j===0){
                count++;
                break;
            }
        }
        if(count ===0){
            k.push(i);
        }
    }
    return k;
}

console.log(Primenumbers(1000));