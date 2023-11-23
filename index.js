
//arrow function
const courses = [
    {id :1,value : 'java'},
    {id: 2,value : 'maths'},
    {id: 3,value : 'physics'}
];

const val =[1,2,3,4];

const course =val.find(course => course >=2);

console.log(course);

//conacat & slice

const first =[1,2,3];
const sec = [4,5,6];

let comnbined = [...first,...sec];
//const divison = comnbined.slice();

console.log(comnbined);
//console.log(divison);