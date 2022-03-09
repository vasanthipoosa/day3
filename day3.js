let values=["a", "e", "i" ,"o" ,"u"];
console.log(values.length);
values[10]=12;
console.log(values[6]);
console.log(values);
values.push(1);
console.log(values);
values.pop();
console.log(values);
values.shift();
console.log(values);
values.unshift();

let arr=[];
console.log("arr",arr);

function countString (arr){
    let count = 0;
    let tempArr = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (typeof(element)==="string") count++;
      
    }
    return count;
}

const result = countString(["a", "b", "c", 1, 3, 5]);
console.log(result);