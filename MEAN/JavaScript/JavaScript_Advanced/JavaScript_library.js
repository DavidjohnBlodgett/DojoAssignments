var _ = {
    map: function(list, iteratee) {
        for(var i=0;i<list.length;i++){
            list[i] = iteratee(list[i]);
        }
        return list;
    },
    reduce: function(list, iteratee, memo) {
        var result = 0;
        var idx = 0;

        if( typeof(memo) === 'undefined' ){
            memo = list[0];
            idx = 1;
        }

        for(var i = idx;i<list.length;i++){
            result = result + iteratee(memo,list[i]);
        }
        return result;
    },
    find: function(list, predicate) {
        for(var i=0;i<list.length;i++){
            if(predicate(list[i])){
                return list[i];
            }
        }
    },
    filter: function(list, predicate) {
        result = [];
        for(var i=0;i<list.length;i++){
            if(predicate(list[i])){
                result.push(list[i]);
            }
        }
        return result;
    },
    reject: function(list, predicate) {
        result = [];
        for(var i=0;i<list.length;i++){
            if(predicate(list[i])){
                continue;
            }
            result.push(list[i]);
        }
        return result;
    }
}

// TEST CASES... 

// a = [1,2,3];
// MAP
// console.log(_.map(a,function(num) { return num * 3}));

// REDUCE
// console.log(_.reduce(a,function(memo, num){ return memo + num; },0));
// console.log(_.reduce(a,function(memo, num){ return memo + num; }));

// FIND
// console.log(_.find(a,function(num){ return num % 2 == 0; }));

// FILTER
// console.log(_.filter([1, 2, 3, 4, 5, 6],function(num){ return num % 2 == 0; }));

// REJECT
// console.log(_.reject([1, 2, 3, 4, 5, 6],function(num){ return num % 2 == 0; }));
