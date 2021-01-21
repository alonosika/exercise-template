function run() {
    const input = document.getElementById("input").value;
    const input1 = document.getElementById("input1").value;
    const output = document.getElementById("output");  
    let out = "";
       out= union(JSON.parse(input) , JSON.parse(input1));
       output.innerText = out;
        
    function union (arr1, arr2) {
    let unionArr = arr1.concat(arr2).sort((a, b) => a - b);
    return [...new Set(unionArr)];
    }
}