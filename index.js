let a = '1234'.split('');
let b = [];
for (i = 0; i < a.length; i++) {
    for(j=0;j<a.length;j++){
        b.push(a[(a.length-1)-j])

    }
   
    //    let a1 = b.join('');
    //    let a2 = b.reverse().join('');
    // if(a1===a2){
    //     console.log(a1);
    // }
    console.log(b);
    b=[];
}
console.log('==========================');

