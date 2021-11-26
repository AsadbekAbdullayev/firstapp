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
let ar =[1,3,2,2]
let b=2
let c=0;
let w=0;
for(i=0;i<ar.length;i++){
    // for(i=1;i<=ar.length;i++){
    //    let r= ar.slice(0,i)
    //    console.log(r);
    // //    for(j=0;j<r.length;j++){
    // //        console.log(r);
    // //        w=w+r[j]
    // //    }
    // //    if(w/i===b){
    // //        c++
    // //    }
    // }
    ar.splice(0,1)
    console.log(ar);
}
// }666666666666666666666