// let a =['Acer',2021,2000];

// const Nout = {
//     name:'Acer',
//     year:2021,
//     price:200,

//     narxi:()=>{
//         console.log(this.price*10750)
//     }

// }
// Nout.narxi()
// console.log(a);

function add(title){
    console.log(title)
}
class Test1{
    constructor(title){
        console.log(title)
        this.title=title
    }
    getname(){
        console.log(this.title , 'test1dan')
    }
}
// // add('salom')
// let user = new Test('salom');
// user.getname()
class Test2 extends Test1{
    constructor(tt){
        super(tt)
    }
}

const t = new Test2('Assalomu Alaykum')
t.getname()