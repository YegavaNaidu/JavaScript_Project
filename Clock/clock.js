//to get html element id's
let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');


function displayTime(){

    let date = new Date();//takes real time date elements

    let hh =date.getHours();
    let mm =date.getMinutes();
    let ss =date.getSeconds();
    
    //hrotation value = 360/12 =30 +relative to mrotation;
    //relative to mrotation=30/60 =0.5;
    //mrotation = 360/60 = 6 + relativeto srotation;
    //relativeto srotation = 6/60 =0.1;
    //srotation = 360/60 = 6

    let hrotation = 30*hh + 0.5 *mm;
    let mrotation = 6*mm +0.1*ss;
    let srotation = 6*ss;

    //.style will directly connects css
    hr.style.transform = `rotate(${hrotation}deg)`;
    min.style.transform = `rotate(${mrotation}deg)`;
    sec.style.transform =`rotate(${srotation}deg)`;
}



setInterval(displayTime,100);