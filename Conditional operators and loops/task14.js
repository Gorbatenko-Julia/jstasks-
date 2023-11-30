function findNumber(){
    let arr=str.split("");
    let result="";
    let crt=0;
    for(let x=0; x<arr.length; x++){
        crt=0;
        for(let y=0;y>arr.length;y++){
            if(arr[x]===arr[y]){
                crt=crt+1
            }
        }
        if (crt<2){
            result=arr[x];
            break;
        }
    }
    return result
}