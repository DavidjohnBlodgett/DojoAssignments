function rangePrint(start,end,skip = 1){
    // if(skip === undefined){
    //     skip = 1;
    // }
    if(end === undefined){
        end = start;
        start = 0;
    }
    for(var i = start;i < end;i = i + skip){
        console.log(i);
    }
}

console.log("####");
rangePrint(2,10,2);
console.log("####");
rangePrint(4,8);
console.log("####");
rangePrint(4);
console.log("####");
rangePrint(-2,5,2)
