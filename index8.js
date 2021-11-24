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
//         username:'salomov',
//         status : 'CS',
//         department : 'IT'
//     },
//     {
//         id : 2,
//         username:'salomov',
//         name : 'Gishmat',
//         status : 'CS',
//         department : 'AI'
//     },
//     {
//         id : 3,
//         username:'Assalomov',
//         name : 'Ahmad',
//         status : 'CS',
//         department : 'IT'
//     },
//     {
//         id : 4,
//         username:'lomov',
//         name : 'Ahmadjon',
//         status : 'CS',
//         department : 'IT'
//     }

// ] 

// let search =(up)=>{
//     if(up.length!==0){
//     for(i=0;i<user.length;i++){
        
//         if((user[i].name.search(up)!==-1) || (user[i].username.search(up)!==-1)){
//             console.log(user[i]);
//         }}
//     }else(console.log('Malumot kiriting'))
// }
// search('')


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


// let ar = [1,1,1,1,1,12,3,3,3,4,45,5,5];
// var a ='';
// var b=[];
// for(i=0;i<ar.length;i++){
//         if(a.search(ar[i])===-1){
//             a.split('');
//             b.push(ar[i]);

//         }
    
//     a=b.join('')
// }

// console.log(b)

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




// console.log('started..');

// let add=(a,b,c)=>{
//     setTimeout(()=>{
//         c('ishalaaaaddiiiii');
// console.log('Finished..');

//     },3000)
// }
// add('salom','dunyo',(data)=>{
//     console.log(data);
// })

// let users = {
//     id:1,
//     pw:'pp'
// }


// console.log('started...');


// const Facebook =(pw,id) =>{
// let user = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         if(users.id === id && users.pw === pw){
//             resolve("tugriii")
//         }else{
//             reject('notugggrriii')
//         }
//     },2000)
// })
// user.then((res)=>{console.log(res);
//     console.log('finished...');
// })
// .catch((err)=>{console.log(err)
// console.log('finished...');
// })

// }

// Facebook(1,'pp')


















