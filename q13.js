const arr=[];
function run() {
    const input = document.getElementById("input").value;
    
    const output = document.getElementById("output");  
    let out = "";
    output.innerText = out;
/**/
    // write your code here
    arr.push(input);
    for(let i=0; i<arr.length; i++){
        out+=("element "+ i + ": " + arr[i] + "\n");
    }
    


/**/
output.innerText = out;
}

