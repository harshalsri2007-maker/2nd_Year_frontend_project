for(let i=100;i<1000;i++){
    let sum=0;
    let num=i;
   // let digit=3;
    let digit = num.toString().length;
    while(num>0){
    let rem = num%10;
    sum=sum+rem**digit;
    num=Math.floor(num/10);
    }

if(sum==i){
    console.log(i);
    }
}
