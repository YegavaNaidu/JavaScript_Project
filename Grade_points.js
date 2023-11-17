function CaluclateGrade(marks){
    let l=0;
    let sum=0;
    for(let k of marks){
        sum = sum +k;
        l++;
    }
    avg = sum/l;
    if(avg <=59){
        return "F";
    }
    if(avg>59 && avg <=69){
        return "D"; 
    }
    if(avg>69 && avg <=79){
        return "C"; 
    }
    if(avg>79 && avg <=89){
        return "B"; 
    }
    if(avg>89 && avg <=100){
        return "A"; 
    }
}

const marks = [60,60,60];

console.log(CaluclateGrade(marks));
