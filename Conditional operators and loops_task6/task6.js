function Avgmarks_students(){
    let students=[["David", 80], ["Vinoth", 77], ["Divya", 88], ["Ishitha", 95], ["Thomas", 68]];
    let avgmarks=0;
    for(let i=0; i<students.length; i++){
        avgmarks=avgmarks+students[i][1];
       average=(avgmarks/students.length);
    }
    console.log("Средний бал:" + (avgmarks)/students.length);
    if (average<60){
        console.log("oценка 1");
    }
    else if (average<70){
        console.log("oценка 2");
    }
    else if(average<80){
        console.log("oценка 3");
    }
    else if(average<90){
        console.log("oценка 4");
    }
    else if(average<100){
        console.log("oценка 5");
}
}