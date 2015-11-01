/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    if(n <= 2) return n;
    //if(n == 3)  return 5;
    var arr = [];
    arr[0] = 1;
    arr[1] = 1;
    arr[2] = 2;// 2 for 2
    var i = 0;
    for(i = 3; i <= n; i ++){
        var tmp = 0;
        var j = 0;
        for(j = i - 1; j >= Math.floor(i / 2); j --){
            tmp += arr[j] * 2 * arr[i - j - 1];
           if(j == i - j - 1) tmp -= arr[j] * arr[j];
        }//end for j
        arr[i] = tmp ;
    }//end for i
    return arr[n];
};
