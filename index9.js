// const user = [
//     {
//         id:1,
//         name:'Asadbek',
//         status:'grant'
//     },
//     {
//         id:2,
//         name:'Xolmirza',
//         status:'kantract'
//     },
//     {
//         id:3,
//         name:'Olim',
//         status:'grant'
//     },

// ]
// let search=(up)=>{
//     if(up.length!==0){
//     user.map((value)=>{
//         if(value.name.includes(up) || value.status.includes(up) ){
//             console.log(value);
//         }
//     })}else(console.log('malumot kiritin'))
// }
// search('za');

// let b = [1,2,3,4,3,3,4,4,6,6,5,5];
// console.log(b.filter((value,index)=>b.indexOf(value)===index));

// let a = 'We32r2e3';
// let sum=0;

// let r = a.split('').filter((value)=>parseInt(value)).map((v)=>{
//     sum=parseInt(v)+sum
// }); 
// console.log(sum);
// FINAL EXAM

// console.log(Number(11).toString(5)); 11 sonini 5likga utqazadi

// console.log(parseInt(21,5)); 5likdgi 21 sonini 10likga utqazadi

// console.log(eval('12+3'));

// ?, :, every

// let a = ['salom','olim','dew']
// a.map(([value,key],index)=>console.log(value))



// chunkify([2, 3, 4, 5], 2) ➞ [[2, 3], [4, 5]]

// chunkify([2, 3, 4, 5, 6], 2) ➞ [[2, 3], [4, 5], [6]]

// chunkify([2, 3, 4, 5, 6, 7], 3) ➞ [[2, 3, 4], [5, 6, 7]]

// chunkify([2, 3, 4, 5, 6, 7], 1) ➞ [[2], [3], [4], [5], [6], [7]]

// chunkify([2, 3, 4, 5, 6, 7], 7) ➞ [[2, 3, 4, 5, 6, 7]]


// let chunkify = (aa,bb)=>{
//     let b =[]
//     aa.map((v)=>{
//    let d =  aa.splice(0,bb);
//         b.push(d)
//     })
//     console.log(b);
// }
// chunkify([2, 3, 4, 5, 6, 7], 3)


// doesTriangleFit([1, 1, 1], [1, 1, 1]) ➞ true

// doesTriangleFit([1, 1, 1], [2, 2, 2]) ➞ true

// doesTriangleFit([1, 2, 3], [1, 2, 2]) ➞ false

// doesTriangleFit([1, 2, 4], [1, 2, 6]) ➞ false

// function doesTriangleFit(a,b){
//     let count = 0;
//     let dd=[];
//    for(i=0;i<a.length;i++){
//    dd.push(b[i]/a[i])  
//    }
//    dd.map

// }
// doesTriangleFit([1,2,3],[1,2,3])

// let a = [2,2,5];

// let sum1=sum/a.length;
// console.log(sum1);



// let getdata = (aa,bb)=>{
//     let sum=0;
//     let sum2=0;
//     for(i=0;i<aa.length;i++){
//         let a = aa.slice(i,ar.length);
//         for(j=1;j<a.length+1;j++){
//             let b = a.slice(0,j)
//             let sum = 0;
//                     for(q=0;q<b.length;q++){
//                         sum=sum+b[q]
//                     }
//                     let sum1 = sum/b.length;
//                     if(sum1===bb){
//                         sum2++;
//                     }
//                     sum1=0   
//         }
//     }
//     console.log(sum2);
// }
// getdata([1,3,2,2],2)

// let tubson =(a)=>{
//     let count=0;
// for(i=2;i<a;i++){
//     for(j=1;j<=i;j++){
//         if(i % j ===0){
//             count++; 
//         }
//     }
//     if(count===2){
//         console.log(i);
//     }
//     count=0;
// }}

// tubson(100);

// ===========================================


// let a = [
//     {id:1,name:'asasd',status:'efdfsa',age:23},
//     {id:2,name:'asasd',status:'efdfsa',age:27},
//     {id:3,name:'asasd',status:'efdfsa',age:21}
// ]

// let ageSort =()=>{

//     let b=[];
// let c=[];
// a.map((v)=>{
//     b.push(v.age);
//     b.sort((a,b)=>b-a)

// })
// b.map((v)=>{
//   a.map((cc)=>{
//     if(v===cc.age){
//         c.push(cc)
//     }
//   })
// })
// console.log(c);

// }





// let CountA =()=>{
//     let count=0;
// a.map((value)=>{
//     value.name.split('').map((value,index)=>{
//         if(value==='a'){
//             count++;
//         }
//     });
//     value.status.split('').map((value,index)=>{
//         if(value==='a'){
//             count++;
//         }
//     });
// })

// console.log(count);
// }

// let a = ['a','s','d','f'];
// let b = ['а','с','д','ф'];
// let c= 'aasaadd';
// let cc=[]
// c.split('').map((v)=>{
//     if(v==='a'){ 
//         cc.push('а')  
//     }if(v==='s'){ 
//         cc.push('с')  
//     }if(v==='d'){ 
//         cc.push('д')  
//     }if(v==='f'){
//         cc.push(ф)
//     }
// })

// aa=cc.join('')
// console.log(aa);

// ===========================================


// let a = ['a','c','a','d','v','c'];
// let b = [];
// let c = [];
// a.map((v)=>{
//     if(b.includes(v)){
//         c.push(v)
//     }
//     b.push(v)
// })
// console.log(c[0]);


// ===========================================


// let a = 'AASSDDD'
// let b = [];
// let c = [];
// let count=0;
// a.split('').map((v)=>{
//     if(!b.includes(v)){
//         b.push(v)
//     }
// })
// b.map((v)=>{
//     a.split('').map((s)=>{
//         if(s===v){
//             count++
//         }
//     })
//     c.push(`${count}${v}`)
//     console.log(count,'ta',v);
//     count=0;
// })
// console.log(c.join(''));

// ===========================================

// let a = '2A2S3D';
// let b = [];
// a.split('').map((v,i)=>{
//     if(Number(v)){
//         for(j=0;j<v;j++){
//             b.push(a[i+1])
//         }

//     }
// })
// console.log(b.join(''));

// ===========================================


// const user = [
//     {
//         id: 1,
//         name: 'Asadbek',
//         status: 'grant'
//     },

//     {
//         id: 2,
//         name: 'Xolmirza',
//         status: 'kantract'
//     }, 
//     {
//         id: 3,
//         name: 'Azamat',
//         status: 'kontrakt'
//     },
//     {
//         id: 4,
//         name: 'Olim',
//         status: 'grant'
//     }

// ]

// let getdata = (a, b) => {
//     let a1 = [];
//     let a2 = [];
//     let a3 = [];
//     user.map((v)=>{
//         if(v[b].toLowerCase().includes(a)){
//             a1.push(v)
//         }
        
//     })
//     a1.map((v)=>{
//         a2.push(v.name)
//     })
//     a2.sort();
//     a2.map((v)=>{
//         user.map((q)=>{
//             if(q[b].toLowerCase()===v.toLowerCase()){
//                 a3.push(q)
//             }
//         })
//     })
//     console.log(a3);
// }
// getdata('o','name')



                   









