function CreateObject(arr) {
    // Write your code here
    var object1={};
    var i=0;
    for(i=0;i<arr.length;i++){
        object1[arr[i]]=arr[i+1];
        i++;
    }
    return(object1);
}

module.exports = CreateObject;
