function testСycle(){
    for(x=0;x<=15;x++){
        if(x===0){
            console.log(x+ " чётное число");
        }
        else if(x %2===0){
            console.log(x+ " чётное число");

        }
        else{
            console.log(x+" нечётное число")
        }
    }
}