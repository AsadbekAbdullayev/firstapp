// const obj = {
//     a:1,
//     b:2,
//     getA(){
//         console.log(this.a)
//         let getb = {
            
//             getB(){
//                 this.b=obj.b
//                 console.log(this.b);
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
//         return (num3)=> {
//             if(num3>0)
//             console.log(num1+num2+num3);       
//     }   
// }
// obj(1)(2);
// obj(1,2);


    // CRUD CREATE READ UPDATE DELETE

// let user = [
//     {   
//         id : 1,
//         name : 'Eshmat',
//         status : 'CS',
//         department : 'IT'
//     },
//     {
//         id : 2,
//         name : 'Gishmat',
//         status : 'CS',
//         department : 'AI'
//     },
//     {
//         id : 3,
//         name : 'Ahmad',
//         status : 'CS',
//         department : 'IT'
//     }
// ] 


// let Oncreate =(obj)=>{
//     user.push(obj);
//     console.log(user);
// }
// Oncreate({id:4,name:'Azamat',status:'CS',department:'IT'})

// let Onread =(type)=>{
//     let a = [];
//     for(i=0;i<user.length;i++){
//         a.push(user[i][type])
//     }
//     console.log(a);
// }
// Onread('name')

// let OnUpdate = (id,type,value)=>{
//     for(i=0;i<user.length;i++){
//         if(user[i].id === id){
//             user[i][type]=value;
//         }
//     }
//     console.log(user);
// }
// OnUpdate(3,'name','Jaloliddin')

// let OnDelete = (type,value)=>{
//     for(i=0;i<user.length;i++){
//         if(user[i][type]===value){
//             user.splice(i,1)
//         }
//     }
//     console.log(user);
// }
// OnDelete('id',2)






































