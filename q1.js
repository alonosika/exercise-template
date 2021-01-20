function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
/**/
    // write your code here

    const arr= JSON.parse(input);
    if (toString.call(arr) === "[object Array]"){ 
        out= true;
    } else{
        out= false;  
    } 
    
/**/
    output.innerText = out;
}