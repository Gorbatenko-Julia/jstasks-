function happyNumber(num){
    let m, n;
    let c=[];
    while(num!=1 && c[num]!==true){
    c[num]=true;
    m=0;
    while(num>0){
        n=num%10;
        m=m+n*n;
        num=(num-n)/10;
    }
    num=m;
}
return (num==1);
}
let cnt=5;
let num=1;
let f5='';
while(cnt-- > 0){
    while(!happyNumber(num))
    num++;
    f5=f5+num+ ", ";
    num++
}
console.log("Пять счастливых чисел:" +f5);
