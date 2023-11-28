function gcdNumber(){
    let a=2154;
    let b=458;
    let gcd;
    while(a!=b){
        if(a>b){
            a=a-b;
        }
        else{
            b=b-a;
        }
        gcd=a;
    }
    console.log(gcd);
}