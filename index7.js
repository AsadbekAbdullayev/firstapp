// // const user = {
// //     id : 1,
// //     name : 'Web',
// //     surname : 'Brain',
// //     key:'123',
// //     // fullname : function (){
        
// //     //     console.log(this.id);
// //     // }
// //     data:{
// //         nma:'tesfddvd',
// //         getname(){
// //             console.log(this);
// //         }
// //     }
   
// // }
// // console.log(user.data.getname());

// class Student {
//     constructor(title){
//         console.log(title);
//         this.title = title;

//     }
//     getname(){
//         console.log(this.title,'Student');
//     }
    

// class Test{
//     constructor(f){
//         // console.log(f);
//     }
//     get(d){
//         console.log(d);
//     }

// }
// new Test().get('ssssssssss')

// class Ree extends Test{
//     constructor(ff){
//         console.log(ff);
//         super()  =======>super bulmasa Testga qiymat berib bulmaydi
//     }
// }

// new Ree('dd').get('testdan')







// }
// class Department extends Student {
//     constructor(titles){
//         super(titles)
//     }
// }
// let a = new Department('Asadbek')

// a.getname();

// callback
// promise
// async await
// console.log('Started....');
// let users = 
//     {
//         id:1,
//         name:'Asadbek',
//         pw:123
//     }
    


// const Facebook = (pw,username,callback)=>{
//     setTimeout(()=>{
//         if(users.name === username && users.pw === pw){
//             callback ('Welcome to Facebook')
//     }else{
//         callback('Errorrrr')
//     }},  
//     1000)

// }
// Facebook(123,'Asadbek',(data)=>{
// console.log(data);
// console.log('Finished');

// })
// console.log('Started....');
// let users = 
//     {
//         id:1,
//         name:'Asadbek',
//         pw:123
//     }

// const Facebook = (pw,username)=>{
// let user = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         if(users.name === username && users.pw === pw){
//             resolve ('Welcome to Facebook')

//     }else{
//         reject('Errorrrr')
//     }        

//     },1000)
// });

// user.then((res)=>console.log(res)).catch((err)=>console.log(err))

// };

// Facebook(123,'Asadbek')

// let a = '**********'.length;
// let b = '**********'.length;
// console.log(a*b);

// let a = 'AASWAASEEE';
// let noRepaet = ()=>{
//     let b ='';
//     let c =[];
//     let sort = a.split('').sort();
//     for(i=0;i<a.length;i++){
//         if(b.search(a[i]) === -1){     
//         c.push(a[i]) 
//         }
//         b=c.join('')
//     }
// let bb = b.split('');
// let w =0;
// let ww =[];
// for(j=0;j<bb.length;j++){
//     for(q=0;q<sort.length;q++){
//         if(bb[j]===sort[q]){
//             w++;

//         }
//     }
//     ww.push(w,b[j])
    
//     w=0;
// }
// console.log(ww.join(""))

// }
// noRepaet();

// function obj(num1=0,num2=0){
//     console.log(num1+num2);
//   return function(num3=0){
//       if(num3>0){
//         console.log(num1+num3);
//       }
//   }
// }


// const obj = {
//     a:1,
//     b:2,
//     getA(){
//         console.log(this.a)
//         let getb = {
//             getB(){
//                 console.log(obj.b);
//             }
//         }
//        return getb               
//     }
// }
// obj.getA().getB()


// function obj(num1=0,num2=0){

//     if(num1>0 &&num2>0){
// console.log(num1+num2);
//     }
//         return (num3=0)=> {
//             if(num3>0)
//             console.log(num1+num2+num3);       
//     }   
// }

// obj(1)(2);
// obj(1,2);

// let ar =[1,3,2,2];
// let sum=0;
// let sum2=0;
// for(i=0;i<ar.length;i++){
//     let a = ar.slice(i,ar.length);
//     for(j=1;j<a.length+1;j++){
//         let b = a.slice(0,j)
//         let sum = 0;
//                 for(q=0;q<b.length;q++){
//                     sum=sum+b[q]
//                 }
//                 let sum1 = sum/b.length;
//                 if(sum1===2){
//                     sum2++;
//                 }
//                 sum1=0   
//     }
// }
// console.log(sum2);

